require ('cypress-xpath')

it('User visit Website Eklipse.gg', ()=> {
    describe('This module is for users who want to visit the Eklipse.gg website', ()=> {

        cy.log('Step 1 - Go to eklipse.gg')

        cy.visit('http://www.automationpractice.pl/index.php')

        cy.xpath('//*[@id="block_top_menu"]/ul/li[2]/a')
        .click()
        cy.url()
        .should('contain','category')
        .should('eq','http://www.automationpractice.pl/index.php?id_category=8&controller=category')
        .should('include','automationpractice.pl')
        .should('not.contain','categori')

        cy.get('#search_query_top')
        .should('be.visible')
        .and('exist')

        cy.get('#search_query_top')
        .type('dress')

        let expName="T-shirts"
        cy.get('#block_top_menu > ul > li:nth-child(3) > a').then( (x) => {
            let actName=x.text()

            
            //BDD style
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal("")
            
            //TDD style
           assert.equal(actName,expName)
           assert.notEqual(actName,"")
        })     
    })
})
    



