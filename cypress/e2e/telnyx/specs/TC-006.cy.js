import mainPage from "../pages/main.page";
import supportPage from "../pages/support.page";

describe("TC-006", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("https://telnyx.com");
    cy.get("body").then(($body) => {
      if ($body.find('[aria-label="close and deny"]').length > 0) {
        cy.get('[aria-label="close and deny"]').click();
      }
    });
  });

  it("Check the ability to do search in the Support Center page with random data", function () {
    mainPage.clickOnSupportCenterLink();
    supportPage.checkSupportPageTitle();
    supportPage.fillSearchInput();
    supportPage.checkSearchInputData();
  });
});
