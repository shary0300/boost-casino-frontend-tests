/// <reference types="cypress" />
import menuUrlMap from '../../fixtures/menuUrlMap.json';

class HomePage {
  get logo() {
    return cy.get('img[alt="Desktop Logo"]');
  }

  get searchField() {
    return cy.get('input[type="text"][placeholder="Search"]');
  }

  get gameBookOfDead() {
    return cy.get('a[href="/slots/book-of-dead"]');
  }

  get burgerIcon() {
    return cy.get('span.burger');
  }

  get languageDropdown() {
    return cy.contains('p[font-family="primary"]','languages');
  }

  get languageMenu() {
    return cy.get('[data-cy="navDropdown-language"]');
  }

  get menuElements(){
    return cy.get('aside ul>li[cursor="pointer"] span[font-family="primary"]');
  }

  navigateTo() {
    cy.visit("/");
    this.logo.should("be.visible");
  }

  searchFieldDisplayed() {
    this.searchField.should('be.visible');
  }

  gameSearch(text) {
    this.searchField.type(`${text}{enter}`);
  }

  gameOfDeadDisplayed() {
    this.gameBookOfDead.should('be.visible');
  }

  clickOnPlayButton(text){
    // cy.findButtonWithText(text).click();
    this.gameBookOfDead.click();
  }

  clickOnBurgerIcon(){
    this.burgerIcon.should('exist').scrollIntoView();
    this.burgerIcon.click({force: true});
  }

  languageDropdownDisplayed() {
  }

  clickOnLanguages(){
    this.languageMenu.click();
  }

  languageMenuDisplayed() {
    this.languageMenu.should('be.visible');
  }
  
  selectLanguageAndValidatePage(lang_code, lang_name){
    const langCodeMap = {
        English: 'en',
        Finnish: 'fi',
        Russian: 'ru',
        Estonian: 'ee'
      };
    cy.contains('div[font-family="primary"][display="flex"]', lang_code).click();
    this.logo.should("be.visible");
    cy.validateURL(langCodeMap[lang_name]);
  }

  checkMenuDisplayed(menus) {
    const menuList = menus.split(',').map(menu => menu.trim());
  
    menuList.forEach(menu => {
      this.menuElements.contains(menu);
    });
  }

  selectMenuAndValidatePage(menu, pageName){
    cy.contains('span[font-family="primary"]', menu).scrollIntoView();
    cy.contains('span[font-family="primary"]', menu).click();
    this.burgerIcon.should("exist").scrollIntoView();
    cy.validateURL(menuUrlMap[pageName]);
  }
}
export default new HomePage();
