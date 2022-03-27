import {BasePage} from "../BasePage";

const LOGIN_FIELD = "#Login_EmailAddress"
const PASSWORD_FIELD = "#Login_Password"
const SIGN_IN_BUTTON = "#LoginButton"
const ERROR_FIELD = ".dnnFormMessage dnnFormValidationSummary field-validation-error"
const FORGOT_PASSWORD_BUTTON = ".ForgotPasswordLinkButton"
const SEND_EMAIL_FIELD = "#EmailRequestSubmit"
const ENTER_EMAIL_ADDRESS_FIELD = "#EmailAddress"
const SEND_EMAIL_BUTTON = "#EmailRequestSubmit"
const EMAIL_SENT_HEADER = "dnnFormMessage dnnFormSuccess"

export class LogInPage extends BasePage{

    static logInExistingUser(user) {
        cy.fixture("users").then(fixture =>{
            this.type(LOGIN_FIELD,fixture[user].email)
            this.type(PASSWORD_FIELD,fixture[user].password)
            this.click(SIGN_IN_BUTTON)
            this.isVisible(ERROR_FIELD)
        })
    }
    static logInWithInvalidPassword(user) {
        cy.fixture("users").then(fixture =>{
            this.type(LOGIN_FIELD,fixture[user].email)
            this.type(PASSWORD_FIELD,"InvalidPassword")
            this.click(SIGN_IN_BUTTON)
            this.isVisible(ERROR_FIELD)
        })
    }
    static forgotYourPassword(user){
        this.click(FORGOT_PASSWORD_BUTTON)
        this.isVisible(SEND_EMAIL_FIELD)
        cy.fixture("users").then(fixture =>{
            this.type(ENTER_EMAIL_ADDRESS_FIELD,fixture[user].email)
            this.click(SEND_EMAIL_BUTTON)
            this.isVisible(EMAIL_SENT_HEADER)
        })
    }
}