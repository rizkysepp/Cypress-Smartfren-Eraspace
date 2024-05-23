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

        cy.log('Step 1 - Klik tab menu "Jelajah" ')

        cy.get('#menu-item-dropdown-310')
        .click()

        cy.log('Step 2 - Klik Promo')

        cy.get('#menu-item-6784')
        .click()
        cy.url()
        .should('include','promotions/')

        cy.log('Step 3 - Klik pada salah satu program promo yang di tawarkan oleh SmartFren')

        cy.get('#sf374')
        .click()

        cy.log('Step 4 - Klik Syarat dan Ketentuan')

        cy.get('#panel-gb79931-664e51813ca8f-0-0-0 > div > span > div > div.link-card.mt-56')
        .click()
        cy.xpath('/html/body/div[4]/section[2]/div/div[2]/div[1]/div[4]/div/div/div/div/div/div[1]/div/span/div/div[2]/div/div/div/div[1]/button/span')
        .click({multiple:true})
   
        cy.xpath("//button[@class='close' and @aria-label='Close']//span[.='×']")
    
        cy.log('Step 5 - Klik FAQ')

        cy.contains('FAQ')
        .click({force:true})
        cy.xpath('/html/body/div[4]/section[2]/div/div[2]/div[1]/div[4]/div/div/div/div/div/div[2]/div/span/div/div[2]/div/div/div/div[1]/button/span')
        .click({multiple:true})
    })
})