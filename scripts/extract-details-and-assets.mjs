import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const TARGET_URL = 'https://www.microsoft.com/';

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https') ? https : http;
    client.get(url, response => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed with status code: ${response.statusCode}`));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', err => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('Extracting detailed section specs and assets...');
  fs.mkdirSync('public/images', { recursive: true });
  fs.mkdirSync('public/icons', { recursive: true });
  fs.mkdirSync('docs/research/components', { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.setRequestInterception(true);
  page.on('request', req => {
    const u = req.url().toLowerCase();
    if (u.includes('analytics') || u.includes('clarity.ms') || u.includes('scorecardresearch') || u.includes('bat.bing.com')) {
      req.abort();
    } else {
      req.continue();
    }
  });

  await page.goto(TARGET_URL, { waitUntil: 'load', timeout: 30000 }).catch(e => console.log('Proceeding after:', e.message));
  await new Promise(r => setTimeout(r, 4000));

  // Extract deep data from page
  const detailedData = await page.evaluate(() => {
    // 1. Header Details
    const header = document.querySelector('header');
    const headerLinks = [];
    if (header) {
      header.querySelectorAll('nav a, nav button').forEach(el => {
        const text = el.textContent?.trim();
        if (text) headerLinks.push({ text, href: el.getAttribute('href') || '#' });
      });
    }

    // 2. Hero Section
    // Usually contains h1/h2, description paragraph, CTA button(s), and an image/picture
    let hero = null;
    const heroEl = document.querySelector('[data-view-name*="hero"], .c-carousel, .m-hero-item, section:first-of-type') || document.querySelector('main > div:first-child');
    if (heroEl) {
      const heading = heroEl.querySelector('h1, h2, h3')?.textContent?.trim();
      const p = heroEl.querySelector('p')?.textContent?.trim();
      const ctas = [...heroEl.querySelectorAll('a, button')].map(b => ({
        text: b.textContent?.trim(),
        href: b.getAttribute('href') || '#'
      })).filter(b => b.text && b.text.length < 50);
      const img = heroEl.querySelector('img')?.src;
      hero = { heading, p, ctas, img };
    }

    // 3. Quick Links strip (Icon + text links)
    const quickLinks = [];
    document.querySelectorAll('.c-group, .c-list, ul.c-list, [data-view-name*="quicklinks"], .m-quick-links li, .m-channel-placement li, [class*="quick-links"] li').forEach(item => {
      const text = item.textContent?.trim();
      const img = item.querySelector('img')?.src;
      const href = item.querySelector('a')?.getAttribute('href') || '#';
      if (text && text.length > 2 && text.length < 60) {
        quickLinks.push({ text, img, href });
      }
    });

    // 4. Content Cards (Consumer & Business)
    const allCards = [];
    document.querySelectorAll('.c-card, .m-content-placement-item, [class*="content-card"], [data-view-name*="card"]').forEach(card => {
      const heading = card.querySelector('h2, h3, h4, .c-heading')?.textContent?.trim();
      const desc = card.querySelector('p, .c-paragraph')?.textContent?.trim();
      const img = card.querySelector('img')?.src;
      const badge = card.querySelector('.c-badge, .m-badge, [class*="badge"]')?.textContent?.trim();
      const cta = card.querySelector('a, button')?.textContent?.trim();
      const href = card.querySelector('a')?.getAttribute('href') || '#';
      if (heading) {
        allCards.push({ heading, desc, img, badge, cta, href });
      }
    });

    // 5. Large Feature Promo Banner (e.g. OneNote or Copilot full width)
    let promoBanner = null;
    const bannerEl = document.querySelector('[class*="feature-banner"], [class*="large-banner"], [data-view-name*="banner"], [class*="banner-horizontal"]');
    if (bannerEl) {
      promoBanner = {
        heading: bannerEl.querySelector('h2, h3')?.textContent?.trim(),
        desc: bannerEl.querySelector('p')?.textContent?.trim(),
        cta: bannerEl.querySelector('a, button')?.textContent?.trim(),
        img: bannerEl.querySelector('img')?.src
      };
    }

    // 6. Footer Links
    const footerColumns = [];
    const footer = document.querySelector('footer');
    if (footer) {
      footer.querySelectorAll('[class*="group"], [class*="column"], .c-uhff-nav-group, [class*="directory-group"]').forEach(col => {
        const title = col.querySelector('h2, h3, h4, .c-heading, [class*="title"]')?.textContent?.trim();
        const links = [...col.querySelectorAll('a')].map(a => ({
          text: a.textContent?.trim(),
          href: a.getAttribute('href') || '#'
        })).filter(a => a.text);
        if (title && links.length > 0) {
          footerColumns.push({ title, links });
        }
      });
    }

    // 7. Computed style measurements on key elements
    const bodyStyles = window.getComputedStyle(document.body);
    const h1 = document.querySelector('h1, h2');
    const h1Styles = h1 ? window.getComputedStyle(h1) : null;
    const cardEl = document.querySelector('.c-card, [class*="card"]');
    const cardStyles = cardEl ? window.getComputedStyle(cardEl) : null;
    const btnEl = document.querySelector('a.c-button, button.c-button, a[class*="button"]') || document.querySelector('main a');
    const btnStyles = btnEl ? window.getComputedStyle(btnEl) : null;

    return {
      headerLinks,
      hero,
      quickLinks,
      allCards,
      promoBanner,
      footerColumns,
      computed: {
        body: {
          fontFamily: bodyStyles.fontFamily,
          fontSize: bodyStyles.fontSize,
          color: bodyStyles.color,
          backgroundColor: bodyStyles.backgroundColor
        },
        heading: h1Styles ? {
          fontFamily: h1Styles.fontFamily,
          fontSize: h1Styles.fontSize,
          fontWeight: h1Styles.fontWeight,
          lineHeight: h1Styles.lineHeight,
          color: h1Styles.color
        } : null,
        card: cardStyles ? {
          backgroundColor: cardStyles.backgroundColor,
          borderRadius: cardStyles.borderRadius,
          boxShadow: cardStyles.boxShadow,
          padding: cardStyles.padding
        } : null,
        button: btnStyles ? {
          backgroundColor: btnStyles.backgroundColor,
          color: btnStyles.color,
          fontSize: btnStyles.fontSize,
          fontWeight: btnStyles.fontWeight,
          padding: btnStyles.padding,
          borderRadius: btnStyles.borderRadius
        } : null
      }
    };
  });

  fs.writeFileSync('docs/research/detailed-page-data.json', JSON.stringify(detailedData, null, 2));
  console.log('Detailed page data captured.');

  // Download all images from raw-page-data.json
  const rawData = JSON.parse(fs.readFileSync('docs/research/raw-page-data.json', 'utf8'));
  const assetMap = {};
  let imgIdx = 1;

  for (const img of rawData.images) {
    try {
      const ext = path.extname(new URL(img.src).pathname) || '.webp';
      const cleanName = `asset-${imgIdx}${ext.split('?')[0]}`;
      const localPath = path.join('public/images', cleanName);
      console.log(`Downloading ${img.src} -> ${localPath}...`);
      await downloadFile(img.src, localPath);
      assetMap[img.src] = `/images/${cleanName}`;
      imgIdx++;
    } catch (e) {
      console.log(`Failed to download ${img.src}: ${e.message}`);
    }
  }

  // Also download favicon
  if (rawData.favicons?.[0]?.href) {
    try {
      await downloadFile(rawData.favicons[0].href, 'public/favicon.ico');
    } catch (e) {
      console.log('Favicon download notice:', e.message);
    }
  }

  fs.writeFileSync('docs/research/asset-map.json', JSON.stringify(assetMap, null, 2));

  // Write individual component spec files
  // 1. HeaderNav
  fs.writeFileSync('docs/research/components/HeaderNav.spec.md', `# HeaderNav Specification

## Overview
- **Target file:** \`src/components/HeaderNav.tsx\`
- **Screenshot:** \`docs/design-references/desktop-1440.png\`
- **Interaction model:** Click-driven dropdowns (All Microsoft, Search, Cart, Account); mobile drawer on < 768px.

## Computed Styles
- Height: 54px
- Background: #ffffff
- BorderBottom: 1px solid #e6e6e6 (subtle separator)
- MaxWidth: 1600px centered
- Font: Segoe UI, 13px, font-weight 400
- Hover: text underline or subtle highlight

## Structure & Links
- Left: Microsoft 4-square logo (108px x 23px)
- Nav Items: Microsoft 365, Teams, Copilot, Windows, Surface, Xbox, Support
- Right Actions: All Microsoft (dropdown with chevron), Search (icon + modal), Cart (icon), Sign In (icon + label)
`);

  // 2. HeroBanner
  fs.writeFileSync('docs/research/components/HeroBanner.spec.md', `# HeroBanner Specification

## Overview
- **Target file:** \`src/components/HeroBanner.tsx\`
- **Screenshot:** \`docs/design-references/desktop-1440.png\`
- **Interaction model:** Static banner / Carousel slider with pause/play & slide navigation.

## Content & Layout
- Heading: "Maximise the everyday with Microsoft 365"
- Description: "Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan."
- CTA Primary: "For 1 person" (Blue background #0067b8, white text)
- CTA Secondary: "For up to 6 people" (Text link with chevron >)
- Image: Local path \`/images/asset-2.webp\`
- Background: Soft neutral gradient #e6f2fb / #f4f4f4
- Responsive: Reverse order on mobile (image on top, content card below)
`);

  // 3. QuickLinks
  fs.writeFileSync('docs/research/components/QuickLinks.spec.md', `# QuickLinks Specification

## Overview
- **Target file:** \`src/components/QuickLinks.tsx\`
- **Screenshot:** \`docs/design-references/desktop-1440.png\`
- **Interaction model:** Static horizontal strip with hover underline.

## Items
1. Choose your Microsoft 365
2. Shop Surface devices
3. Buy Windows 11
4. Explore Xbox consoles and games
- Layout: 4-column centered flex/grid, gap 32px, text-center, font-weight 600, color #0067b8
`);

  // 4. ProductCardGrid (Consumer)
  fs.writeFileSync('docs/research/components/ProductCardGrid.spec.md', `# ProductCardGrid Specification

## Overview
- **Target file:** \`src/components/ProductCardGrid.tsx\`
- **Screenshot:** \`docs/design-references/desktop-1440.png\`
- **Interaction model:** 4-column card grid, hover lift/underline.

## Cards
1. **Designed for life today – and tomorrow**
   - Desc: "The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love."
   - CTA: "See if your PC is ready"
   - Image: \`/images/asset-3.webp\`
2. **Microsoft Edge**
   - Desc: "World-class performance with more privacy, more productivity and more value while you browse."
   - CTA: "Download now"
   - Image: \`/images/asset-5.webp\`
3. **Microsoft OneDrive**
   - Desc: "Save your files and photos to OneDrive and access them from any device, anywhere."
   - CTA: "Learn more"
   - Image: \`/images/asset-6.webp\`
4. **Organise your life with Bing Wallpaper**
   - Desc: "Explore the world one photo at a time with breathtaking images on your desktop."
   - CTA: "Install now"
   - Image: \`/images/asset-4.webp\`
`);

  // 5. MidPromoBanner
  fs.writeFileSync('docs/research/components/MidPromoBanner.spec.md', `# MidPromoBanner Specification

## Overview
- **Target file:** \`src/components/MidPromoBanner.tsx\`
- **Screenshot:** \`docs/design-references/desktop-1440.png\`
- **Interaction model:** Full-width hero-style banner.

## Content
- Heading: "Organise your world with OneNote"
- Description: "Capture your thoughts, discoveries and ideas in your very own digital notebook."
- CTA: "Learn more" (Button #0067b8)
- Background Image: \`/images/asset-7.webp\`
`);

  // 6. BusinessCardGrid
  fs.writeFileSync('docs/research/components/BusinessCardGrid.spec.md', `# BusinessCardGrid Specification

## Overview
- **Target file:** \`src/components/BusinessCardGrid.tsx\`
- **Screenshot:** \`docs/design-references/desktop-1440.png\`
- **Interaction model:** 4-column card grid for commercial solutions.

## Section Header
- Heading: "For business" (H2, 28px, font-weight 600)

## Cards
1. **Microsoft 365 Copilot**
   - Desc: "Save time and focus on the things that matter most with AI in Microsoft 365 for business."
   - CTA: "Learn more"
   - Image: \`/images/asset-8.webp\`
2. **Visual Studio 2026**
   - Desc: "Get the most comprehensive IDE for .NET and C++ developers on Windows for building across web, cloud, desktop, and mobile."
   - CTA: "Download Visual Studio 2026"
   - Image: \`/images/asset-9.webp\`
3. **Get Microsoft Teams for your business**
   - Desc: "Online meetings, chat, real-time collaboration, and shared cloud storage – all in one place."
   - CTA: "Find the right plan for your business"
   - Image: \`/images/asset-10.webp\`
4. **Welcome to your Windows 365 Cloud PC**
   - Desc: "Securely stream your Windows experience from the Microsoft Cloud to any device."
   - CTA: "Get it today"
   - Image: \`/images/asset-11.webp\`
`);

  // 7. SocialFollowStrip
  fs.writeFileSync('docs/research/components/SocialFollowStrip.spec.md', `# SocialFollowStrip Specification

## Overview
- **Target file:** \`src/components/SocialFollowStrip.tsx\`
- Layout: Row with "Follow Microsoft" label + X logo + LinkedIn logo + Facebook icon.
- Alignment: Left aligned or flex gap 16px.
`);

  // 8. Footer
  fs.writeFileSync('docs/research/components/Footer.spec.md', `# Footer Specification

## Overview
- **Target file:** \`src/components/Footer.tsx\`
- **Screenshot:** \`docs/design-references/desktop-1440.png\`
- Background: #f2f2f2
- Color: #616161
- Font size: 11px - 13px
- Columns:
  1. What's new (Microsoft 365, Games, Copilot, Windows 11 apps)
  2. Microsoft Store (Account profile, Download Center, Returns, Order tracking)
  3. Education (Microsoft in education, Devices for education, Microsoft Teams for Education, Office Education)
  4. Business (Microsoft Cloud, Microsoft Security, Azure, Dynamics 365, Microsoft 365)
  5. Developer & IT (Microsoft Developer, Documentation, Microsoft Learn, Azure Marketplace)
  6. Company (Careers, About Microsoft, Company news, Privacy at Microsoft, Investors, Sustainability)
- Bottom bar:
  - Language picker: Earth icon + "English (Nigeria)" or "English (United States)"
  - Your Privacy Choices chip
  - Consumer Health Privacy
  - Contact Microsoft, Privacy, Terms of use, Trademarks, Safety & eco, About our ads, © Microsoft 2026
`);

  console.log('All spec files and assets successfully processed!');
  await browser.close();
}

run().catch(err => {
  console.error('Extraction failed:', err);
  process.exit(1);
});
