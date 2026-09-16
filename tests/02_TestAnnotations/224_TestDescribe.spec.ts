import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {

    test('valid credentials', async ({ page }) => {
        await page.goto("https://app.thetestingacademy.com/playwright/");
    });
    test('invalid password', async ({ page }) => {
        await page.goto("https://app.thetestingacademy.com/playwright/");
    });

    test.fixme('1checkout with PayPal', async ({ page }) => {
        // never executes
    });

    test.skip('checkout with PayPal', async ({ page }) => {
        // never executes
    });
    // test.only('checkout with PayPal2', async ({ page }) => {
    //     // which
    // });
});


test.describe('Admin Page', () => {

    test('Admin valid credentials', async ({ page }) => {
        await page.goto("https://app.thetestingacademy.com/playwright/");
    });
    test('Admin invalid password', async ({ page }) => {
        await page.goto("https://app.thetestingacademy.com/playwright/");
    });

    test.fixme('Admin checkout with PayPal', async ({ page }) => {
        // never executes
    });

    test.skip('Admin Skip checkout with PayPal', async ({ page }) => {
        // never executes
    });
    // test.only('checkout with PayPal2', async ({ page }) => {
    //     // which
    // });
});


// npx playwright test -g "Login Page"
// npx playwright test -g "Admin Page"
// npx playwright test -g "Admin Page" --headed
// npx playwright test -g "Admin Page" --headed --browser=firefox
//npx playwright test -g "Admin Page" --headed --browser=firefox --project=firefox
//npx playwright test -g "Admin Page" --headed --browser=firefox --project=firefox --workers=1
//npx playwright test -g "Admin Page" --headed --browser=firefox --project=firefox --workers=1 --reporter=list
//npx playwright test -g "Admin Page" --headed --browser=firefox --project=firefox --workers=1 --reporter=list,html
//npx playwright test -g "Admin Page" --headed --browser=firefox --project=firefox --workers=1 --reporter=list,html --output=./test-results
//npx playwright test -g "Admin Page" --headed --browser=firefox --project=firefox --workers=1 --reporter=list,html --output=./test-results --debug
//npx playwright test -g "Admin Page" --headed --browser=firefox --project=firefox --workers=1 --reporter=list,html --output=./test-results --debug --trace on
//npx playwright test -g "Admin Page" --headed --browser=firefox --project=firefox --workers=1 --reporter=list,html --output=./test-results --debug --trace on --retries=2
//npx playwright test -g "Admin Page" --headed --browser=firefox --project=firefox --workers=1 --reporter=list,html --output=./test-results --debug --trace on --retries=2 --shard=1/2
//npx playwright test -g "Admin Page" --headed --browser=firefox --project=firefox --workers=1 --reporter=list,html --output=./test-results --debug --trace on --retries=2 --shard=1/2 --timeout=60000
//npx playwright test -g "Admin Page" --headed --browser=firefox --project=firefox --workers=1 --reporter=list,html --output=./test-results --debug --trace on --retries=2 --shard=1/2 --timeout=60000 --grep-invert="invalid password"
