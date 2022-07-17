import getProductItemArr from "../productItemArr/getProductItemArr.js";
import createProductChoose from "./productChoose/createProductChoose.js";
import createProductItems from "./productItems/createProductItems.js";
import createProductChooseSubType from "./productSubChoose/createProductChooseSubType.js";
import createProductItemsFilterContent from "../productFilter/productFilterContent/createProductItemsFilterContent.js";
import createProductItemsFilterCallBtn from "../productFilter/productFilterContent/createProductItemsFilterCallBtn.js";
import createProductSubTypeAddWindow from "./productSubChoose/addWindow/createProductSubTypeAddWindow.js";
import createProductChooseAddWindow from "./productChoose/productAddWindow/createProductChooseAddWindow.js";
import productFilterSearch from "../productFilter/filterSearch/productFilterSearch.js";
import hideSomeItem from "../function-helpers/hideSomeItem.js";
import addProductSubType from "./productSubChoose/productAdd/addProductSubType.js";

export default function createProductContent(productArr = getProductItemArr(1), productSubTypeObj = {id: 1, info: 'Ring'}) {
   const wrapperSecondSide = document.querySelector('#wrapper-second-side');
   wrapperSecondSide.innerHTML = "";
   const productParentEl = document.createElement('div');
   productParentEl.setAttribute('id', 'products-parent');
   productParentEl.append(createProductChoose(), createProductChooseSubType(productSubTypeObj.id), createProductItems(productArr), createProductItemsFilterContent(), createProductItemsFilterCallBtn(), createProductSubTypeAddWindow(productSubTypeObj.info), createProductChooseAddWindow());
   wrapperSecondSide.appendChild(productParentEl);
   productFilterSearch(wrapperSecondSide, productArr);

   if (productArr.length === 0) {
       const message = document.createElement('div');
       message.textContent = "We don't have such of thing";
       message.setAttribute('id', 'product-message');
       wrapperSecondSide.appendChild(message);
       setTimeout(() => {
         document.location.reload(true);
       }, 1000);
   }

   const productSubTypeAddWindowClose = document.querySelector('#product-subtype-add-window-close_parent');
   const productSubTypeAddWindow =  document.querySelector('#product-subtype-add-window_parent');
   const productSubTypeAddWindowBtn = document.querySelector('#product-subtype-add-window-btn');
   productSubTypeAddWindowClose.addEventListener('click', () => {
     hideSomeItem(productSubTypeAddWindow);
   });

   productSubTypeAddWindowBtn.addEventListener('click', () => {
     addProductSubType(productSubTypeObj.id, wrapperSecondSide);
   });
}
