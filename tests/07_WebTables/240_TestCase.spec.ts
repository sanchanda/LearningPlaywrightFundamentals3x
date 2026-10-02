import { test, expect, Locator } from '@playwright/test';

test('Verify locating element based on td text', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/webtable");

    //Method 1 to click check box of Rohan.Mehta
    // await page.locator('//td[text()="Rohan.Mehta"]/preceding-sibling::td/input').click();

    //Method 2 to click check box of Rohan.Mehta
    await page.locator("tr:has(td:text('Rohan.Mehta'))")
        .locator('input')
        .first()
        .click();

    // await page.pause();
    await page.waitForTimeout(5000);
});