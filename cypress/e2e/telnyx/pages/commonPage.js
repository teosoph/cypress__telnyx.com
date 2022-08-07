class CommonPage {
  validUserData = {
    testEmail: "test45r@test.com",
    fullName: "Igouur Kirich",
    password: "Test1234567890-",
  };

  unvalidUserData = {
    testEmail: "test45r@",
    fullName: "Igour66 Kirich66",
    password: "Test1234567890",
  };

  checkLinkForContains(urlSignUpPage) {
    cy.url().should("not.include", urlSignUpPage);
  }
}

module.exports = new CommonPage();
