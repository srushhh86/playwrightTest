import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('srush');
  await page.getByRole('textbox', { name: 'Email Id' }).click();
  await page.getByRole('textbox', { name: 'Email Id' }).fill('sru@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('1234578');
  await page.getByRole('button', { name: 'Register' }).click();
});