import { productTypeItemsArr } from "../../../../../database/product-content.js";
import createProductSubTypeInfoes from "../createProductSubTypeInfoes.js";
import hideSomeItem from "../../../function-helpers/hideSomeItem.js";

export default function addProductSubType(checkId, wrapperSecondSide) {
    const productSubTypeAddWindowEl = document.querySelector('#product-subtype-add-window_parent');
    const productSubTypeAddInputEl = document.querySelector('#product-subtype-add-window-input');
    let inputVal = productSubTypeAddInputEl.value.trim();
    if (inputVal && inputVal.length >= 4) {
      productTypeItemsArr.forEach(item => {
        if (item.id === checkId) {
          item.subTypes.push(inputVal);
        }
      });
      productSubTypeAddInputEl.value = "";
      hideSomeItem(productSubTypeAddWindowEl);
      const productSubTypeFirstSideEl = document.querySelectorAll('#product-subtype-first_side');
      if (productSubTypeFirstSideEl.length > 0) {
        productSubTypeFirstSideEl.forEach(item => {
          item.innerHTML = "";
          createProductSubTypeInfoes(checkId, item);
        })
      } else {
        productSubTypeFirstSideEl[0].innerHTML = "";
        createProductSubTypeInfoes(checkId, productSubTypeFirstSideEl[0]);
      }
    }
}