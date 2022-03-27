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

    static openRegisterPage(){
        cy.visit("https://lv.sportsdirect.com/registration?returnUrl=%2f")
    }

    static selectOption(selector,option){
        cy.get(selector).select(option)
    }

    static isVisible(selector){
        cy.should("be.visible", selector)
    }
}