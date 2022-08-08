import mainPage from "../pages/main.page";
import waitListPage from "../pages/waitList.page";

describe("TC-010", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("https://telnyx.com");
    cy.get("body").then(($body) => {
      if ($body.find('[aria-label="close and deny"]').length > 0) {
        cy.get('[aria-label="close and deny"]').click();
      }
    });
  });

  it(`Checking the possibility of registration through the link "JOIN THE WAITING".`, function () {
    mainPage.clickOnJoinWaitListLink();
    waitListPage.checkWaitListPageDisplayed();
    waitListPage.clickOnJoinWaitListButton();
    waitListPage.fillWaitListUserValidData();
    waitListPage.markReceiveTelnyxMarketingEmailsCheckbox();
    waitListPage.clickOnSubmitButton();
    waitListPage.checkSubmitPageTitle();
  });
});
