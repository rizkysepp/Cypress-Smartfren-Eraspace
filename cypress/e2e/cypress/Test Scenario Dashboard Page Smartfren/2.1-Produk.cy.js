require ('cypress-xpath')

describe('Modul Produk', ()=> {
    it('Memberli produk Kartu Perdana Unlimited Nonstop - Positive Case', ()=> {


        cy.visit('https://www.smartfren.com')
        cy.url()
        .should('contain','smartfren')
        .should('eq','https://www.smartfren.com/')
        .should('include','fren.com')
        .should('not.contain','frens')
        cy.wait(3000)

        cy.log('Step 1 - Klik tab menu "Jelajah"')

        cy.get('#menu-item-dropdown-310')
        .click()

        cy.log('Step 2 - Klik Produk')

        cy.get('#menu-item-2415')
        .click()
        cy.url()
        .should('include','#tab-produk/')

        cy.log('Step 3 - Klik button "Pelajari" pada tab Produk dan section Unlimited Nonstop')

        cy.get('#product-1176998790-PELAJARI-1')
        .click()
        cy.url()
        .should('include','unlimited-nonstop/')

        cy.log('Step 4 - Pilih paket dan Klik button BELI')

        cy.get('#unlimited-nonstop-1810736552-BELI-1')
        .click()
        cy.url()
        .should('eq','https://www.smartfren.com/product-details/?post=kartu-perdana-unlimited-nonstop-6-gb')

        cy.log('Step 5 - Klik button BELI')

        cy.xpath('/html/body/div[4]/div[1]/article/div/div/div/div/div/div/section/div[1]/div/div[2]/div[1]/div/div[2]/div/div[2]/a')
        .click()

        cy.log('Step 6 - Pilih metode pembayaran dengan menggunakan e-commerce yang tersedia')

        cy.get('#popup-pembelian > div > div > div.modal-body.border-0 > div > div > a:nth-child(5) > div')
        .click()

        cy.log('Step 7 - Klik Beli pada tampilan e-commerce yang di pilih')
        //user menyelesaikan pembayaran
    })
})

        