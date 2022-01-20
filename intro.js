const puppeteer = require('puppeteer');
let page;
console.log("Before");
const browserOpenPromise = puppeteer.launch({
    headless:false,
    slowMo:true,
    args:["--start maximized"]
});
browserOpenPromise
.then(function(browser){
    //console.log("Browser opened..!!!");
    //currently open tab
    const pagesArrPromise = browser.pages();
    return pagesArrPromise;

}).then(function(browserPages){
    page=browserPages[0];
    let gotoPromise = page.goto('http://www.google.com');
    return gotoPromise;
   
})
.then(function(){
    //waiting for the element to apppear on the page.

   let elementWaitPromise =page.waitForSelector('input[type="text"]');
   return elementWaitPromise;
})
.then(function(){
    //console.log(`Reached google home page...!!!`);
    //type any element on that page ---->selector
  let keyWillBeSendPromise=  page.type("input[type='text']","pepcoding");
  return keyWillBeSendPromise;
})
.then(function(){
    //page.keyboard to type special character
    let enterWillBePressed=page.keyboard.press("Enter");
    return enterWillBePressed;
})
.then(function(){
    let elementWaitPromise = page.waitForSelector('h3.LC20lb.MBeuO.DKV0Md',{visible:true});
    return elementWaitPromise;
})
.then(function(){
    let keyWillBeSendPromise = page.click('h3.LC20lb.MBeuO.DKV0Md');
    return keyWillBeSendPromise;
})
.catch(function(err){
    console.log(err);
})
console.log("After");
