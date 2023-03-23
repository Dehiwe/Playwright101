const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.zenithbank.com/');
  await page1.goto('chrome-error://chromewebdata/');
  await page.goto('https://www.zenithbank.com/');
  await page.goto('https://www.zenithbank.com/media/');
});