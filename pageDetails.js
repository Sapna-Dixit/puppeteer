const puppeter = require("puppeteer");

const productDetails = async () => {
    try{
    const browser = await puppeter.launch({
        headless: false,
        defaultViewport:false,
        args: ['---start maximized----']
    });
    let page = await browser.newPage();
    await page.goto('https://www.amazon.ca/Amazon-com-ca-Inc/s?k=Amazon.com.ca%2C+Inc.');

    const rows = await (await page.$$('.a-size-mini.a-spacing-none.a-color-base.s-line-clamp-4 a'));
    console.log('---rows---', rows.length);
    for (let index = 0; index < rows.length; index++)
     {
            const sideURL = await (await rows[index].getProperty('href')).jsonValue();
            const page1 = await browser.newPage();
            console.log('---', sideURL);
            await page1.goto(sideURL);
              const result = await page1.evaluate(async() => {

                let title = document.getElementById('productTitle')?.innerText;
                 let price = document.getElementsByClassName('a-offscreen')[0]?.innerText;
                 let rating = document.getElementById('acrCustomerReviewLink')?.innerText;
                 let shipNSoldBy = document.getElementById('merchant-info')?.innerText;
                 console.log(shipNSoldBy); 
                 let shipFrom,soldby;
                 if(shipNSoldBy && shipNSoldBy.length>0)
                 {
                    const textStr= shipNSoldBy.split(" ");
                    console.log("---split---", textStr)
                     shipFrom = textStr[2];
                     soldby = textStr[6];
                     console.log(shipFrom);
                 }
                 else
                 {
                    shipFrom="NA";
                    soldby="NA";
                 } 
                 
                 let data = {
                     title :title,
                     price : price,
                     shipFrom: shipFrom,
                     soldBy : soldby,
                     rating : rating
                 }
                 let dataJson = JSON.stringify(data);
                 console.log(dataJson);
                 return dataJson;
             });
             console.log(result);
           await page1.close();
          // break;
    }
     await page.close();
     await browser.close();
    }
    catch(err)
    {
        console.log('----error-----'+err);
    }
}

productDetails();