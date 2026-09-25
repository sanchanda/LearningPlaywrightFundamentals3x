import { test, expect } from "@playwright/test";

test("verify the webtable tabe", async ({ page }) => {
    await page.goto("https://awesomeqa.com/webtable.html");
    const rows = await page.locator("//table[@id='customers']/tbody/tr").count();
    const columns = await page.locator("//table[@id='customers']/tbody/tr[2]/td").count();

    const firstPart = "//table[@id='customers']/tbody/tr[";
    const secondPart = "]/td[";
    const thirdPart = "]";

    for (let i = 2; i < rows; i++) {
        for (let j = 1; j < columns; j++) {
            let dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
            let cellData = await page.locator(dynamicPath).innerText();
            //  console.log(cellData);

            if (cellData.includes("Helen Bennett")) {

                let countryPath = `${dynamicPath}/following-sibling::td`
                let countryValue = await page.locator(countryPath).innerText();
                console.log('------');
                console.log(`Helen Bennett is In - ${countryValue}`);
            }

        }
    }



});