import { test, expect } from "@playwright/test";

test.describe("All My Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://saucedemo.com");
    //   await page.pause();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="username"]').press("Tab");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    //   await page.close();
  });
  test.afterAll(async ({ page }) => {
    await page.close();
  });
  test("Test Hooks & Groups", async ({ page }) => {
    await page.goto("https://saucedemo.com");
    //   await page.pause();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="username"]').press("Tab");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    //   await page.close();
  });

  test.only("Go To Home Page", async ({ page }) => {
    await page.goto("https://saucedemo.com");
    //   await page.pause();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="username"]').press("Tab");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page
      .locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
      .click();
    await page.locator("#item_1_title_link").click();
    await page
      .locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
      .click();
    //   await page.close();
  });
});
