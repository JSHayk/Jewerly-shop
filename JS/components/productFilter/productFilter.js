import showProductFilterWindow from "./productFilterWindow/showProductFilterWindow.js";
import hideProductFilterWindow from "./productFilterWindow/hideProductFilterWindow.js";

export default function productFilter() {
    const productFilterWindowEl = document.querySelector('#product-filter_parent');
    const productFilterCallBtn = document.querySelector('#product-filter-call-btn');
    productFilterCallBtn.addEventListener('click', (e) => {
     showProductFilterWindow(productFilterCallBtn, productFilterWindowEl);
    });
    const productFilterWindowCloseEl = document.querySelector('#product-filter-close_parent');
    productFilterWindowCloseEl.addEventListener('click', () => {
      hideProductFilterWindow(productFilterWindowEl, productFilterCallBtn);
    });
}