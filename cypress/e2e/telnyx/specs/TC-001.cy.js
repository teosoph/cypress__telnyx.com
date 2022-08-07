import mainPage from "../pages/mainPage";
import signUpPage from "../pages/signUpPage";

describe("TC-001", () => {
  beforeEach(() => {
    cy.visit("https://telnyx.com");
    cy.get("body").then(($body) => {
      if ($body.find('[aria-label="close and deny"]').length > 0) {
        cy.get('[aria-label="close and deny"]').click();
      }
    });
  });

  it("Check email registration posibility through `Try for free ->` field with valid credentials", () => {
    mainPage.enterValidEmailToSighUpInput();
    mainPage.checkEnteredValidEmailInSighUpInput();
    mainPage.clickOnTryForFreeButton();

    signUpPage.checkRedirectionToSignUpPage("/sign-up");
    signUpPage.checkEnteredEmailToEmailFieldValue();

    //   has a problem with click
    signUpPage.testUserRegistration();
    signUpPage.checkMessageAfterSignUp();
  });
});
