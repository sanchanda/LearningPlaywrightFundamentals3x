# Learning Playwright Fundamentals

Practice project for learning UI test automation with [Playwright](https://playwright.dev/) using `@playwright/test`.

## Prerequisites

- [Node.js](https://nodejs.org/) 18+
- npm

## Installation

### Create a new Playwright project

```bash
npm init playwright@latest
```

This scaffolds a new project with `@playwright/test`, config files, and example tests. To skip the interactive prompts, pass flags such as `--yes` (defaults) or `--lang=ts`.

### Add Playwright to an existing project

```bash
npm install -D @playwright/test
```

### Install dependencies and browsers

```bash
npm install
npx playwright install   # installs the chromium browser binary
```

Install a specific browser (or all three):

```bash
npx playwright install firefox
npx playwright install webkit
npx playwright install --with-deps   # browsers + OS system dependencies
```

The CI workflow for this repo installs all browsers and Linux system dependencies with:

```bash
npx playwright install --with-deps
```

## Test Setup

- Tests live in the `tests/` directory.
- Only the **Chromium** project is enabled (see `playwright.config.ts`).
- Browser runs in **headed** mode by default (`headless: false`).
- Results are reported with the built-in **HTML reporter**.

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a single test file:

```bash
npx playwright test tests/first_test.spec.ts
```

Run a test by name (partial match):

```bash
npx playwright test -g "login"
```

Run against a specific browser project:

```bash
npx playwright test --project=chromium
```

Run in headed / headless mode:

```bash
npx playwright test --headed
npx playwright test --headless
```

## Debugging & Tooling

Debug a test with the Playwright inspector (step through, see actions):

```bash
npx playwright test --debug
```

Open the interactive UI mode (watch tests run, pick tests):

```bash
npx playwright test --ui
```

View the last HTML test report:

```bash
npx playwright show-report
```

Generate a test with the codegen tool:

```bash
npx playwright codegen https://app.thetestingacademy.com/playwright/ttacart/
```

## npm Scripts

| Command                    | Description                          |
| -------------------------- | ------------------------------------ |
| `npm test`                 | Run all tests                        |
| `npm run test:headed`      | Run tests in headed mode             |
| `npm run test:debug`       | Run tests with the Playwright inspector |
| `npm run test:ui`          | Run tests in UI mode                 |
| `npm run report`           | Open the last HTML report            |

## CI

A GitHub Actions workflow is included at `.github/workflows/playwright.yml` for running tests on push/PR.
