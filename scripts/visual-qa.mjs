import puppeteer from 'puppeteer-core';

async function run() {
  console.log('Running Visual QA on SS4 Redesigned page http://127.0.0.1:3010...');
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

  // Block outside external fonts if they hang
  await page.setRequestInterception(true);
  page.on('request', req => {
    if (req.url().includes('fonts.googleapis.com') || req.url().includes('fonts.gstatic.com')) {
      req.abort();
    } else {
      req.continue();
    }
  });

  // 1. Desktop 1440px
  await page.setViewport({ width: 1440, height: 900 });
  try {
    await page.goto('http://127.0.0.1:3010', { waitUntil: 'load', timeout: 10000 });
  } catch (e) {
    console.log('Goto completed/proceeding:', e.message);
  }
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: 'docs/design-references/ss4-redesign-desktop-1440.png', fullPage: true });
  console.log('Captured ss4-redesign-desktop-1440.png');

  // 2. Mobile 390px
  await page.setViewport({ width: 390, height: 844 });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'docs/design-references/ss4-redesign-mobile-390.png', fullPage: true });
  console.log('Captured ss4-redesign-mobile-390.png');

  await browser.close();
  console.log('Visual QA complete!');
}

run().catch(err => {
  console.error('Visual QA failed:', err);
  process.exit(1);
});
