import mainPage from "../pages/main.page";

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

  it("Check the ability to changer information in the “Switch + Save with Telnyx” block", function () {
    mainPage.scrollDownToSwitchSaveWithTelnyxBlock();
    mainPage.makeCompareCostBlockScreenshot("firstTime");
    mainPage.clickOnVoiceButton();
    mainPage.clickOnTollFreeNumbersRadioButton();
    mainPage.shiftMakeOutboundCallsSlider(5);
    mainPage.makeCompareCostBlockScreenshot("secondTime");
    mainPage.clickOnCreateFreeTrialAccountButton();
    mainPage.checkRedirectedPageForLink();
  });
});
