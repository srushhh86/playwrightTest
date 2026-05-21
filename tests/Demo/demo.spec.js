
import { test, expect } from '@playwright/test';

test('test @regression', async ({ page }) => {
  await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
  
  await page.getByRole('textbox', { name: 'Name' }).fill('srushti');
  
  await page.getByRole('textbox', { name: 'Email Id' }).fill('shrusti123@gmail.com');

  await page.getByRole('textbox', { name: 'Password' }).fill('abc123');
  await page.getByRole('button', { name: 'Register' }).click();
  console.log("regression");
  
});