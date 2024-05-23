require ('cypress-xpath')

describe('Modul Promo', ()=> {
    it('Melihat Promo yang di tawarkan oleh SmartFren - Positive Case', ()=> {


        cy.visit('https://www.smartfren.com')
        cy.url()
        .should('contain','smartfren')
        .should('eq','https://www.smartfren.com/')
        .should('include','fren.com')
        .should('not.contain','frens')
        cy.wait(3000)

        cy.log('Step 1 - Klik Karir pada header website')

        cy.xpath('//li[@class="menu-item"]/a[@href="https://www.smartfren.com/connect-with-us/about-us/career-life-at-smartfren/"]')
        .click()

        cy.log('Step 2 -  Klik button VIEW OPENINGS')

        cy.xpath('//div[@lang="id-ID"]//a[@class="btn btn-primary" and text()="VIEW OPENINGS"]')
        .invoke("removeAttr", "target")
        .click()
        cy.wait(2000)
        cy.contains("Our Openings").should("have.text", "Our Openings")
        
        cy.log('Step 3 - Klik button APPLY pada salah satu job opening yang muncul di website')

        cy.xpath('//div[@class="col-4 go-right center_job_opening"]/a[@href="/job-details/?id=570226"]')
        .click()

        cy.log('Step 4 - Klik button APPLY NOW')

        cy.xpath('//div[@class="job_detail_new_career_link"]/a[@href="/job-apply/?id=570226"]/input[@class="btn btn-primary max_width_btn_job_detail"]')
        .click()

        cy.log('Step 5 - Isi data dirim pada form yang tampil')

        cy.get('#full_name')
        .type('Rizky Septian')
        .should('have.value','Rizky Septian')

        cy.get('#email')
        .type('Rizky8septian@gmail.com')
        .should('have.value','Rizky8septian@gmail.com')

        cy.get('#phone')
        .type('087880628332')
        .should('have.value','087880628332')

        cy.log('Step 6 - Pilih file pendukung yang di miliki oleh user')

        cy.get('[name="resume"]')
        .selectFile("C:\\Users\\Rizky\\Downloads\\Documents\\Curriculum_Vitae_Rizky_Septian (2).pdf")

        cy.log('Step 7 - Klik button Apply')

        cy.get('#btn_submit')
        .click()
        cy.wait(3000)
        cy.xpath('//div[@id="_thank_you"]/div[@class="job_thankyou_box"]')
        .should('exist')
    })
})

describe('Modul Promo', ()=> {
    it.only('Melihat Promo yang di tawarkan oleh SmartFren - Negative Case', ()=> {


        cy.visit('https://www.smartfren.com')
        cy.url()
        .should('contain','smartfren')
        .should('eq','https://www.smartfren.com/')
        .should('include','fren.com')
        .should('not.contain','frens')
        cy.wait(3000)

        cy.log('Step 1 - Klik Karir pada header website')

        cy.xpath('//li[@class="menu-item"]/a[@href="https://www.smartfren.com/connect-with-us/about-us/career-life-at-smartfren/"]')
        .click()

        cy.log('Step 2 -  Klik button VIEW OPENINGS')

        cy.xpath('//div[@lang="id-ID"]//a[@class="btn btn-primary" and text()="VIEW OPENINGS"]')
        .invoke("removeAttr", "target")
        .click()
        cy.wait(2000)
        cy.contains("Our Openings").should("have.text", "Our Openings")
        
        cy.log('Step 3 - Klik button APPLY pada salah satu job opening yang muncul di website')

        cy.xpath('//div[@class="col-4 go-right center_job_opening"]/a[@href="/job-details/?id=570226"]')
        .click()

        cy.log('Step 4 - Klik button APPLY NOW')

        cy.xpath('//div[@class="job_detail_new_career_link"]/a[@href="/job-apply/?id=570226"]/input[@class="btn btn-primary max_width_btn_job_detail"]')
        .click()

        cy.log('Step 5 - Isi data dirim pada form yang tampil')

        cy.get('#full_name')
        .type('Rizky Septian')
        .should('have.value','Rizky Septian')

        cy.get('#email')
        .type('Rizky8septian@gmail.com')
        .should('have.value','Rizky8septian@gmail.com')

        cy.get('#phone')
        .type('087880628332')
        .should('have.value','087880628332')

        cy.log('Step 6 - Klik button Apply')

        cy.get('#btn_submit')
        .click()
        cy.get('#alert_failed')
        .should('have.text','"Failed to submit your resume, please try again."')


    })
})