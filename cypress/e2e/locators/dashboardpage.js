class dashboardpage{

    getMyAccountDropdownOptions(){
        return cy.get("ul>li[class='app-nav-item'] li span")
    
    }

    getMyAccountDropdownButton(){
        return cy.get("li[name='nav_item2']")
    }

    getShopDropdownButton(){
        return cy.get("li[name='nav_item1']")
    }

    getShopDropdownOptions(){
        return cy.get("ul>li[class='app-nav-item'] li span")
    }

    getSelectPhoneButtons(){
        return  cy.get("button[name='buttonSelectPhone']")
    }
  
}

const dashboardpagelocators= new dashboardpage()
    export default dashboardpagelocators