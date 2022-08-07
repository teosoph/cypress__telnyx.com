import commonPage from "../pages/commonPage";

class MainPage {
  // Sign Up by OnTryForFree with valid credentials
  enterValidEmailToSighUpInput = () => {
    cy.get('input[name="email"]').type(commonPage.validUserData["testEmail"]);
  };
  checkEnteredValidEmailInSighUpInput = () => {
    cy.get('input[name="email"]').should(
      "have.value",
      commonPage.validUserData["testEmail"]
    );
  };
  clickOnTryForFreeButton = () => {
    cy.get('[type="submit"]').click();
  };

  // Sign Up by OnTryForFree with unvalid credentials
  enterUnvalidEmailToSighUpInput = () => {
    cy.get('input[name="email"]').type(commonPage.unvalidUserData["testEmail"]);
  };
  checkEnteredUnvalidEmailInSighUpInput = () => {
    cy.get('input[name="email"]').should(
      "have.value",
      commonPage.unvalidUserData["testEmail"]
    );
  };
  clickOnTryForFreeButton = () => {
    cy.get('[type="submit"]').click();
  };

  // Footer
  checkFooterProductsMenuItemsName(position, itemName) {
    //  Timed out retrying after 4000ms: expected '<span>' to have text 'Elastic SIP Trunking', but the text was 'Elastic SIP Trunking '
    cy.xpath(
      `(//p[text()='Products']/following-sibling::ul//span//span)[${position}]`
    ).should("have.text", `${itemName}`);
  }

  // Sign Up button
  clickOnSignUpButton = () => {
    cy.get('a[href="/sign-up"]').eq(1).click();
    // cy.get('(//a[text()="Sign up"])[1]').click();
  };
}

module.exports = new MainPage();
