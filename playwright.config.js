// @ts-check
const { defineConfig, devices } = require("@playwright/test");

/**
 * playwright.config.js — Test configuration for Tengil Web staging page
 * Docs: https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  retries: 1,
  reporter: [["html", { open: "never" }], ["list"]],

  use: {
    // Base URL for all tests — matches `npm run serve`
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },

  // Run local server before tests
  webServer: {
    command: "npm run serve",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    stdout: "ignore",
    stderr: "pipe",
  },

  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox",  use: { ...devices["Desktop Firefox"] } },
    { name: "mobile",   use: { ...devices["iPhone 14"] } },
  ],
});
