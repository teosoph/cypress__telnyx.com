import commonPage from "../pages/common.page";
import getRandomData from "../pages/random.data";

class ExpertPage {
  checkExpertTalkPageTitle = () => {
    cy.get("header>h1>span").should("have.text", "Talk to an expert");
  };

  markChooseReasonContactDropMenu() {
    cy.get('[id = "Reason_for_Contact__c"]').select("Sales-Inquiry");
  }

  fillValidDataToInputFields() {
    cy.get('[id="FirstName"]').type(commonPage.validUserData["firstName"]);
    cy.get('[id="LastName"]').type(commonPage.validUserData["lastName"]);
    cy.get('[id="Email"]').type(commonPage.validUserData["testEmail"]);
    cy.get('[id="Phone_Number_Extension__c"]').select("+380");
    cy.get('[id="Phone_Number_Base__c"]').type(
      commonPage.validUserData["phoneNumber"]
    );
    cy.get('[id="Website"]').type(commonPage.validUserData["companyWebsite"]);
    cy.get('[id="Use_Case_Form__c"]').select("Video");
    // cy.get('id="Form_Additional_Information__c"').type(
    //   getRandomData.getRandomData()
    // );
    // cy.get('id="Form_Additional_Information__c"').type("42");
    cy.get('[name="Subscription_Opt_In__c"]').click();
  }

  clickOnSubmitButton() {
    cy.get('[type="submit"]').click();
  }

  checkSubmitPageTitle = () => {
    cy.get("main>div>h1").should("have.text", "Thanks for Reaching Out!");
  };
}

module.exports = new ExpertPage();
