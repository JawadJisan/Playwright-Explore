const { test, expect } = require("@playwright/test");

test("Selectors Test Demo", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.pause();
  await page.click("id=user-name");
  await page.locator("id=user-name").fill("Jawad Jisan");
});
