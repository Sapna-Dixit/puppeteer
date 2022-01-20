const puppeteer = require('puppeteer');
const iPhone    = puppeteer.devices['iPhone 6']

const devicePuppet = async ()=>{
    const browser = await puppeteer.launch|({headless : false})
    const page   = await page.newPage();

    await page.emulate(iPhone);
    await page.goto('http://www.google.com',{
        waitUntil : 'networkidle2'
    });

    await browser.close();
}