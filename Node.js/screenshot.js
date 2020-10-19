const puppeteer = require("puppeteer-core");

async function getPic() {
  const browser = await puppeteer.launch({
    executablePath: "./chrome-win/chrome.exe",
  });
  const page = await browser.newPage();
  await page.goto("https://zhihu.com", {
    waitUntil: 'networkidle0',
  });
  await page.setViewport({ width: 1980, height: 1080 });
  await page.content();
  await page.screenshot({
    path: "zhihu.png",
    type: "jpeg",
    quality: 100,
    fullPage: true
  });

  await browser.close();
}

getPic();
