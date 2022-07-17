import getProductLoading from "../productLoading/getProductLoading.js";
import getProductItemArr from "../productItemArr/getProductItemArr.js";
import createProductContent from "../productContent/createProductContent.js";
import productFilter from "../productFilter/productFilter.js";

export default  function productSearch(wrapperSecondSide) {
    let productSearchArr = [];
    const productSearchInputEl = document.querySelector('#product-search-input');
    const productSearchIconEl = document.querySelector('#product-search-icon_parent');
    const productSearchComeBackEl = document.querySelector('#product-search-come-back');
    productSearchIconEl.addEventListener('click', () => {
    const searchVal = productSearchInputEl.value.toLowerCase();
    let resultArr;
    if (searchVal.trim()) {
      productSearchArr = [];
      getProductItemArr(1).forEach(item => {
        if (item.model.toLowerCase().includes(searchVal) || item.price.toLowerCase().includes(searchVal)) {
          productSearchArr.push(item);
        }
      });
      if (productSearchArr.length === 0) {;
         resultArr = getProductItemArr(1);
      } else {
        resultArr = productSearchArr;
      }
      } else {
        resultArr = getProductItemArr(1);
      }
      wrapperSecondSide.innerHTML = "";
      wrapperSecondSide.appendChild(getProductLoading());
      setTimeout(() => {
        wrapperSecondSide.innerHTML = "";
        createProductContent(resultArr)
        productFilter();
      }, 600);
      productSearchInputEl.value = "";
    });
    productSearchComeBackEl.addEventListener('click', () => {
      wrapperSecondSide.innerHTML = "";
      wrapperSecondSide.appendChild(getProductLoading());
      setTimeout(() => {
        wrapperSecondSide.innerHTML = "";
        createProductContent();
        productFilter();
      }, 600);
      productSearchInputEl.value = "";
    });
}