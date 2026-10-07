import { test, expect, Locator } from '@playwright/test';
import path from 'path';

test.describe('File Upload Demo - TestingAcademy', () => {

   test.beforeEach(async ({ page }) => {
      await page.goto('https://app.thetestingacademy.com/playwright/widgets/upload-download');
   });

   test('demo: Download setInputFiles', async ({ page }) => {
         const filepath = path.join(__dirname ,'/out/')
         console.log(filepath);

         const [staticDownload] = await Promise.all([
               page.waitForEvent('download'),
               page.getByTestId('download-static').click()
         ]);

         await staticDownload.saveAs(filepath + staticDownload.suggestedFilename());
         await page.pause();

   });

});