import {HoodiesPage} from "../../pageObjects/pages/HoodiesPage";
import {BasePage} from "../../pageObjects/BasePage";

describe("Selecting brand", () =>{
    it("Selecting brand", () =>{
        BasePage.openHoodiesPage()
        HoodiesPage.PickBrand("adidas")
    })
})