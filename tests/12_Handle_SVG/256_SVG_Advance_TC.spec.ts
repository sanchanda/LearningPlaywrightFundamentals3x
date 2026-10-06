import { test, expect, Locator } from '@playwright/test'
test.describe('Handling SVG test cases ', () => {
    const URL = 'https://app.thetestingacademy.com/playwright/widgets/svg';

    test.beforeEach(async ({ page }) => {
        console.log("Before running every Testcase!")
        await page.goto(URL);
    });


    test('locate SVG root and assert visible', async ({ page }) => {

        await page.locator("svg circle[id='circle-red']").click();
        const outputText = await page.locator("#shapes-output").innerText();

        expect(outputText).toContain("circle-red");

        await page.getByRole('button', { name: /Q3 bar/ }).click();

        await page.getByRole('radio', { name: '4 stars' }).click();

        let allBars = await page.locator(".bar").all();
        for (const bar of allBars) {

            // logic which is the hegiht, low ......click on that.

            const q = await bar.getAttribute('data-quarter');
            const h = await bar.getAttribute('height');
            console.log(q);
            console.log(h);
        }



        await page.pause();

    });

});