// Find a button by its text
Cypress.Commands.add("findButtonWithText", (buttonText) => {
  // Check if buttonText is provided to avoid running into issues later
  if (!buttonText) {
    throw new Error("Button text must be provided.");
  }
  // Find the button element containing the specified text and return it
  return cy.get("button").contains(buttonText);
});

// Validate the current URL includes a specific string
Cypress.Commands.add("validateURL", (url) => {
  // Check if the URL is provided to avoid assertion errors
  if (!url) {
    throw new Error("URL must be provided.");
  }
  // Assert that the current page URL contains the specified string
  cy.url().should("include", url);
});
