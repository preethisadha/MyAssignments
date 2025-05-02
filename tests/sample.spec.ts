

import test, { firefox } from "@playwright/test";

test("Launch Browser", async () => {

const browserInstance = await firefox.launch({headless:true});

const browserContext = await browserInstance.newContext();

const page = await browserContext.newPage();

await page.goto("https://www.icicibank.com/personal-banking/insta-banking/internet-banking");

await page.waitForTimeout(5000);

});


// import test from "playwright/test";
// test ('Launch browser', async ({page})=> {
// await page.goto ("https://www.gmail.com");
// console.log(await page.title());
// });