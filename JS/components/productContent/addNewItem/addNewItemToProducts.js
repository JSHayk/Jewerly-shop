import { productTypeItemsArr } from "../../../../database/product-content.js";
import createProductContent from "../createProductContent.js";
import closeProductChooseAddWindow from "../productChoose/productAddWindow/closeProductChooseAddWindow.js";
import productFilter from "../../productFilter/productFilter.js";

export default function addNewItemToProducts(activeId, contOfUpload) {
    const productAddWindowEl = document.querySelector('#product-add-window');
    const articulInputEl = document.querySelector('#product-add-window-input-articul');
    const priceInputEl = document.querySelector('#product-add-window-input-price');
    const wrapperSecondSide = document.getElementById('wrapper-second-side');
    
    const addBtnEl = document.querySelector('#product-add-window-btn');
    addBtnEl.addEventListener('click', () => {
      const uploadParentEl = document.querySelector('#product-add-window-upload-big');
      const uploadImgEl = document.querySelector('#upload-show-img'); 

      if (articulInputEl.value.trim() && (!isNaN(priceInputEl.value.trim()))) {
        productTypeItemsArr.forEach(item => {
          if (item.id === activeId) {
            item.productItemsArr.push({
              image: uploadImgEl.src,
              model: articulInputEl.value,
              price: priceInputEl.value,
              valuet: '$',
              date: new Date().getDate()
            });
            createProductContent();
            closeProductChooseAddWindow(productAddWindowEl);
            productFilter(wrapperSecondSide);
            articulInputEl.value = "";
            priceInputEl.value = "";
            uploadParentEl.innerHTML = contOfUpload;
          }
        });
      }
    });
}