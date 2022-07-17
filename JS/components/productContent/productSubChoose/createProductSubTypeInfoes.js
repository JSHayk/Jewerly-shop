import { productTypeItemsArr } from "../../../../database/product-content.js";

export default function createProductSubTypeInfoes(checkId, appendParent, addLineStyle) {
    productTypeItemsArr.forEach(item => {
     if (item.id === checkId) {
       const productSubTypeItemsParentEl = document.createElement('div');
       productSubTypeItemsParentEl.setAttribute('id', 'product-subtype-items_parent');
       item.subTypes.forEach(secondItem => {
         const productSubTypeItemEl = document.createElement('div');
         productSubTypeItemEl.classList.add('product-subtype-item');
         productSubTypeItemEl.textContent = secondItem;
         productSubTypeItemsParentEl.appendChild(productSubTypeItemEl);
       });
       appendParent.appendChild(productSubTypeItemsParentEl);
       } 
     });
 
     const productSubTypeLineParent = document.createElement('div');
     productSubTypeLineParent.setAttribute('id', 'product-subtype-line_parent');
     if (addLineStyle) {
       productSubTypeLineParent.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 25)';
     }
     productSubTypeLineParent.innerHTML = `
       <img src="./pictures/product-choose-images/product-subtype-line.png" id="product-subtype-line">
     `;
     appendParent.appendChild(productSubTypeLineParent);
}