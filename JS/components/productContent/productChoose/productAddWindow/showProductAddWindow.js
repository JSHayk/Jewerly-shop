import hideSomeItem from "../../../function-helpers/hideSomeItem.js";
import showSomeItemWithFlex from "../../../function-helpers/showSomeItemWithFlex.js";
import closeProductChooseAddWindow from "./closeProductChooseAddWindow.js";
import addNewItemToProducts from "../../addNewItem/addNewItemToProducts.js";

export default function showProductAddWindow(activeId = 1) {
    const wrapperFirstSideEl = document.querySelector('#wrapper-first-side');
    const wrapperSecondSideEl = document.querySelector('#wrapper-second-side');
    const productAddWindowEl = document.querySelector('#product-add-window');
    const closeWindowEl = document.querySelector('#product-add-window-close');
    closeWindowEl.addEventListener('click', () => {
      closeProductChooseAddWindow(productAddWindowEl);
    });

    if (!productAddWindowEl.classList.contains('flex-show')) {
      hideSomeItem(wrapperFirstSideEl);
      hideSomeItem(wrapperSecondSideEl);
      showSomeItemWithFlex(productAddWindowEl);
      const uploadChooseEl = document.querySelector('#product-add-window-upload-big');
      const contOfUpload = uploadChooseEl.innerHTML;
      const uploadFile = document.querySelector('#upload-file');
      uploadChooseEl.addEventListener('click', function () {
        if (!uploadFile.value.trim()) {
          uploadFile.click();
        }
      });

      uploadFile.addEventListener('change', function () {
        if (uploadFile.value.trim()) {
          const reader = new FileReader();
          let resultShow;
          reader.addEventListener('load', function () {
            resultShow = reader.result;
            const showImg = document.createElement('img');
            showImg.setAttribute('id', 'upload-show-img');
            showImg.src = resultShow;
            uploadChooseEl.innerHTML = "";
            uploadChooseEl.appendChild(showImg);
          });
          reader.readAsDataURL(this.files[0]);
        }
      });
      addNewItemToProducts(activeId, contOfUpload);
    }
}