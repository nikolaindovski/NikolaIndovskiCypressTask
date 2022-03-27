export class BasePage{

    static click (selector){
        cy.get(selector).click()
    }

    static hasText(selector, text){
        cy.get(selector).should("have.text", text)
    }

    static doesNotExist(selector){
        cy.get(selector).should("not.exist")
    }

    static isVisible(selector){
        cy.get(selector).should("be.visible")
    }

    static type(selector,text){
        cy.get(selector).type(text)
    }

    static openLoginPage(){
        cy.visit("https://lv.sportsdirect.com/login?returnurl=%2f")
    }

    static openGmailLoginPage(){
        //cy.visit("mail.google.com")
        //cy.forceVisit("mail.google.com")
        //cy.window().then(win => win.location.href = "mail.google.com");
    }

    static openRegisterPage(){
        cy.visit("https://lv.sportsdirect.com/registration?returnUrl=%2f")
    }

    static selectOption(selector,option){
        cy.get(selector).select(option)
    }

    static isVisible(selector){
        cy.should("be.visible", selector)
    }

    static openHoodiesPage() {
        cy.visit("https://lv.sportsdirect.com/mens/clothing/hoodies")
    }

    static selectOption(selector,option){
        cy.get(selector).select(option)
    }
}