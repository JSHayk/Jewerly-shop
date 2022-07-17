export default function createProductItemsFilterContent() {
    const productFilterParentEl = document.createElement('div');
    productFilterParentEl.setAttribute('id', 'product-filter_parent');
    productFilterParentEl.innerHTML = `
      <div id="product-filter-close_parent">
          <img id="product-filter-close" src="./pictures/icons/product-filter-close.png">
      </div>
      <div id="product-filter-padding-content">
          <div id="product-filter-date_parent">
              <div id="product-filter-start-date_parent">
                <input type='date' id="product-filter-start-date-input" placeholder="">
              </div>
              <div id="product-filter-end-date_parent">
                <input type='date' id="product-filter-end-date-input" placeholder="End Date">
              </div>
          </div>
          <div id="product-filter-price_parent" class="gener-product-filter-fill_parent">
              <div id="product-filter-price-info" class="gener-product-filter-fill-info">Price</div>
              <div id="product-filter-price-line_parent" class="product-filter-fill-line_parent">
                <div id="product-filter-price-line-bg" class="product-filter-fill-line-bg"></div>
                <div id="product-filter-price-line" class="gener-product-filter-fill-line">
                    <div id="product-filter-price-line-item" class="gener-product-filter-fill-line-item"></div>
                    <div id="product-filter-price-line-left-cub" class="filter-line-cub filter-left-cub"></div>
                    <div id="product-filter-price-line-right-cub" class="filter-line-cub filter-right-cub"></div>
                </div>
              </div>
              <div id="product-filter-price-inputs_parent" class="gener-product-filter-fill-inputs_parent">
                  <div id="product-filter-price-start-input_parent">
                      <input type="text" placeholder="Start" id="product-filter-price-start-input">
                  </div>
                  <div class="product-filter-inputs-middle_parent">
                      <img src="./pictures/icons/product-filter-inputs-middle.png">
                  </div>
                  <div id="product-filter-price-end-input_parent">
                      <input type="text" placeholder="End" id="product-filter-price-end-input">
                  </div>
              </div>
          </div>
          <div id="product-filter-production-price_parent" class="gener-product-filter-fill_parent">
              <div id="product-filter-production-price-info" class="gener-product-filter-fill-info">Production Price</div>
              <div id="product-filter-production-price-line_parent" class="product-filter-fill-line_parent">
                <div id="product-filter-price-line-bg" class="product-filter-fill-line-bg"></div>
                <div id="product-filter-price-line" class="gener-product-filter-fill-line">
                    <div id="product-filter-production-price-line-item" class="gener-product-filter-fill-line-item"></div>
                    <div id="product-filter-produciton-price-line-left-cub" class="filter-line-cub filter-left-cub"></div>
                    <div id="product-filter-production-price-line-right-cub" class="filter-line-cub filter-right-cub"></div>
                </div>
              </div>
              <div id="product-filter-production-price-input_parent" class="gener-product-filter-fill-inputs_parent">
                  <div id="product-filter-price-start-input_parent">
                      <input type="text" placeholder="Start" id="product-filter-price-start-input">
                  </div>
                  <div class="product-filter-inputs-middle_parent">
                      <img src="./pictures/icons/product-filter-inputs-middle.png">
                  </div>
                  <div id="product-filter-price-end-input_parent">
                      <input type="text" placeholder="End" id="product-filter-price-end-input">
                  </div>
              </div>
        </div>
        <div id="product-filter-save_parent">
            <button type="button" id="product-filter-btn">Save</button>
        </div>
      </div>
    `;

    return productFilterParentEl;
}