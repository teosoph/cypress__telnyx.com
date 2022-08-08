import commonPage from "./common.page";

class MainPage {
  // Sign Up by OnTryForFree with valid credentials
  enterValidEmailToSighUpInput = () => {
    cy.get('input[name="email"]').type(commonPage.validUserData["testEmail"]);
  };
  checkEnteredValidEmailInSighUpInput = () => {
    cy.get('input[name="email"]').should("have.value", commonPage.validUserData["testEmail"]);
  };
  clickOnTryForFreeButton = () => {
    cy.get('[type="submit"]').click();
  };

  // Sign Up by OnTryForFree with unvalid credentials
  enterUnvalidEmailToSighUpInput = () => {
    cy.get('input[name="email"]').type(commonPage.unvalidUserData["testEmail"]);
  };
  checkEnteredUnvalidEmailInSighUpInput = () => {
    cy.get('input[name="email"]').should("have.value", commonPage.unvalidUserData["testEmail"]);
  };
  clickOnTryForFreeButton = () => {
    cy.get('[type="submit"]').click();
  };

  // Footer
  checkFooterProductsMenuItemsName(position, itemName) {
    // cy.xpath(
    //   `(//p[text()='Products']/following-sibling::ul//span//span)[${position}]`
    // ).then(function ($elem) {
    //   cy.log($elem.text());
    // });
    cy.xpath(`(//p[text()='Products']/following-sibling::ul//span//span)[${position}]`).should("contain.text", `${itemName}`);
  }

  // Sign Up button
  clickOnSignUpButton = () => {
    cy.get('a[href="/sign-up"]').eq(1).click();
    // cy.xpath('(//a[text()="Sign up"])[1]').click();
  };

  // Header menu
  mouseHoverOnHeaderMenuTabs(tabPosition) {
    cy.get(`header div>ul>li:nth-child(${tabPosition})>span`, {
      timeout: 30000,
    }).realHover();
  }
  makeHoveredHeaderMenuTabsScreenshot(tabPosition) {
    cy.xpath(`//header/div[2]/div/div[2]/ul/li[1]/div/div/div[2]`, {
      timeout: 30000,
    }).screenshot(`my-screenshot_${tabPosition}`);
  }

  // Support center
  clickOnSupportCenterLink() {
    cy.get(`audio+a[href*='support']`, { timeout: 20000 }).click();
  }

  // Expert Talk page
  clickOnTalkToExpertButton() {
    cy.get(`li>div>a[href*='/contact-us']`, { timeout: 20000 }).click();
  }

  // Voice Call Costs
  scrollDownToSwitchSaveWithTelnyxBlock() {
    cy.get("h2>a>span", { timeout: 30000 }).scrollIntoView();
  }
  makeCompareCostBlockScreenshot(index) {
    cy.xpath(`//h2/a/following::div[1]/div/div`, {
      timeout: 50000,
    }).screenshot(`CompareCosts-screenshot_${index}`);
  }
  clickOnVoiceButton() {
    cy.xpath(`//button[contains(text(),"Voice")]`).click();
  }
  clickOnTollFreeNumbersRadioButton() {
    cy.get(`[id="toll-free-numbers"]`).click();
  }
  shiftMakeOutboundCallsSlider(shiftIndex) {
    return cy.get(`[role*='slider']`).eq(1).type("{rightarrow}".repeat(shiftIndex), { force: true });
  }
  makeCompareCostBlockScreenshot(index) {
    cy.xpath(`//h2/a/following::div[1]/div/div`, {
      timeout: 50000,
    }).screenshot(`CompareCosts-screenshot_${index}`);
  }
  clickOnCreateFreeTrialAccountButton() {
    cy.xpath('//a[contains(text(),"Create")]').click();
  }
  checkRedirectedPageForLink() {
    cy.url({ timeout: 30000 }).should("include", "sign-up");
  }
  // Wait List
  clickOnJoinWaitListLink() {
    cy.get('span>a[href="/products/storage"]').click();
  }
}

module.exports = new MainPage();
