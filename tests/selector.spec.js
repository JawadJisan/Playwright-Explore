const { test, expect } = require("@playwright/test");

test("Selectors Test Demo", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.pause();
  await page.click("id=user-name");
  await page.locator("id=user-name").fill("Jawad Jisan");
  //using XPath
  await page.locator('xpath=//input[@name="secret_sauce"]').fill("1234567890");

  //   using CSS Selector
  await page.locator("#login-button").click();
  //   using TEXT
  await page.locator('text="LOGIN"').click();
  //   await page.locator(':has-text("LOGIN)').click();
  await page.locator('input:has-text("LOGIN)').click();
});
