const puppeteer = require("puppeteer");
const path = require('path');

module.exports = (async () => {
  const cacheDir = path.join(__dirname, 'puppeteer-cache');
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", `--user-data-dir=${cacheDir}`],
  });
  const page = await browser.newPage();

  await page.goto("https://account.google.com");

  const anti = await page.cookies();

  await browser.close();

  return anti;
})();
