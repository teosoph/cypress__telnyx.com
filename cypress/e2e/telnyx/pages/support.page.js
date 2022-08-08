import commonPage from "../pages/common.page";

class SupportPage {
  checkSupportPageTitle = () => {
    cy.get('[class="header__headline"]').should("have.text", "Support Center");
  };

  fillSearchInput() {
    cy.get('[class*="search__input"]')
      .type(commonPage.randomData())
      .type("{enter}");
  }
  checkSearchInputData = () => {
    cy.get('[class="c__light"]').should("have.text", commonPage.randomData());
  };
}

module.exports = new SupportPage();
