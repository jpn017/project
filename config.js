/**
 * config.js — Configurable settings for Tengil Web test page
 *
 * Edit this file to switch environments or change webchat credentials.
 * This is loaded before any widget script, so all values are available globally.
 */

const CONFIG = {
  // ─── Environment ──────────────────────────────────────────────────────────
  env: "staging", // "staging" | "production"

  // ─── Qontak Webchat ───────────────────────────────────────────────────────
  webchat: {
    staging: {
      scriptUrl: "https://webchat-staging.qontak.net/js/app.js",
      initUrl:   "https://webchat-staging.qontak.net/qchatInitialize.js",
      id:        "eee5f8f9-b5ed-4586-bd95-73bea4da04d3",
      code:      "8adj-vlyPhWDOqJwGv5QZQ",
    },
    production: {
      scriptUrl: "https://webchat.qontak.com/js/app.js",
      initUrl:   "https://webchat.qontak.com/qchatInitialize.js",
      id:        "",   // ← fill in production ID
      code:      "",   // ← fill in production code
    },
  },

  // ─── Page meta ────────────────────────────────────────────────────────────
  page: {
    title:   "Staging Tengil Web Corporation",
    company: "Tengil Corp.",
  },
};

// Expose active webchat config as a convenience shortcut
CONFIG.activeWebchat = CONFIG.webchat[CONFIG.env];
