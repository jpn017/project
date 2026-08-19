# Staging Tengil Web Corporation

Test web page for **Qontak Webchat** integration testing on staging.

## Project structure

```
.
├── index.html          # Main page
├── config.js           # ← All configurable settings live here
├── package.json        # Dev server + test scripts
├── playwright.config.js
├── tests/
│   └── page.spec.js    # Playwright end-to-end tests
└── .gitignore
```

## Configuration

Open [config.js](config.js) to change:

| Setting | What it controls |
|---|---|
| `env` | Active environment: `"staging"` or `"production"` |
| `webchat.staging.*` | Staging webchat script URLs, `id`, and `code` |
| `webchat.production.*` | Production webchat script URLs, `id`, and `code` |
| `page.title` / `page.company` | Page metadata |

To switch to production, change one line:
```js
env: "production",
```

## Getting started

```bash
npm install
npm run dev        # live-reload dev server → http://localhost:3000
```

## Running tests

```bash
# Install browsers once
npx playwright install

npm test           # headless, all browsers
npm run test:headed  # watch tests run in the browser
npm run test:ui      # Playwright interactive UI
npm run test:report  # open last HTML report
```
