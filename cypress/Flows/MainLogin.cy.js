require('cypress-xpath')
import * as cons from "../constant"

export function MainLogin(acc_type) {
    var Username
    var password = cons.ALL_PASSWORD

    // Pengkondisian nilai dari variabel "username" tergantung 
    // dari parameter "acc_type" yang dikirim
    if (acc_type === "normal"){
        Username = cons.NORMAL_USER
    }
    
    // Akses Main URL dan Login
    cy.visit(`${cons.MAIN_URL}`)
    
    cy.visit('https://traveloka.com/')
    }