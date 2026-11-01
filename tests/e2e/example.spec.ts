import { test, expect } from '@playwright/test';

test("should display users list", async ({ page }) => {
  await page.goto("/users");

  const users = page.getByTestId("user-item");

  await expect(users).toHaveCount(10);
});
