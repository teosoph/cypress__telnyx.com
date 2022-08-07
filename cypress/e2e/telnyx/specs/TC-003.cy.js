import mainPage from "../pages/mainPage";
import signUpPage from "../pages/signUpPage";

describe("TC-003", () => {
  beforeEach(() => {
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
