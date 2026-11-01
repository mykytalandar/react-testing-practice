import { test, expect } from "@playwright/test";

test("should display home and users navigation links on the main page", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/");
  await expect(page.getByTestId("home-link")).toBeVisible();
  await expect(page.getByTestId("users-link")).toBeVisible();
});

test("should display correct text in navigation links", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await expect(page.getByTestId("home-link")).toContainText("Home");
  await expect(page.getByTestId("users-link")).toContainText("Users");
});

test("should have correct navigation href attributes", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await expect(page.getByRole("link", { name: "Home"})).toHaveAttribute("href", "/");
  await expect(page.getByRole("link", { name: "Users"})).toHaveAttribute("href", "/users");
});
