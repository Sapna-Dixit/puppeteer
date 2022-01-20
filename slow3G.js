const puppeteer = require('puppeteer');
const slow3G    = puppeteer.networkConditions['Slow 3G'];

const slow3GPuppeteer = async ()=>{
    const browser = await puppeteer.launch();
    const page    = await browser.newPage();
    await page.emulateNetworkConditions(slow3G);
    await page.goto('http://www.google.com');

    await browser.close();

}