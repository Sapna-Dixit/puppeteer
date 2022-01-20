const puppeteer = require('puppeteer')

const puppet = async()=>{
    const browser = await puppeteer.launch({
        headless:false,
        slowMo  : 250  //slow down by 250ms
    });
    //const browser = await puppeteer.launch();
    const page    = await browser.newPage();

    await page.goto('https://www.google.com',{waitUntil : 'networkidle2'});
   // await page.screenshot({path :'amazon.png'});

    // await page.pdf({ path: 'ama.pdf', format : 'a4' });
    //await page.pdf({ path: 'server1.pdf', format: 'a4' });

   //  await browser.close();

    page.once('load', ()=> console.log('page loaded !'));

    await page.close();

}
puppet();