require ('cypress-xpath')

describe('Modul Promo', ()=> {
    it('Melihat Promo yang di tawarkan oleh SmartFren', ()=> {


        cy.visit('https://www.smartfren.com')
        cy.url()
        .should('contain','smartfren')
        .should('eq','https://www.smartfren.com/')
        .should('include','fren.com')
        .should('not.contain','frens')
        cy.wait(3000)

        cy.log('Step 1 - Klik pada field search yang tersedia di kanan atas website')

        cy.get('#search')
        .click({force:true})

        cy.log('Step 2 - Isi pada field search tersebut dengan keyword yang di butuhkan oleh user')

        cy.get('input[name="s"]').type('kuota{enter}');

        cy.log('Step 3 - Klik enter')

        cy.contains('kuota').should('be.visible')
    })
})