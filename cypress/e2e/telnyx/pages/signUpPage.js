import commonPage from "../pages/commonPage";

class SignUpPage {
  confirmationMessage = "We've sent you an email to activate your account";

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
    cy.get('button[type="submit"]').click({ force: true });
  };

  checkMessageAfterSignUp = () => {
    cy.get('h1[class="Text-sc-5o8owa-0 sc-81d2e95d-1 gkWopw etvJmf"]').should(
      "have.text",
      this.confirmationMessage
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
