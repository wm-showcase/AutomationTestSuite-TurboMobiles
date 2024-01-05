class registrationpage{

    getRegistreationButton(){
        return cy.get("a[caption='Register']")
    
    }

    getFullNameTextBox(){
        return cy.get("input[name='name_formWidget']")
    }

    getEmailTextBox(){
        return cy.get("input[name='email_formWidget']")
    }

    getPasswordTextbox(){
        return cy.get("input[name='password_formWidget']")
    }

    getCreateAccountButton(){
        return  cy.get("button[aria-label='CREATE ACCOUNT']")
    }
    getNameOfTheMobile(){
        return cy.get("llabel[name='labelCompanyAndModal']")
    }
}

const registrationpagelocators= new registrationpage()
    export default registrationpagelocators