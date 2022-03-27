import {BasePage} from "../../pageObjects/BasePage";
import {RegisterPage} from "../../pageObjects/pages/RegisterPage";
import {LogInPage} from "../../pageObjects/pages/LogInPage";
import {GmailPage} from "../../pageObjects/pages/GmailPage";

describe("Authorization for the web store", () =>{
    it("Registering a new user", () =>{
        //BasePage.openRegisterPage()
        //RegisterPage.enterUserDataAndRegister("Trajce")
        BasePage.openLoginPage()
        LogInPage.logInExistingUser("Trajce")
    })

    it("Logging in with invalid user", () =>{
        BasePage.openLoginPage()
        LogInPage.logInWithInvalidPassword("Trajce")
    })

    it.only("Forgot your password", () =>{
        BasePage.openLoginPage()
        LogInPage.forgotYourPassword("Trajce")
        GmailPage.ChangePasswordTo("newPassword")
    })
})