import { test, expect } from "@playwright/test";

test.describe("Home page tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/");
  });

  test("should display home and users navigation links on the main page", async ({
    page,
  }) => {
    await expect(page.getByTestId("home-link")).toBeVisible();
    await expect(page.getByTestId("users-link")).toBeVisible();
  });

  test("should display correct text in navigation links", async ({ page }) => {
    await expect(page.getByTestId("home-link")).toContainText("Home");
    await expect(page.getByTestId("users-link")).toContainText("Users");
  });

  test("should have correct navigation href attributes", async ({ page }) => {
    await expect(page.getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "/",
    );
    await expect(page.getByRole("link", { name: "Users" })).toHaveAttribute(
      "href",
      "/users",
    );
  });

  test("should switch the theme to dark", async ({ page }) => {
    await page.getByRole("button", { name: "Toggle theme" }).click();
    await expect(page.locator("html")).toHaveClass("dark");
  });
});
