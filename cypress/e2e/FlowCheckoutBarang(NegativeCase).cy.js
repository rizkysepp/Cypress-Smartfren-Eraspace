require ('cypress-xpath')

import * as login from '../Flows/MainLogin.cy'

it('Melakukan Checkout Suatu barang di Sauce Demo (Negative Case - Pada saat isi form data diri di halaman checkout information)', ()=> {
    describe('Login', ()=> {
        cy.log('Step 1')
        var acc_type
        login.MainLogin(acc_type='normal')
    })
        cy.then(() => {
            cy.log('Step 2 - Klik Add to cart')
            cy.get('#add-to-cart-sauce-labs-bolt-t-shirt')
            .click({force:true})
            cy.get('#add-to-cart-sauce-labs-fleece-jacket')
            .click({force:true})
            cy.get('#add-to-cart-sauce-labs-onesie')
            .click({force:true})
            cy.xpath('/html/body/div/div/div/div[2]/div/div/div/div[6]/div[2]/div[2]/button')
            .click({force:true})
        })
            cy.then(() => {
                cy.log('Step 3 - Klik Keranjang Belanja')
                cy.get('#shopping_cart_container > a')
                .click({force:true})
                cy.url()
                .should('include', '/cart')
            })
                cy.then(() => {
                    cy.log('Step 4 - Klik button Checkout')
                    cy.get('#checkout')
                    .click({force:true})
                    cy.url()
                    .should('include','/checkout-step-one')
                })
                    cy.then(() => {
                        cy.log('Step 5 - Isi form data Checkout (Tidak isi postal code)')
                        cy.get('#first-name')
                        .type('David')
                        .should('have.value', 'David')
                        cy.get('#last-name')
                        .type('Washington')
                        .should('have.value', 'Washington')
                    })
                        cy.then(() => {
                            cy.log('Step 6 - Klik button Continue')
                            cy.get('#continue').as('Continue_Button')
                            .click({force:true})
                            cy.get('h3').as('Error_Message')
                            .should('contain.text', 'Error: Postal Code is required')
                            cy.reload(true)
                        })
                            cy.then(() => {
                                cy.log('Step 5 - Isi form data Checkout (Tidak isi First Name)')
                                cy.get('#last-name')
                                .type('Washington')
                                .should('have.value', 'Washington')
                                cy.get('#postal-code')
                                .type('4215')
                                .should('have.value','4215')
                            })
                                cy.then(() => {
                                    cy.log('Step 6 - Klik button Continue')
                                    cy.get('@Continue_Button')
                                    .click({force:true})
                                    cy.get('@Error_Message')
                                    .should('contain.text', 'Error: First Name is required')
                                })

})

