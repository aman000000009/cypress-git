class HomePageEcomm
{

    getFirstProduct(){
         cy.contains('Sauce Labs Backpack').click()
          cy.get('.btn_primary').click()
         return cy.get('.inventory_details_back_button').click({force:true})
    }


    getSecondProduct(){
        cy.wait(2000)
         cy.contains('Sauce Labs Onesie').scrollIntoView().click() 
         //cy.contains('Sauce Labs Onesie').click()
         cy.get('.btn_primary').click()
        cy.get('.inventory_details_back_button').click({force:true})
        return cy.get('[data-icon="shopping-cart"]').click()

    }


}

export default HomePageEcomm