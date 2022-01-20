const puppeteer = require("puppeteer");

const keyboardPptr = async ()=>{
    const browser = await puppeteer.launch({
        headless :false,
        defaultViewport:false,
        
    });
    const page = await browser.newPage();
    await page.goto('http://www.google.com');

    await page.keyboard.type('News world!');
    await page.keyboard.press('ArrowLeft');

    await page.keyboard.press("Shift");
    for(let i=0;i<' world'.length;i++)
        await page.keyboard.press('ArrowRight');
    await page.keyboard.up("Shift");

    await page.keyboard.press('Backspace');

}
keyboardPptr();