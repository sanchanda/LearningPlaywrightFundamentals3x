import { test, expect } from "@playwright/test";

test("Basic verify how to handle multiple elements", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    let linkInnerTexts: string[] = await page.locator("a.list-group-item").allInnerTexts();

    for (let link of linkInnerTexts) {
        console.log(link);
    }

    for (let linkText of linkInnerTexts) {
        if (linkText === "Forgotten Password") {
            await page.getByText(linkText).first().click();

        }

    }

    const rightPanelLinks = await page.locator('a.list-group-item').all();
    for (const link of rightPanelLinks) {
        console.log(await link.getAttribute("href"));
    }

});