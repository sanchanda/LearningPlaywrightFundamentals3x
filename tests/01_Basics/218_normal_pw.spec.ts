import { chromium, Browser, BrowserContext, Page } from "playwright";
import { test, expect } from "@playwright/test";

test('Normal Playwright Test', async () => {

    let browser: Browser = await chromium.launch({ headless: false });
    let context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();

    await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    await expect(page).toHaveTitle("TTACart - Login");
});