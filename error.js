const puppeteer = require('puppeteer');

const errorPuppet = async() =>{
    const browser = await puppeteer.launch({headless: false});
    
}