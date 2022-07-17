import { productTypeItemsArr } from "../../../../database/product-content.js";
import createProductChooseType from "../productChoose/createProductChooseType.js";
import hideSomeItem from "../../function-helpers/hideSomeItem.js";

export default function addNewItemToProductChoose(uploadEl, uploadElContSave) {
    const windowAddBtn = document.querySelector('#product-choose-add-window-btn');
    windowAddBtn.addEventListener('click', () => {      
      const windowCategory = document.querySelector('#product-choose-add-window-category');
      const windowUploadImage = document.querySelector('#upload-show-img');
      if (windowCategory.value.trim() && windowUploadImage) {
        const categoryVal = windowCategory.value;
        productTypeItemsArr.push({
          info: categoryVal,
          image: windowUploadImage.src, 
          productItemsArr: [],
          subTypes: [],
          id: productTypeItemsArr.length + 1
        });
        const productsChooseParentEl = document.querySelectorAll('.product-choose_parent');
        productsChooseParentEl.forEach(item => {
          item.innerHTML = "";
          item.appendChild(createProductChooseType());
        });
        windowCategory.value = "";
        uploadEl.innerHTML = "";
        uploadEl.innerHTML = uploadElContSave;     
        hideSomeItem(document.querySelector('#product-choose-add-window'))     
      }
   });
}