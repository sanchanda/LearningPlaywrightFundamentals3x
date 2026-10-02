import { test, expect } from '@playwright/test'

test("Calculate Amount Spent", async ({ page }) => {
    await page.goto("https://demo.applitools.com/");

    await page.getByRole("textbox", { name: "Enter your username" }).fill("Admin");
    await page.getByRole("textbox", { name: "Enter your password" }).fill("Password@123");
    await page.getByRole("link", { name: "Sign in" }).click();

    await expect(page).toHaveURL("https://demo.applitools.com/app.html");

    let rowCount = await page.locator("table[class='table table-padded'] tbody tr").count();
    // console.log(`Total number of rows in the table: ${rowCount}`);
    let rows = await page.locator("table[class='table table-padded'] tbody tr").all();

    let total = 0;

    for (let i = 0; i < rowCount; i++) {
        let raw = (await rows[i].locator("td").nth(4).innerText()).replace("USD", "").trim();  // " + 1,250 USD " -> " + 1,250 "
        let value = Number(raw.replace(/[^0-9.-]/g, ""));   // " + 1,250 " -> "1250", " - 320 " -> "-320"
        total += value;
        // console.log(`Amount spent in row ${i}: ${raw} -> ${value}`);
    }

    console.log(`Total amount spent: ${total.toFixed(2)}`);


});