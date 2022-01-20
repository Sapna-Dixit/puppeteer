const puppeteer = require('puppeteer');

const puppet = async ()=>{
    const browser = await puppeteer.launch({product :'firefox'});
    const page  = await browser.newPage();
    await page.goto('http://www.google.com',{
        waitUntil : 'networkidle2',
        slowMo    : 300
    });

    page.on('console', (msg)=>{console.log('PAGE LOG',  msg.text())});
    await page.evaluate(()=>{console.log(`url id ${location.href}`)});


    
await browser.close();
}