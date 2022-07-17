export default function createProductItemsFilterCallBtn() {
    const productFilterCallBtnParentEl = document.createElement('div');
    productFilterCallBtnParentEl.setAttribute('id', 'product-filter-call-btn_parent');
    productFilterCallBtnParentEl.innerHTML = `
       <div id="product-filter-call-btn">
          <div id="product-filter-call-btn-icon">
             <img id="product-filter-call-btn-icon" src="./pictures/icons/product-filter-call-btn.png">
          </div>
          <div id="product-filter-call-btn-text_parent">
            <p id="product-filter-call-btn-text-1">F</p>
            <p id="product-filter-call-btn-text-2">i</p>
            <p id="product-filter-call-btn-text-3">l</p>
            <p id="product-filter-call-btn-text-4">t</p>
            <p id="product-filter-call-btn-text-5">e</p>
            <p id="product-filter-call-btn-text-6">r</p>
          </div>
          <div id="product-filter-call-btn-arrow">
              <img src="./pictures/icons/product-filter-call-btn-arrow.png">
          </div>
       </div>
    `;

    return productFilterCallBtnParentEl;
}