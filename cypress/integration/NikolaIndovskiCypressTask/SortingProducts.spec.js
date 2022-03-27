import {BasePage} from "../../pageObjects/BasePage";
import {HoodiesPage} from "../../pageObjects/pages/HoodiesPage";

describe("Sorting products", () =>{
    it("Sorting products by price (High to low)", ()=>{
        BasePage.openHoodiesPage()
        HoodiesPage.SortBy("Discount % (High To Low)")
    })
})