const { test, expect } = require("@playwright/test");

test("Demo Login Test ", async ({ page }) => {
  await page.goto("https://demo.applitools.com");
  await page.locator('[placeholder="Enter your username"]').fill("Jawad");
  await page.locator('[placeholder="Enter your password"]').fill("12345");

  await page.waitForSelector("text=Sign in", { timeout: 5000 });
  await page.locator("text=Sign in").click();
});
