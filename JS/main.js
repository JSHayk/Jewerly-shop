import createProductSearch from "./components/productSearch/createProductSearch.js";
import productSearch from "./components/productSearch/productSearch.js";
import productFilter from "./components/productFilter/productFilter.js";
import createProductContent from "./components/productContent/createProductContent.js";
import createProductAddWindow from "./components/productContent/createProductAddWindow.js";

document.addEventListener('DOMContentLoaded', function () {
 function createShop() {
    const wrapper = document.querySelector('#wrapper');
    wrapper.appendChild(createProductAddWindow())
    const wrapperFirstSide = document.createElement('div');
    wrapperFirstSide.setAttribute('id', 'wrapper-first-side');
    const wrapperSecondSide = document.createElement('div');
    wrapperSecondSide.setAttribute('id', 'wrapper-second-side');
    wrapper.append(wrapperFirstSide, wrapperSecondSide);

    createProductSearch(wrapperFirstSide);
    createProductContent();
    productSearch(wrapperSecondSide);
    productFilter(wrapperSecondSide);
 }


createShop();
});
