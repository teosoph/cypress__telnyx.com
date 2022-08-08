import mainPage from "../pages/main.page";

describe("TC-005", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("https://telnyx.com");
    cy.get("body").then(($body) => {
      if ($body.find('[aria-label="close and deny"]').length > 0) {
        cy.get('[aria-label="close and deny"]').click();
      }
    });
  });

  it("Check sub-menu tabs in the header menu", function () {
    let tabPosition = ["1", "3", "6", "8", "10"];
    for (let i = 0; i < 5; i++) {
      mainPage.mouseHoverOnHeaderMenuTabs(tabPosition[i]);
      mainPage.makeHoveredHeaderMenuTabsScreenshot(tabPosition[i]);
    }
  });
});
