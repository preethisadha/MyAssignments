import test, { chromium } from "@playwright/test";

test("Launch Browser", async ({page}) => {

// const browserInstance = await chromium.launch({headless:false});

// const browserContext = await browserInstance.newContext();

// const page = await browserContext.newPage();

await page.goto("http://leaftaps.com/opentaps/control/main");

await page.waitForTimeout(5000);

});