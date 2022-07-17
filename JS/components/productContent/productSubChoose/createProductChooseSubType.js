import createProductSubTypeInfoes from "./createProductSubTypeInfoes.js";
import showProductSubTypeWindow from "./addWindow/showProductSubTypeWindow.js";

export default function createProductChooseSubType(activeItemId = 1, secondSideBool = true, addLineStyle = false) {
    const productSubTypeParentEl = document.createElement('div');
    productSubTypeParentEl.setAttribute('id', 'product-subtype_parent');
    const productSubTypeFirstSideEl = document.createElement('div');
    productSubTypeFirstSideEl.setAttribute('id', 'product-subtype-first_side');
    createProductSubTypeInfoes(activeItemId, productSubTypeFirstSideEl, addLineStyle);
    productSubTypeParentEl.appendChild(productSubTypeFirstSideEl);
  
    if (secondSideBool) {
      const productSubTypeSecondSideEl = document.createElement('div');
      productSubTypeSecondSideEl.setAttribute('id', 'product-subtype-second_side');
      const productSubTypeAddEl = document.createElement('div');
      productSubTypeAddEl.setAttribute('id', 'product-subtype-add_parent');
      productSubTypeAddEl.innerHTML = `
        <img src="./pictures/icons/product-type-add.png" id="product-subtype-add">
      `;
      productSubTypeAddEl.addEventListener('click', () => {
        showProductSubTypeWindow();
      });
      productSubTypeSecondSideEl.appendChild(productSubTypeAddEl);
      productSubTypeParentEl.appendChild(productSubTypeSecondSideEl);
    }
  
    return productSubTypeParentEl;
}