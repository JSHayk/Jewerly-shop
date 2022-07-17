import createProductChoose from "./productChoose/createProductChoose.js";
import createProductChooseSubType from "./productSubChoose/createProductChooseSubType.js";

export default function createProductAddWindow() { 
    const productAddWindowEl = document.createElement('div');
    productAddWindowEl.setAttribute('id', 'product-add-window')
    productAddWindowEl.innerHTML = `
      <div id="product-add-window-title">Add Product Choose</div>
      <div id="product-add-window-close">
        <img src="./icons/product-choose-add-close.png" id="product-add-window-close-icon">
      </div>
    `;

    productAddWindowEl.append(createProductChoose(false),
    createProductChooseSubType(1, false, true), createProductAddWindowFileds(), createProductAddWindowFiledBtn());

    function createProductAddWindowFileds() {
      const productChooseAddWindowFiledsParent = document.createElement('div');
      productChooseAddWindowFiledsParent.setAttribute('id', 'product-add-window-fileds_parent');

      productChooseAddWindowFiledsParent.append(createProductAddWindowFiledUpload(), createProductAddWindowFiledsInputs());

      function createProductAddWindowFiledsInputs() {
        const productChooseAddWindowInputsEl = document.createElement('div');
        productChooseAddWindowInputsEl.setAttribute('id', 'product-add-window-inputs_parent');
        productChooseAddWindowInputsEl.innerHTML = `
          <div id="product-add-window-inputs_content">
            <div id="product-add-window-inputs-first_parent">
              <div class="product-add-window-input-info" id="product-add-window-input-articul-info">Articul</div>
              <input type="text" class="product-add-window-input"  id="product-add-window-input-articul">
            </div>
            <div id="product-add-window-inputs-second_parent">
              <div class="product-add-window-input-info" id="product-add-window-input-price-info">Price</div>
              <input type="text" class="product-add-window-input" id="product-add-window-input-price">
            </div>
          </div>
        `;

        return productChooseAddWindowInputsEl;
      }
      function createProductAddWindowFiledUpload() {
        const uploadParent = document.createElement('div');
        uploadParent.setAttribute('id', 'product-add-window-upload_parent');
        uploadParent.classList.add('upload-parent')
        uploadParent.innerHTML = `
          <div id="product-add-window-upload-first-side" class="upload-first-side">
            <div id="product-add-window-upload-big" class="upload-big">
              <input type="file" id="upload-file" hidden="hidden">
              <img src="./icons/upload-big.png" id="product-add-window-upload-big-icon">
              <p id="product-add-window-upload-big-txt">Upload File</p>
            </div>
          </div>
          <div id="product-add-window-upload-second-side" class="upload-second-side">
            <div class="product-add-window-upload-small-item active-small-item">
              <div class="upload-small-remove_parent">
                <img src="./icons/upload-small-remove.png" class="upload-small-remove">
              </div>
              <img src="./icons/upload-small-active.png" class="product-choose-add-window-upload-small-item-icon active-icon">
            </div>
            <div class="product-add-window-upload-small-item">
              <img src="./icons/upload-small-1.png" class="product-add-window-upload-small-item-icon">
            </div>
            <div class="product-add-window-upload-small-item">
              <img src="./icons/upload-small-2.png" class="product-add-window-upload-small-item-icon">
            </div>
            <div class="product-add-window-upload-small-item">
              <img src="./icons/upload-small-3.png" class="product-add-window-upload-small-item-icon">
            </div>
          </div>
        `;
  
        return uploadParent;
      }

      return productChooseAddWindowFiledsParent;
    }

    function createProductAddWindowFiledBtn() {
      const addBtnParent = document.createElement('div');
      addBtnParent.setAttribute('id', 'product-add-window-btn_parent')
      addBtnParent.innerHTML = `
        <button id="product-add-window-btn">Add</button>
      `;

      return addBtnParent;
    }

    return productAddWindowEl;
}