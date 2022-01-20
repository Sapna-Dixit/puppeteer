const puppeteer = require('puppeteer');

const browserPptr = async()=>{
    const browser = await puppeteer.launch({});
    const browserWSEndpoint = browser.wsEndpoint();

    browser.disconnect();

    const browser2  = await puppeteer.connect({browserWSEndpoint});
    browser2.close();
}
browserPptr();