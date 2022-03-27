import {BasePage} from "../BasePage";

const FIRST_NAME_FIELD = "#Registration_FirstName"
const LAST_NAME_FIELD = "#Registration_LastName"
const EMAIL_FIELD = "#Registration_EmailAddress"
const PASSWORD_FIELD = "#txtPassword"
const CONFIRM_PASSWORD_FIELD = "#Registration_ConfirmPassword"
const REGISTER_BUTTON = "#RegistrationSubmit"


export class RegisterPage extends BasePage{
    static enterUserDataAndRegister(user){
        cy.fixture("users").then(fixture => {
            this.type(FIRST_NAME_FIELD, fixture[user].firstName)
            this.type(LAST_NAME_FIELD, fixture[user].lastName)
            this.type(EMAIL_FIELD, fixture[user].email)
            this.type(PASSWORD_FIELD, fixture[user].password)
            this.type(CONFIRM_PASSWORD_FIELD, fixture[user].password)
            this.click(REGISTER_BUTTON)
        })
    }
}