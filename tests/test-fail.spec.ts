import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible();
  await expect(page.locator('[data-test="item-4-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="inventory-item"]')).toBeVisible();
  await expect(page.locator('[data-test="item-quantity"]')).toContainText('1');
  await expect(page.locator('[data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Fo');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').press('Shift+Tab');
  await page.locator('[data-test="firstName"]').press('ArrowRight');
  await page.locator('[data-test="firstName"]').fill('Foo');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('Bar');
  await page.locator('[data-test="lastName"]').press('Tab');
  await page.locator('[data-test="postalCode"]').fill('B11TE');
  await page.locator('[data-test="continue"]').click();
  await expect(page.locator('[data-test="payment-info-label"]')).toContainText('Payment nformation:');
  await page.locator('[data-test="payment-info-value"]').click();
  await page.locator('[data-test="payment-info-value"]').click();
  await expect(page.locator('[data-test="payment-info-value"]')).toContainText('SauceCard #31337');
  await expect(page.locator('[data-test="shipping-info-label"]')).toContainText('Shipping Information:');
  await expect(page.locator('[data-test="shipping-info-value"]')).toBeVisible();
  await expect(page.locator('[data-test="shipping-info-value"]')).toContainText('Free Pony Express Delivery!');
  await expect(page.locator('[data-test="total-info-label"]')).toContainText('Price Total');
  await expect(page.locator('[data-test="subtotal-label"]')).toContainText('Item total: $29.99');
  await expect(page.locator('[data-test="tax-label"]')).toContainText('Tax: $2.40');
  await expect(page.locator('[data-test="total-label"]')).toContainText('Total: $32.39');
  await expect(page.locator('[data-test="finish"]')).toBeVisible();
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
});
