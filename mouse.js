const puppeteer = require("puppeteer");

const mousePptr = async ()=>{
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport :false,
    });
    const page = await browser.newPage();
    await page.goto('')
}