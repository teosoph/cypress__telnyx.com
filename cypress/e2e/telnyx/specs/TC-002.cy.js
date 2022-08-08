import mainPage from "../pages/main.page";

describe("TC-002", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("https://telnyx.com");
    cy.get("body").then(($body) => {
      if ($body.find('[aria-label="close and deny"]').length > 0) {
        cy.get('[aria-label="close and deny"]').click();
      }
    });
  });

  it("Checking the visibility of the footer Products menu items", function () {
    let footerProductsMenuItems = [
      "Elastic SIP Trunking",
      "Call Control - Voice API",
      "Programmable SMS",
      "WhatsApp API",
      "Secure Faxing",
      "Wireless - Cellular IoT",
      "Number Lookup",
      "Global Numbers",
      "Verify API",
      "See all Products",
    ];

    for (let i = 0; i < 9; i++) {
      mainPage.checkFooterProductsMenuItemsName(
        i + 1,
        footerProductsMenuItems[i]
      );
    }
  });
});
