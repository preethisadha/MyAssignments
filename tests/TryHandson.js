
// var age="37"
// //String value  convert into Number -> +
// console.log(typeof(+age)+  "its convert into Number")

import test, { chromium } from "@playwright/test";

test("Launch Browser", async () => {

const browserInstance = await chromium.launch({headless:false,channel:'chrome'});

const browserContext = await browserInstance.newContext();

const page = await browserContext.newPage();

await page.goto("https://www.icicibank.com/personal-banking/insta-banking/internet-banking");

//await page.waitForTimeout(5000);

});