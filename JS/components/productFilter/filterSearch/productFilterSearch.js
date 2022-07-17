import getProductItemArr from "../../productItemArr/getProductItemArr.js";
import getFilterDateSearchArr from "./filterSearchSrc/getFilterDateSearchArr.js";
import getFilterPriceSearchData from "./filterSearchSrc/getFilterPriceSearchData.js";

export default function productFilterSearch(wrapperSecondSide, checkArr = getProductItemArr(1)) {
    let searchObj = {};
    let countOfFilter = 0;
    
     function checkFilterPriceFileds() {
       const filterPriceStartEl = document.querySelector('#product-filter-price-start-input');
       const filterPriceEndEl = document.querySelector('#product-filter-price-end-input');
  
      if (filterPriceStartEl.value.trim() && filterPriceEndEl.value.trim()) {
        if ((!isNaN(filterPriceStartEl.value.trim())) && (!isNaN(filterPriceEndEl.value.trim()))) {
            return {
              startPrice: filterPriceStartEl.value.trim(),
              endPrice: filterPriceEndEl.value.trim()
            }
        }
      }
     }
  
     function checkFilterDateFileds() {
       const filterDateStartEl = document.querySelector('#product-filter-start-date-input');
       const filterDateEndEl = document.querySelector('#product-filter-end-date-input');
  
       if (filterDateStartEl.value.trim() && filterDateEndEl.value.trim()) {
          return {
            firstDate: filterDateStartEl.value,
            secondDate: filterDateEndEl.value
          }
       }
     }
  
    const productFilterSaveBtn = document.querySelector('#product-filter-btn');
    productFilterSaveBtn.addEventListener('click', () => {
      const answerFromPriceCheck = checkFilterPriceFileds();
      const answerFromDateCheck = checkFilterDateFileds();
  
      if (answerFromPriceCheck) {
         searchObj.priceSearchArr = getFilterPriceSearchData(checkArr, answerFromPriceCheck, wrapperSecondSide);
         countOfFilter+= 1;
      }
  
      if (answerFromDateCheck) {
         searchObj.dateSearchArr = getFilterDateSearchArr(checkArr, answerFromDateCheck, wrapperSecondSide);
      }
    });   
}