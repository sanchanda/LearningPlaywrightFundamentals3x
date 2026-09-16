import { chromium, Browser, BrowserContext, Page } from 'playwright'
import { test, expect } from '@playwright/test'

test('Browser Context Page', async () => {
    let browser: Browser = await chromium.launch({ headless: false });
    let context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();

    await page.goto('https://app.thetestingacademy.com');
    await expect(page).toHaveTitle(new RegExp('Blueprint')); //checking partial title
    //await expect(page).toHaveTitle('/blueprint/i');


    await page.close();
    await context.close();
    await browser.close();


});

//C:\LearningPlaywright\LearningPlaywrightFundamentals3x\tests\01_Basics> npx playwright test 220_BCP.spec.ts