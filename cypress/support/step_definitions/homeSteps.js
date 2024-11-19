import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import homepage from "../pageObjects/homePage";

Given('User navigates to the Boost Casino Application', () => {
    homepage.navigateTo();
});

Then('Search input field is shown', () => {
    homepage.searchFieldDisplayed();
});

When('Search for {string}', (text) => {
    homepage.gameSearch(text);
});

Then('Games matching with book of dead show up', () => {
    homepage.gameOfDeadDisplayed();
});

And('Click on {string} button', (text) => {
    homepage.clickOnPlayButton(text);
});

Then('Verify that the game is loading', () => {
    cy.validateURL("/slots/book-of-dead");
});

When('Click on the burger icon', () => {
    homepage.clickOnBurgerIcon();
});

When('Language dropdown is shown in the header', () => {
    homepage.languageDropdownDisplayed();
});

And('Click on the language dropdown', () => {
    homepage.clickOnLanguages();
});

Then('The language menu shows up', () => {
    homepage.languageMenuDisplayed();
});

// Select a language from the dropdown and verify the page updates correctly
And('Click on {string} and verify that page is on {string} language', (languageCode, languageName) => {
    homepage.selectLanguageAndValidatePage(languageCode, languageName);
});


// Validate that all expected menu entries are visible
Then('The following entries are found {string}', (menus) => {
    homepage.checkMenuDisplayed(menus);
});

// Select a menu item and validate that the user is redirected to the correct page
And('Tap on {string} redirects to {string} page', (menu, pageName) => {
    homepage.selectMenuAndValidatePage(menu, pageName);
});

// Find menu item that matches exactly with the provided text
When('The game categories sub-menu opens tapping on {string}', (menu) => {
    // Locate all menu elements containing the given text  
    homepage.menuElements.filter(`:contains("${menu}")`).then((elements) => {
        const exactMatch = elements.filter((_, el) => el.textContent.trim() === menu);
        // If an exact match is found, click on it
        if (exactMatch.length) {
          cy.wrap(exactMatch).click({ force: true });
        } else {
          throw new Error('Exact "Casino" element not found');
        }
      });
});

