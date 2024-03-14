class dashboardpage{


    getMyAccountDropdown(){
        return cy.get("a[class='dropdown-toggle app-anchor']")
    }

    getOrderOption(){
        return cy.get("a[title='Orders']")
    }
    getMyAccountDropdownOptions(){
        return cy.get("ul>li[class='app-nav-item'] li span")
    
    }
    getDashboardHeadingLabels(){
        return cy.get("div[name='linearlayoutitem1'] label")
    }

    getTurboMobilesLogo(){
        return cy.get("div[name='headerleft']")
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