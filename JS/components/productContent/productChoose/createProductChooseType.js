import showProductAddWindow from "./productAddWindow/showProductAddWindow.js";
import showProductChooseAddWindow from "./productAddWindow/showProductChooseAddWindow.js";
import { productTypeGenderArr, productTypeItemsArr } from "../../../../database/product-content.js";


export default function createProductChooseType(addBtn = true) {  
    const productChooseTypeParentEl = document.createElement('div');
    productChooseTypeParentEl.setAttribute('id', 'product-choose-type_parent');
  
    // Appending choose human gender beacuse it needs at once.
    const productChooseTypeGenderParentEl = document.createElement('div');
    productChooseTypeGenderParentEl.setAttribute('id', 'product-choose-type-gender_parent')
    productTypeGenderArr.forEach(item => {
      const productChooseTypeGenderItemEl = document.createElement('div');
      productChooseTypeGenderItemEl.classList.add('product-choose-type-gender-item');
      productChooseTypeGenderItemEl.innerHTML = `
        <img class="product-gender-item" src=${item.image}>
      `;
      productChooseTypeGenderParentEl.appendChild(productChooseTypeGenderItemEl);
    });
    productChooseTypeParentEl.appendChild(productChooseTypeGenderParentEl);
  
    productTypeItemsArr.forEach(item => {
      const productChooseTypeItemEl = document.createElement('div');
      productChooseTypeItemEl.classList.add('product-choose-type-item');
      productChooseTypeItemEl.addEventListener('click', () => {
        showProductAddWindow();
      });
      productChooseTypeItemEl.innerHTML = `
        <div class="product-choose-type-item-image_parent">
          <img src=${item.image} class="product-choose-type-item-image">
        </div>
        <div class="product-choose-type-item-info_parent">
          <p class="product-choose-type-item-info">${item.info}</p>
        </div>
      `;
      productChooseTypeParentEl.appendChild(productChooseTypeItemEl);
    });
  
    if (addBtn) {
      const productChooseTypeAddEl = document.createElement('div');
      productChooseTypeAddEl.setAttribute('id', 'product-choose-type-add_parent');
      productChooseTypeAddEl.addEventListener('click', () => {
        showProductChooseAddWindow();
      });
      productChooseTypeAddEl.innerHTML = `
        <img src="./pictures/icons/product-type-add.png" id="product-choose-type-add">
      `;
      productChooseTypeParentEl.appendChild(productChooseTypeAddEl);
    }
  
    return productChooseTypeParentEl;
}