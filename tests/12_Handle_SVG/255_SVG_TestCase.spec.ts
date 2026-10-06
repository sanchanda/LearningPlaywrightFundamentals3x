import { test, expect, Locator } from '@playwright/test'

test.describe('Handling SVG test cases ', () => {
    const URL = 'https://www.flipkart.com/search';

    test.beforeEach(async ({ page }) => {
        console.log("Before running every Testcase!")
        await page.goto(URL);

    });

    test('Verify the SVG elements', async ({ page }) => {

        await page.locator('input[name = "q"]').fill('macmini');
        const svgElements: Locator = page.locator('svg');
        await svgElements.first().click();
        await page.waitForLoadState('domcontentloaded');

        const productNames: Locator = page.locator("//div[contains(@data-id,'CPU') or contains(@data-id,'MP') or contains(@data-id,'ACC') or contains(@data-id,'COM')]/div/a[2]");
        let count = await productNames.count();

        console.log(`Total number of product elements found: ${count}`);

        for (let i = 0; i < count; i++) {
            const productTextContent = await productNames.nth(i).textContent();
            const productInnerText = await productNames.nth(i).innerText();

            console.log(`Product ${i + 1}: Text Content: ${productTextContent}, Inner Text: ${productInnerText}`);
            /*

            textContent() returns ALL text in the node including hidden elements, without CSS processing — it's the raw DOM text.

            innerText() returns only rendered (visible) text and respects CSS (display:none, visibility:hidden are excluded), plus it normalizes whitespace and reflects
            line breaks from styling.

   */
        }

    }
    );


});