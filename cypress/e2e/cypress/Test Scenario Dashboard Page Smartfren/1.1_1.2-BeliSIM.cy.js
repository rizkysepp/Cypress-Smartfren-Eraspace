require ('cypress-xpath')

describe('Modul Beli SIM', ()=> {
    it('Membeli kartu eSIM prabayar - Positive Case', ()=> {

        cy.log('Step 1 - Akses url Eraspace')

        cy.visit('https://www.smartfren.com')
        cy.url()
        .should('contain','smartfren')
        .should('eq','https://www.smartfren.com/')
        .should('include','fren.com')
        .should('not.contain','frens')
        cy.wait(3000)

        cy.log('Step 2 - Klik menu Beli SIM')

        cy.get('.qpl_link')
        cy.contains('Beli SIM')
        .click()

        cy.log('Step 3 - Pilih dan klik paket kuota yang di tawarkan pada tab eSIM dan section Prepaid')
        
        cy.contains('Kuota L - 87GB')
        .click()

        cy.log(' Step 4 - Klik button Lanjutkan')

        cy.xpath('/html/body/div[3]/div/div[2]/div[3]/div[3]/div[2]/div[2]/div[3]/a')
        .click({force:true})

        cy.log('Step 5 - Klik button Lanjutkan, jika sudah membaca dengan benar informasi yang di tawarkan')

        cy.get('.h-5')
        .click()

        cy.log('Step 6 - Pilih nomor yang di yang ingin di pakai user')

        //USER PILIH NOMOR YANG TAMPIL
        cy.wait(5000)

        cy.log('Step 7 - Klik button Lanjutkan')

        cy.xpath('/html/body/section/div[1]/div/div/div[2]/div/div[6]/a')
        .click()

        cy.log('Step 8 Isi data lengkap user pada form ')

        cy.get('#full-name')
        .type('Rizky Septian')
        .should('have.value','Rizky Septian')

        cy.get('#email')
        .type('//isi email')
        .should('have.value','//isi email')

        cy.get('#email-confirmation')
        .type('//isi email')
        .should('have.value','//isi email')

        cy.get('#whatsapp-number')
        .type('//isi nomor Whatsapp')
        .should('have.value','//isi nomor Whatsapp')

        cy.xpath('/html/body/section/div[1]/div/div/div[1]/form/div[4]/div[1]/div[1]/select')
        .select('1')

        cy.get('#month')
        .select('May')

        cy.get('#year')
        .select('2000')

        cy.log('Step 9 - Klik button Lanjutkan')

        cy.xpath('/html/body/section/div[1]/div/div/div[2]/div/div[6]/a')
        .click()

        cy.log('Step 10 - lik button Lanjutkan, jika user sudah membaca rincian pesanan')

        cy.contains('LANJUTKAN')
        .click()
        cy.get('.h-5')
        .dblclick()
        cy.wait(3000)
        cy.get('.h-5')
        .click()
        

        cy.log('Step 11 - Pilih metode pembayarn')

        cy.xpath('/html/body/section/div[1]/div/div/div[1]/div[3]/div[4]/div')
        .click()

        cy.log('Step 12 - Klik button Lanjutkan')

        cy.get('#ovo-number')
        .type('//ISI NOMOR E-WALLET')
        cy.contains('LANJUTKAN')
        .click()
        cy.get('.h-5')
        .dblclick()
    })
})



describe('Modul Beli SIM', ()=> {
    it.only('Memunculkan pesan alert yang tampil jika tidak mengisi data diri dengan lengkap - Negative Case', ()=> {

        cy.log('Step 1 - Akses url Eraspace')

        cy.visit('https://www.smartfren.com')
        cy.url()
        .should('contain','smartfren')
        .should('eq','https://www.smartfren.com/')
        .should('include','fren.com')
        .should('not.contain','frens')
        cy.wait(3000)

        cy.log('Step 2 - Klik menu Beli SIM')

        cy.get('.qpl_link')
        cy.contains('Beli SIM')
        .click()

        cy.log('Step 3 - Pilih dan klik paket kuota yang di tawarkan pada tab eSIM dan section Prepaid')
        
        cy.contains('Kuota L - 87GB')
        .click()

        cy.log(' Step 4 - Klik button Lanjutkan')

        cy.xpath('/html/body/div[3]/div/div[2]/div[3]/div[3]/div[2]/div[2]/div[3]/a')
        .click({force:true})

        cy.log('Step 5 - Klik button Lanjutkan, jika sudah membaca dengan benar informasi yang di tawarkan')

        cy.get('.h-5')
        .click()

        cy.log('Step 6 - Pilih nomor yang di yang ingin di pakai user')

        //USER PILIH NOMOR YANG TAMPIL
        cy.wait(5000)

        cy.log('Step 7 - Klik button Lanjutkan')

        cy.xpath('/html/body/section/div[1]/div/div/div[2]/div/div[6]/a')
        .click()

        cy.log('Step 8 Isi data lengkap user pada form ')

        cy.get('#full-name')
        .type('Rizky Septian')
        .should('have.value','Rizky Septian')

        cy.get('#email')
        .type('//ISI EMAIL')
        .should('have.value','//ISI EMAIL')

        cy.get('#whatsapp-number')
        .type('//ISI NOMOR HP')
        .should('have.value','//ISI NOMOR HP')

        cy.xpath('/html/body/section/div[1]/div/div/div[1]/form/div[4]/div[1]/div[1]/select')
        .select('1')

        cy.get('#month')
        .select('May')

        cy.get('#year')
        .select('2000')

        cy.log('Step 9 - Klik button Lanjutkan')

        cy.xpath('/html/body/section/div[1]/div/div/div[2]/div/div[6]/a')
        .click()
        cy.xpath('/html/body/section/div[1]/div/div/div[1]/form/div[2]/div[2]/p')
        .should('have.text','Wajib Diisi')
    })
})
