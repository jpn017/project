// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("Tengil Web — page structure", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("has correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/Staging Tengil Web Corporation/i);
  });

  test("sidebar renders with nav links", async ({ page }) => {
    const sidebar = page.locator("#mySidebar");
    await expect(sidebar).toBeVisible();
    await expect(sidebar.locator("a")).toHaveCount(6); // Home + 5 sections
  });

  test("all sections are present", async ({ page }) => {
    for (const id of ["showcase", "services", "designers", "packages", "contact"]) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }
  });

  test("photo grid shows 6 images", async ({ page }) => {
    const imgs = page.locator(".w3-half img");
    await expect(imgs).toHaveCount(6);
  });

  test("contact form has required fields", async ({ page }) => {
    const form = page.locator("form");
    await expect(form.locator('input[name="Name"]')).toBeVisible();
    await expect(form.locator('input[name="Email"]')).toBeVisible();
    await expect(form.locator('input[name="Message"]')).toBeVisible();
  });
});

test.describe("Tengil Web — mobile menu", () => {
  test("hamburger menu opens sidebar on mobile", async ({ page }) => {
    // Simulate a narrow viewport
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");

    const overlay = page.locator("#myOverlay");
    await expect(overlay).toBeHidden();

    // Open sidebar via hamburger
    await page.locator("header .w3-button").click();
    await expect(page.locator("#mySidebar")).toBeVisible();
  });
});

test.describe("Tengil Web — Qontak Webchat", () => {
  test("webchat scripts are injected from config", async ({ page }) => {
    const scriptUrls = [];
    page.on("request", (req) => {
      if (req.url().includes("qontak")) scriptUrls.push(req.url());
    });
    await page.goto("/");
    // Give widget scripts time to load
    await page.waitForTimeout(2000);

    expect(scriptUrls.length).toBeGreaterThan(0);
    expect(scriptUrls.some((u) => u.includes("webchat-staging.qontak.net"))).toBe(true);
  });
});
