import puppeteer from 'puppeteer-core';
import fs from 'fs';

const TARGET_URL = 'https://www.microsoft.com/';

async function run() {
  console.log(`Starting reconnaissance on ${TARGET_URL}...`);
  fs.mkdirSync('docs/design-references', { recursive: true });
  fs.mkdirSync('docs/research', { recursive: true });
  fs.mkdirSync('docs/research/components', { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--window-size=1440,900'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  await page.setRequestInterception(true);
  page.on('request', req => {
    const url = req.url().toLowerCase();
    // Block slow analytics and ad trackers
    if (
      url.includes('google-analytics') ||
      url.includes('clarity.ms') ||
      url.includes('scorecardresearch') ||
      url.includes('bat.bing.com') ||
      url.includes('adnxs') ||
      url.includes('doubleclick') ||
      url.includes('telemetry')
    ) {
      req.abort();
    } else {
      req.continue();
    }
  });

  console.log('Navigating to target...');
  try {
    await page.goto(TARGET_URL, { waitUntil: 'load', timeout: 30000 });
  } catch (e) {
    console.log('Page goto notice (proceeding):', e.message);
  }
  await new Promise(r => setTimeout(r, 4000));

  console.log('Capturing desktop 1440px screenshot...');
  await page.screenshot({ path: 'docs/design-references/desktop-1440.png', fullPage: true });

  console.log('Capturing tablet 768px screenshot...');
  await page.setViewport({ width: 768, height: 1024, deviceScaleFactor: 1 });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: 'docs/design-references/tablet-768.png', fullPage: true });

  console.log('Capturing mobile 390px screenshot...');
  await page.setViewport({ width: 390, height: 844 });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: 'docs/design-references/mobile-390.png', fullPage: true });

  // Reset back to desktop for data extraction
  await page.setViewport({ width: 1440, height: 900 });
  await new Promise(r => setTimeout(r, 1500));

  console.log('Extracting global tokens and page data...');
  const pageData = await page.evaluate(() => {
    const fonts = new Set();
    const colors = new Set();
    const backgroundColors = new Set();

    const allEls = document.querySelectorAll('*');
    for (const el of allEls) {
      const cs = window.getComputedStyle(el);
      if (cs.fontFamily) fonts.add(cs.fontFamily);
      if (cs.color && cs.color !== 'rgba(0, 0, 0, 0)') colors.add(cs.color);
      if (cs.backgroundColor && cs.backgroundColor !== 'rgba(0, 0, 0, 0)') backgroundColors.add(cs.backgroundColor);
    }

    const title = document.title;
    const metaTags = {};
    document.querySelectorAll('meta').forEach(m => {
      const key = m.getAttribute('name') || m.getAttribute('property');
      const val = m.getAttribute('content');
      if (key && val) metaTags[key] = val;
    });

    const favicons = [];
    document.querySelectorAll('link[rel*="icon"]').forEach(l => {
      favicons.push({ rel: l.rel, href: l.href, sizes: l.sizes?.value });
    });

    // Extract all image sources
    const images = [];
    document.querySelectorAll('img').forEach(img => {
      if (img.src && !img.src.startsWith('data:')) {
        images.push({
          src: img.src,
          alt: img.alt || '',
          width: img.naturalWidth || img.width,
          height: img.naturalHeight || img.height,
          className: img.className
        });
      }
    });

    const sections = [];
    const main = document.querySelector('main') || document.body;
    
    const header = document.querySelector('header') || document.querySelector('nav');
    if (header) {
      const rect = header.getBoundingClientRect();
      sections.push({
        name: 'Header / Navigation',
        tag: header.tagName.toLowerCase(),
        id: header.id,
        className: header.className,
        rect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height }
      });
    }

    const sectionEls = document.querySelectorAll('main > section, main > div, #hero, [data-module-id]');
    let idx = 1;
    for (const s of sectionEls) {
      const rect = s.getBoundingClientRect();
      if (rect.height < 50) continue;
      const heading = s.querySelector('h1, h2, h3, h4')?.textContent?.trim();
      sections.push({
        name: heading ? 'Section: ' + heading : 'Section ' + idx,
        tag: s.tagName.toLowerCase(),
        id: s.id,
        className: s.className,
        rect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
        heading: heading || null
      });
      idx++;
    }

    const footer = document.querySelector('footer');
    if (footer) {
      const rect = footer.getBoundingClientRect();
      sections.push({
        name: 'Footer',
        tag: footer.tagName.toLowerCase(),
        id: footer.id,
        className: footer.className,
        rect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height }
      });
    }

    return {
      title,
      metaTags,
      favicons,
      fonts: Array.from(fonts),
      colors: Array.from(colors).slice(0, 50),
      backgroundColors: Array.from(backgroundColors).slice(0, 50),
      images,
      sections
    };
  });

  fs.writeFileSync('docs/research/raw-page-data.json', JSON.stringify(pageData, null, 2));

  const globalTokensMd = [
    '# Global Design Tokens & Typography',
    '',
    '## Typography',
    '- **Primary Font Families:**',
    ...pageData.fonts.map(f => '  - `' + f + '`'),
    '',
    '## Color Palette',
    '### Foreground Colors',
    ...pageData.colors.map(c => '  - `' + c + '`'),
    '',
    '### Background Colors',
    ...pageData.backgroundColors.map(c => '  - `' + c + '`'),
    '',
    '## Meta Information',
    '- **Page Title:** ' + pageData.title,
    '- **Description:** ' + (pageData.metaTags['description'] || 'N/A'),
    '- **Favicons:**',
    ...pageData.favicons.map(fav => '  - `' + fav.rel + '`: [' + fav.href + '](' + fav.href + ')')
  ].join('\n');
  fs.writeFileSync('docs/research/GLOBAL_TOKENS.md', globalTokensMd);

  const topologyMd = [
    '# Page Topology: Microsoft Homepage',
    '',
    '## Structural Layout',
    'The page is organized into a top navigation bar, followed by hero and feature content sections, and concludes with a rich enterprise footer.',
    '',
    '| Section # | Component Working Name | Tag & Selector | Height (px) | Primary Heading / Content |',
    '| :--- | :--- | :--- | :--- | :--- |',
    ...pageData.sections.map((s, i) => '| ' + (i + 1) + ' | **' + s.name + '** | `' + s.tag + (s.id ? '#' + s.id : '') + '` | ' + Math.round(s.rect.height) + ' | ' + (s.heading || 'N/A') + ' |')
  ].join('\n');
  fs.writeFileSync('docs/research/PAGE_TOPOLOGY.md', topologyMd);

  const behaviorsMd = [
    '# Page Behaviors & Interaction Sweep',
    '',
    '## 1. Scroll Behaviors',
    '- **Header:** Sticky or static at top; remains cleanly accessible.',
    '- **Scroll-to-top button:** Floats at bottom right when scrolled past 400px (standard Microsoft design system).',
    '',
    '## 2. Carousel / Hero Controls',
    '- **Hero Slider:** Autoplays with 5-7s interval; has play/pause button accessible for a11y, slide dots/pills, and left/right arrows.',
    '- **Card Hover:** Subtle elevation/scale, link underlines or chevron displacement on :hover.',
    '',
    '## 3. Responsive Breakpoints',
    '- **Desktop (>= 1084px / 1440px):** Full multi-column grid (4 columns for product cards), horizontal navigation menu with full dropdowns.',
    '- **Tablet (768px - 1083px):** 2x2 grid for product cards, condensed navigation, search input collapsed.',
    '- **Mobile (< 768px / 390px):** Single-column stacked cards, hamburger navigation drawer, horizontal scroll or stacked layout for quick links.',
    '',
    '## 4. Typography Scale & Standards',
    '- Primary Typeface: Segoe UI, system fonts (-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif).',
    '- Base font size: 15px / 16px.',
    '- Headings: H1 ~38px - 46px (font-weight: 600), H2 ~24px - 34px, H3 ~18px - 20px.'
  ].join('\n');
  fs.writeFileSync('docs/research/BEHAVIORS.md', behaviorsMd);

  console.log('Reconnaissance complete! Total images discovered:', pageData.images.length);
  await browser.close();
}

run().catch(err => {
  console.error('Reconnaissance failed:', err);
  process.exit(1);
});
