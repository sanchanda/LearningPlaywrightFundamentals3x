import { test, expect } from "@playwright/test";

test("Select checkbox for Rohan Mehta ", async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/webtable");

    const tablePath = "//table[@aria-label='Employee Management System table']/tbody[@id='employee-body']/tr"
    const userNamePath1 = `${tablePath}[`;
    const userNamePath2 = "]/td[";
    const userNamePath3 = "]";

    const rows = await page.locator(tablePath).count();
    let j = 2;
    for (let i = 1; i < rows; i++) {
        let dynamicPath = `${userNamePath1}${i}${userNamePath2}${j}${userNamePath3}`;
        let userName = await page.locator(dynamicPath).innerText();
        if (userName.includes("Rohan.Mehta")) {
            let checkBoxPath = `${dynamicPath}/preceding-sibling::td//input[@type='checkbox']`;
            await page.locator(checkBoxPath).check();
            break;
        }
    }

    await page.pause();
});