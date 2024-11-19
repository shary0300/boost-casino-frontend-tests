Here’s a **README.md** file tailored to your project and requirements:

---

# Frontend Test Automation Framework

## Overview

This framework is designed for testing websites using **Cypress** with **Cucumber** (BDD). It uses the **Page Object Model (POM)** to enhance test maintainability and scalability. Tests are written in JavaScript and target the user journeys specified for the website [BoostCasino](https://www.boostcasino.com/).

---

## Prerequisites

Ensure you have the following installed:
- **Node.js** (latest stable version) – [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js)
- **VS Code** (or any preferred IDE)
- **Cypress** and **Cucumber** dependencies will be installed automatically in the next step.

---

## Installation
  
1. **Clone the repository**:
   ```bash
   git clone <https://github.com/shary0300/boost-casino-frontend-tests.git>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install Cypress dependencies** (optional, if not automatically installed):
   ```bash
   npx cypress install
   ```
---

## Folder Structure

- **cypress/integration/features**: Feature files written in Gherkin syntax.
- **cypress/support/step_definitions**: Step definitions implementing test logic.
- **cypress/pages**: Page Object Model files for modularizing locators and actions.
- **cypress/config**: Configuration files for environment setup.

---

## Running the Tests

### 1. Run Tests in Cypress Dashboard
```bash
npx cypress open
```

### 2. Run Tests in Headless Mode
```bash
npx cypress run
```

### 3. Running Specific Tests

If you want to run a specific test or feature file, use the `--spec` flag:
```bash
npx cypress run --spec "cypress/e2e/LanguageSwitching.feature"
```

---

## Assumptions

- The website structure and element locators remain consistent with the time of development.
- Tests are designed for logged-out users on a desktop.

---

## Challenges

- Identifying unique selectors for some dynamic elements was tricky and required custom strategies.
- Handling language-specific content verification required robust assertions.

---

## Extensibility

This framework is designed to:
- Add new feature files easily.
- Integrate with CI/CD pipelines (e.g. Jenkins, Gitlab).
- Reporting Module (e.g. Allure, Mocha Awesome).

