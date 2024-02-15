import { test, expect } from "@playwright/test";

test("Assertion Test", async ({ page }) => {
  await page.goto("https://kitchen.applitools.com/");
  //   Assertion
  //   Check the element is present or not
  await expect(page.locator("text=The Kitchen")).toHaveCount(1);
  //   another way
  if (await page.$("text=The  Kitchen")) {
    await page.locator("text=The  Kitchen").click();
  }
  //   check element hidden or visible
  await expect(page.locator("text=The Kitchen")).toBeVisible();
  await expect(page.locator("text=The Kitchen")).toBeHidden();
  await expect(page.locator("text=The Kitchen")).toBeEnabled();
  await expect(page.locator("text=The Kitchen")).toBeDisabled();
  //   soft assertion > it will not terminate the next test execution
  await expect.soft(page.locator("text=The Kitchen")).toBeDisabled();

//   chek text
await expect(page.locator("text=The Kitchen")).toHaveText('The Kitchen')
await expect(page.locator("text=The Kitchen")).not.toHaveText('The Kitchen')
await expect(page.locator("text=The Kitchen")).not.toHaveAttribute('class','/.css-dpmy2a/)

// check page url and title
await expect(page).toHaveURL('https://kitchen.applitools.com/')
await expect(page).toHaveTitle('Kitchen')

// page matches screenshot
await expect(page).toHaveScreenshot()

});
