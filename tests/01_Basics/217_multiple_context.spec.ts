import { chromium } from "playwright";
import { test } from "@playwright/test";

test('Multiple context test', async () => {
    let browser = await chromium.launch({ headless: false });
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://app.thetestingacademy.com/");


    let browser1 = await chromium.launch({ headless: false });
    let context1 = await browser1.newContext();
    let page1 = await context1.newPage();

    await page1.goto("https://www.sdetclub.com/");



    await page.close();
    await context.close();
    await browser.close();

    await page1.close();
    await context1.close();
    await browser1.close();

});