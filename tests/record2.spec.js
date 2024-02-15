import { test } from "@playwright/test";
const { chromium } = require("playwright");

test("Testing the login page", async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.prothomalo.com/");
  await page.getByLabel("খেলা", { exact: true }).click();
  const page1Promise = page.waitForEvent("popup");
  await page
    .frameLocator(
      'iframe[name="google_ads_iframe_85406138\\/News_Int_660x440_0"]'
    )
    .locator("#paloash_richmedia")
    .click();
  const page1 = await page1Promise;

  // ---------------------
  await context.close();
  await browser.close();
});
