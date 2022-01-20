const puppeteer = require('puppeteer');
const puppeteerFireFox = require('puppeteer-firefox');

const pptr = async ()=>{
    const browser = await puppeteer.launch({product :'firefox'});
    console.info(browser);
    await browser.close();
}

pptr();