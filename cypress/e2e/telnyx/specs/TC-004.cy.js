import commonPage from "../pages/common.page";
import mainPage from "../pages/main.page";

describe("TC-004", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("https://telnyx.com");
    cy.get("body").then(($body) => {
      if ($body.find('[aria-label="close and deny"]').length > 0) {
        cy.get('[aria-label="close and deny"]').click();
      }
    });
  });

  it("Check email registration posibility through `Try for free ->` field with invalid credentials", () => {
    mainPage.enterUnvalidEmailToSighUpInput();
    mainPage.checkEnteredUnvalidEmailInSighUpInput();
    mainPage.clickOnTryForFreeButton();
    commonPage.checkLinkForContains("/sign-up");
  });
});
