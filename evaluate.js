const puppeteer = require('puppeteer');
const { CLOSING } = require('ws');

const pptr = async ()=>{
    const browser = await puppeteer.launch({
        headless : false,
        slowMo:true,
    defaultViewport:null
})
    const page    = await browser.newPage();
    await page.goto('https://flaviocopes.com', {
        waitUntil :'networkidle0',
    });

    const results = await page.evaluate(()=>{
        return document.querySelector('.footer-tag a');
    });
    console.log(results);
   // await browser.close();
}

pptr();