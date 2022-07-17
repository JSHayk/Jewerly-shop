import { productTypeGenderArr } from "../../../../../database/product-content.js";

export default function createProductChooseAddWindow() {
    const productChooseAddWindowEl = document.createElement('div');
    productChooseAddWindowEl.setAttribute('id', 'product-choose-add-window');
    productChooseAddWindowEl.innerHTML = `
      <div id="product-choose-add-window-title">Add Category</div>
      <div id="product-choose-add-window-close"> 
        <img src="./icons/product-choose-add-close.png" id="product-choose-add-window-close-icon">
      </div>
    `;

    function createProductChooseAddWindowGender() {
      const genderParentEl = document.createElement('div');
      genderParentEl.setAttribute('id', 'product-choose-add-gender_parent');
      productTypeGenderArr.forEach(item => {
        const genderItemEl = document.createElement('div');
        genderItemEl.classList.add('product-choose-add-window-gender-item');
        genderItemEl.innerHTML = `
          <div class="product-choose-add-window-gender-icon_parent">
            <img src=${item.image} class="product-choose-add-window-icon">
          </div>
          <div class="product-choose-add-window-gender-type_parent">${item.type}</div>
        `;
        genderParentEl.appendChild( genderItemEl);
      });

      return genderParentEl;
    }

    function createProductChooseAddWindowCategory() {
      const categoryParent = document.createElement('div');
      categoryParent.setAttribute('id', 'product-choose-add-window-category_parent');
      categoryParent.innerHTML = `
        <input type="text" id="product-choose-add-window-category" placeholder="Category">
      `;

      return categoryParent;
    }

    function createProductChooseAddWindowUpload() {
      const uploadParent = document.createElement('div');
      uploadParent.setAttribute('id', 'product-add-window-upload_parent');
      uploadParent.classList.add('product-choose-add-window-upload-parent');
      uploadParent.innerHTML = `
          <div id="product-choose-add-window-upload-big" class="upload-big">
            <input type="file" id="choose-upload-file" hidden="hidden">
            <img src="./icons/upload-big.png" id="product-choose-add-window-upload-big-icon">
            <p id="product-choose-add-window-upload-big-txt">Upload File</p>
          </div>
      `;

       return uploadParent;
    }

    function createProductAddWindowBtn() {
      const btnParent = document.createElement('div');
      btnParent.setAttribute('id', 'product-choose-add-window-btn_parent');
      btnParent.innerHTML = `
        <button type="button" id="product-choose-add-window-btn">Add</button>
      `;

      return btnParent;
    }

    productChooseAddWindowEl.append(createProductChooseAddWindowGender(), createProductChooseAddWindowCategory(), createProductChooseAddWindowUpload(), createProductAddWindowBtn());

    return productChooseAddWindowEl;
}