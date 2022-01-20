const puppeter = require("puppeteer");

const productDetails = async () => {
    const browser = await puppeter.launch({
        headless: false,
        args: ['---start maximized']
    });
    const page = await browser.newPage();
    await page.goto('https://www.amazon.ca/s?k=B00OBVPFEA&ref=nb_sb_noss')
    await page.waitForSelector('span.a-size-base-plus.a-color-base.a-text-normal', { visible: true });
    await page.click('span.a-size-base-plus.a-color-base.a-text-normal');

    await page.waitForTimeout(4000)

    const result = await page.evaluate(() => {
        
       let title = document.getElementById('productTitle')?.innerText;
        let price = document.getElementsByClassName('a-offscreen')[0]?.innerText;
        let shipNSoldBy = document.getElementById('merchant-info')?.innerText;
        console.log(shipNSoldBy); 
        const textStr= shipNSoldBy.split(" ");
        let shipFrom = textStr[2];
        let soldby = textStr[6]+" "+textStr[7]
        console.log(shipFrom);

        let rating = document.getElementById('acrCustomerReviewLink')?.innerText;
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
    })
  console.log(result);
   
}

productDetails();