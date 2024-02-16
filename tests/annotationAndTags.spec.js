import { test, expect } from "@playwright/test";

// Annotation
test.skip("Annotation & Tags Test", async ({ page }) => {});
test("Not Ready yet", async ({ page }) => {
  test.fail();
});
test.fixme("test to be fixed", async ({ page }) => {});
test("slow test", async ({ page }) => {
  test.slow();
});
test.only("only this test will be run", async ({ page }) => {});

// Tags
test("Test login page @loginPage", async ({ page }) => {});
