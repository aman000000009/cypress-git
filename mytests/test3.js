/// <reference types="Cypress" />

describe('Handling Child Windows', () => {
    it('Should handle child window', () => {
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
 
       cy.get("#opentab").invoke('removeAttr','target').click();
 
       cy.origin("https://www.qaclickacademy.com",()=>
       {
        cy.get("#navbarSupportedContent a[href*='about']").click();
        cy.get(".mt-50 h2").should('contain','QAClick Academy');
 
       })
 
 
       // when new tab opens cypress cant handle there, so theres a work around , new tab open when attribute 'target' is present
       // in the url. so we temporarily remove attribute 'target' using 'removeattr' in invoke method.
       // and when url domain changes as in line 10, we tell cypress the origin using origin method and work in there
 
    });
 

    it('web table',function() {
 
        //Check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
         
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
         
            const text=$e1.text()
            if(text.includes("Python"))
            {
         
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price) // use of promise as text is not cypress command
                {
                 const priceText=   price.text()
                 expect(priceText).to.equal('25')
                })
            }
         
        })
         
         
        })

});
 