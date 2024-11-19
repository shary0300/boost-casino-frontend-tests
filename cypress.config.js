const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.boostcasino.com", // Base URL for the tests
    defaultCommandTimeout: 10000, // Default timeout for commands (10 seconds)
    retries: 2, // Number of times to retry failed tests
    specPattern: "**/*.{feature,features}", // Pattern for spec files

    // Set up Node events, including the Cucumber preprocessor
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber()); // Setup Cucumber preprocessor
      return config;
    },
  },
});

