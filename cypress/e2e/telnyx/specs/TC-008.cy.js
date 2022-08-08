import mainPage from "../pages/main.page";
import expertPage from "../pages/expert.page";

describe("TC-008", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("https://telnyx.com");
    cy.get("body").then(($body) => {
      if ($body.find('[aria-label="close and deny"]').length > 0) {
        cy.get('[aria-label="close and deny"]').click();
      }
    });
  });

  it("Check the ability to talk to an expert with invalid credentials", function () {
    mainPage.clickOnTalkToExpertButton();
    expertPage.checkExpertTalkPageTitle();
    expertPage.markChooseReasonContactDropMenu();
    expertPage.fillInvalidDataToInputFields();
    expertPage.clickOnSubmitButton();
  });
});
