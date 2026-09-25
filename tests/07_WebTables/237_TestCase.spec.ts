import { test, expect } from "@playwright/test";

test("verify the table data", async ({ page }) => {
    await page.goto("https://awesomeqa.com/webtable1.html");
    const rows = page.locator("table[summary='Sample Table'] tbody tr");
    const rowsCount = await rows.count();
    console.log(`Rowscount is ${rowsCount}`);

    for (let i = 0; i < rowsCount; i++) {
        let rowData = await rows.nth(i).locator("td").allInnerTexts();
        console.log(`Row ${i + 1}:`, rowData);

    }

    await page.pause();

});