import {BasePage} from "../BasePage";

const SORT_SELECTOR = ".dropprods_Order"


export class HoodiesPage extends BasePage{
    static SortBy(option) {
        this.selectOption(SORT_SELECTOR,option)

    }
    static PickBrand(brand) {

    }
}