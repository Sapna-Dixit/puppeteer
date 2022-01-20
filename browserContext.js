const puppeteer = require("puppeteer");

const browserContext = async ()=>{
    const browser = await puppeteer.launch({headless:false});
    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();
    await page.goto('http://www.google.com');
    // await context.close();
}
browserContext();