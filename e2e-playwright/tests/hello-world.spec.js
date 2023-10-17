const { test, expect } = require("@playwright/test");

test("The main page has a header 'Addresses'", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toHaveText("Addresses");
});
