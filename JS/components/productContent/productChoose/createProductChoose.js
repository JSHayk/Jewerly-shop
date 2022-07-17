import createProductChooseType from "./createProductChooseType.js";

export default function createProductChoose(bool = true) {
    const productChooseParentEl = document.createElement('div');
    productChooseParentEl.setAttribute('class', 'product-choose_parent');
    productChooseParentEl.appendChild(createProductChooseType(bool));
    return productChooseParentEl;
}
  