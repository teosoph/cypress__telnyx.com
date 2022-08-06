describe("TC-001", () => {
  beforeEach(() => {
    cy.visit("https://telnyx.com");
    cy.get('button[aria-label="close and deny"]').click();
  });

  it("Checking the visibility of the footer menu ", () => {
    cy.contains("button[type='submit']", "Create Account").should("be.visible");
  });
});
