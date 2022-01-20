const puppeteer = require('puppeteer');

const puppeteers = async()=>{
const browser = await puppeteer.launch({headless : false});
const page    = await browser.newPage();
await page.goto('http://www.google.com');


const dimentions = await page.evaluate(()=>{
    return{
        width : document.documentElement.clientWidth,
        height : document.documentElement.clientHeight,
        deviceScaleFactor : window.devicePixelRatio
    }
});

console.log('Dimension :', dimentions);

await browser.close();

};


puppeteers();