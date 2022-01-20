const puppeteer = require('puppeteer');

const browsrFetchr = async()=>{
    const browserFetcher = puppeteer.createBrowserFetcher();
    const revisionInfo = await browserFetcher.download('533271');
    const browser = await puppeteer.launch({
        headless:false,
        executablePath : revisionInfo.executablePath,
    });
    const page = await browser.newPage();
    await page.goto('http://www.google.com');


}