import mainPage from "../pages/main.page";
import signUpPage from "../pages/signUp.page";

describe("TC-003", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("https://telnyx.com");
    cy.get("body").then(($body) => {
      if ($body.find('[aria-label="close and deny"]').length > 0) {
        cy.get('[aria-label="close and deny"]').click();
      }
    });
  });

  it(`Check redirection to the "Terms & Conditions" page`, () => {
    mainPage.clickOnSignUpButton();
    signUpPage.checkRedirectionToTermsAndConditionsPage();
  });
});
