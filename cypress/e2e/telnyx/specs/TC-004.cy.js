import commonPage from "../pages/commonPage";
import mainPage from "../pages/mainPage";

describe("TC-004", () => {
  beforeEach(() => {
    cy.visit("https://telnyx.com");
    cy.get("body").then(($body) => {
      if ($body.find('[aria-label="close and deny"]').length > 0) {
        cy.get('[aria-label="close and deny"]').click();
      }
    });
  });

  it("Check email registration posibility through `Try for free ->` field with unvalid credentials", () => {
    mainPage.enterUnvalidEmailToSighUpInput();
    mainPage.checkEnteredUnvalidEmailInSighUpInput();
    mainPage.clickOnTryForFreeButton();
    commonPage.checkLinkForContains("/sign-up");
  });
});
