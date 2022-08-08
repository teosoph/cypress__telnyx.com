import commonPage from "./common.page";

class SignUpPage {
  checkRedirectionToSignUpPage = (urlSignUpPage) => {
    cy.url({ timeout: 20000 }).should("include", urlSignUpPage);
    cy.contains("button[type='submit']", "Create Account").should("be.visible");
  };

  checkEnteredEmailToEmailFieldValue = () => {
    cy.get('[id="email"]').should(
      "have.value",
      commonPage.validUserData["testEmail"]
    );
  };

  testUserRegistration = () => {
    cy.get('[id="full_name"]').type(commonPage.validUserData["fullName"]);
    cy.get('[id="password"]').type(commonPage.validUserData["password"]);
    cy.get('[aria-labelledby="terms-label"] rect').click();

    //   has a problem with click
    // cy.get('button[type="submit"]').trigger("mouseover");
    // cy.get('button[type="submit"]').click({ force: true });
    cy.get('button[type="submit"]')
      .scrollIntoView()
      .each((element) => {
        cy.wrap(element).click();
      });
    // cy.get('button[type="submit"]').then((element) => {
    //   element.click();
    // });
    // cy.get('button[type="submit"]').scrollIntoView().click({ force: true });
    cy.wait(5000);
  };

  checkMessageAfterSignUp = () => {
    cy.get("div>h1").should(
      "have.text",
      "We've sent you an email to activate your account"
    );
  };

  checkRedirectionToTermsAndConditionsPage = () => {
    cy.get('[href="/terms-and-conditions-of-service"]')
      .invoke("removeAttr", "target")
      .click();
    cy.get('h1[class*="Text"]').should(
      "have.text",
      "TELNYX TERMS AND CONDITIONS OF SERVICE"
    );
  };
}

module.exports = new SignUpPage();
