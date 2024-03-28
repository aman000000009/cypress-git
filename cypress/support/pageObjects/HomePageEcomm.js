class HomePageEcomm
{

    getFirstProduct(){
         cy.contains('Sauce Labs Backpack').click()
          cy.get('.btn_primary').click()
         return cy.get('.inventory_details_back_button').click({force:true})
    }


    getSecondProduct(){
        cy.wait(5000)
         cy.contains('Sauce Labs Onesie').scrollIntoView()
         //new 
         cy.contains('Sauce Labs Onesie').click({force:true})
        cy.get('.inventory_details_back_button').click({force:true})
        return cy.get('[data-icon="shopping-cart"]').click()

    }


}

export default HomePageEcomm