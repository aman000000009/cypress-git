/// <reference types="Cypress" />

describe('second test', function()
{

it('dropdown and checkbox test', function(){


cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
cy.get('input[name="username"]').type('Admin')
cy.get('input[name="password"]').type('admin123')
cy.get('button[type="submit"]').click()

cy.get('.oxd-main-menu').find('.oxd-main-menu-item-wrapper').eq(4).contains('Recruitment').click()
cy.contains('Vacancies').click()
//cy.contains('Job Title').find('div.oxd-select-wrapper').click()
//cy.get('div.oxd-select-wrapper > :nth-child(1) > div.oxd-select-text-input').click()
//cy.get('oxd-input-group oxd-input-field-bottom-space').find('.oxd-select-wrapper').click()
cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
cy.contains('Automaton Tester').click({force:true})
cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
})

}
)