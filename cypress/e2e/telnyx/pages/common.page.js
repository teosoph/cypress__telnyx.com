class CommonPage {
  // ==============================

  validUserData = {
    testEmail: "test123@test.com",
    fullName: "Igor Kirich",
    password: "Test1234567890-",
    firstName: "Igor",
    lastName: "Kirich",
    phoneNumber: "677206363",
    companyWebsite: "https://www.ukr.net",
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
