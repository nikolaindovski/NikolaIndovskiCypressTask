import {BasePage} from "../BasePage";

const SELECTOR = ".dropprods_Order"

export class HoodiesPage extends BasePage{
    static SortBy(option) {
        cy.viewport(1024, 768)
        this.selectOption(SELECTOR,option)

    }
}