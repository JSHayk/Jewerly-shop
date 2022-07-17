import showSomeItemWithFlex from "../../../function-helpers/showSomeItemWithFlex.js";
import hideSomeItem from "../../../function-helpers/hideSomeItem.js";
import addNewItemToProductChoose from "../../addNewItem/addNewItemToProductChoose.js";

export default function showProductChooseAddWindow() {
    const productChooseAddWindowEl = document.querySelector('#product-choose-add-window');
    showSomeItemWithFlex(productChooseAddWindowEl);
    const windowClose = document.querySelector('#product-choose-add-window-close');
    windowClose.addEventListener('click', () => {
      hideSomeItem(productChooseAddWindowEl);
    });

    const uploadEl = document.querySelector('#product-choose-add-window-upload-big');
    const uploadFile = document.querySelector('#choose-upload-file');
    const uploadElContSave = uploadEl.innerHTML;
    if (uploadFile) {
      uploadEl.addEventListener('click', function () {
        uploadFile.click();
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
            uploadEl.innerHTML = "";
            uploadEl.appendChild(showImg);
          });
          reader.readAsDataURL(this.files[0]);
        }
      });
      addNewItemToProductChoose(uploadEl, uploadElContSave);
    }
}