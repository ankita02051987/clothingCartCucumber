const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser, page;

       
         Given('I visit the login page', async function () {
           browser = await chromium.launch({headless : false}) 
           const context = await browser.newContext();
           page = await context.newPage();
           await page.goto('http://localhost:5173'); 
         });
       
  
       
         When('the user enters a valid username and password',{ timeout: 10000 }, async function () {
            await page.fill('input[placeholder="Enter email"]', 'ank@gmail.com'); // Adjust the input selector if needed
            await page.fill('input[placeholder="Password"]', 'secret_sauce'); // Placeholder password
          });
          
          When('clicks the login button',{ timeout: 10000 }, async function () {
            await page.click('button[type="submit"]'); // Adjust selector if needed
          });
          
          Then('the user is navigated to the product page', { timeout: 10000 },async function () {
            await page.waitForSelector('text=Products'); // Or page.waitForURL('**/products')
          });
          
          Then('sees all products listed', { timeout: 10000 }, async function () {
            const products = await page.$$('.product-item');
            if (products.length < 6) {
              throw new Error(`Expected 6 products, but found ${products.length}`);
            }
          
            await browser.close();
          });
          