import { test, expect } from '@playwright/test'

test("Verify filling the QA Profile form", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/practice#page");
    await page.getByTestId('first-name').fill('Santosh');
    await page.getByTestId('last-name').fill('Kumar');
    await page.getByTestId('gender-male').check();
    await page.getByTestId('years-experience').selectOption('6');
    await page.getByTestId('profile-date').fill('2026-10-03');
    // await page.getByText('Automation Tester', { exact: true }).click();
    await page.getByTestId('profession-automation').check();
    await page.getByTestId('tool-uft').check();
    await page.getByTestId('continent-asia').check();
    await page.getByTestId('continent-north-america').check();
    await page.getByTestId('upload-image').setInputFiles('upwork-Santosh-Image.png');
    await page.getByTestId('profile-submit').click();
    const output = JSON.parse(await page.locator('#submission-output').innerText());
    expect(output).toMatchObject({
        firstName: 'Santosh',
        lastName: 'Kumar',
        gender: 'Male',
        yearsExperience: '6',
        date: '2026-10-03',
        profession: 'Automation Tester',
        tools: 'UFT',
        continents: ['Asia', 'North America'],
    });

    await page.pause();

});