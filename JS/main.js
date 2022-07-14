import {productTypeItemsArr, productTypeGenderArr} from "./product-content.js";
document.addEventListener('DOMContentLoaded', function () {
 function createShop() {
    const wrapper = document.querySelector('#wrapper');
    wrapper.appendChild(createProductAddWindow())
    const wrapperFirstSide = document.createElement('div');
    wrapperFirstSide.setAttribute('id', 'wrapper-first-side');
    const wrapperSecondSide = document.createElement('div');
    wrapperSecondSide.setAttribute('id', 'wrapper-second-side');
    wrapper.append(wrapperFirstSide, wrapperSecondSide); // Finish append is here.

    // Calling methods.
    createProductSearch(wrapperFirstSide);
    createProductContent();
    productSearch(wrapperSecondSide);
    productFilter(wrapperSecondSide);
    // addProduct(wrapperSecondSide);
 }

 function showProductSubTypeWindow(assignObj) {
   const productSubTypeAddWindowEl = document.querySelector('#product-subtype-add-window_parent');
   showSomeItem(productSubTypeAddWindowEl);
 }

 function addProductSubType(checkId, wrapperSecondSide) {
  const productSubTypeAddWindowEl = document.querySelector('#product-subtype-add-window_parent');
  const productSubTypeAddInputEl = document.querySelector('#product-subtype-add-window-input');
  let inputVal = productSubTypeAddInputEl.value.trim();
  if (inputVal && inputVal.length >= 4) {
    productTypeItemsArr.forEach(item => {
      if (item.id === checkId) {
        item.subTypes.push(inputVal);
      }
    });
    productSubTypeAddInputEl.value = "";
    hideSomeItem(productSubTypeAddWindowEl);
    const productSubTypeFirstSideEl = document.querySelectorAll('#product-subtype-first_side');
    if (productSubTypeFirstSideEl.length > 0) {
      productSubTypeFirstSideEl.forEach(item => {
        item.innerHTML = "";
        createProductSubTypeInfoes(checkId, item);
      })
    } else {
      productSubTypeFirstSideEl[0].innerHTML = "";
      createProductSubTypeInfoes(checkId, productSubTypeFirstSideEl[0]);
    }
  }
 }

 function createProductSubTypeAddWindow(info) {
   const productSubTypeAddWindow = document.createElement('div');
   productSubTypeAddWindow.setAttribute('id', 'product-subtype-add-window_parent');
   productSubTypeAddWindow.innerHTML = `
      <div id="product-subtype-add-window_content">
        <div id="product-subtype-add-window-close_parent">
          <img src="./icons/product-choose-add-close.png" id="product-subtype-add-window-close">
        </div>
        <div id="product-subtype-add-window-info">${info}: Add SubType</div>
        <div id="product-subtype-add-window-input_parent">
          <input type="text" placeholder="SubType(min 4 simvols)" id="product-subtype-add-window-input"> 
        </div>
        <div id="product-subtype-add-window-btn_parent">
          <button id="product-subtype-add-window-btn">Add</button>
        </div>
      </div>
   `;

   return productSubTypeAddWindow;
 }

 function createProductSearch(wrapperFirstSide) {
  const searchParentEl = document.createElement('div');
  searchParentEl.setAttribute('id', 'product-search_parent');
  searchParentEl.innerHTML = `
    <div id="product-search_content">
        <div id="product-search-input_parent">
            <input type="text" id="product-search-input" placeholder="Search with model or price">
        </div>
        <div id="product-search-icon_parent">
            <img src="./pictures/icons/search-icon.png" id="product-search-icon">
        </div>
        <div id="product-search-come-back_parent">
           <img src="./pictures/icons/search-come-back.png" id="product-search-come-back">
        </div>
    </div>
   `;

  wrapperFirstSide.appendChild(searchParentEl);
 }

 function createProductChoose(bool = true) {
  const productChooseParentEl = document.createElement('div');
  productChooseParentEl.setAttribute('class', 'product-choose_parent');
  productChooseParentEl.appendChild(createProductChooseType(bool, productChooseParentEl));
  return productChooseParentEl;
 }

 function createProductChooseType(addBtn = true) {  
  const productChooseTypeParentEl = document.createElement('div');
  productChooseTypeParentEl.setAttribute('id', 'product-choose-type_parent');

  // Appending choose human gender beacuse it needs at once.
  const productChooseTypeGenderParentEl = document.createElement('div');
  productChooseTypeGenderParentEl.setAttribute('id', 'product-choose-type-gender_parent')
  productTypeGenderArr.forEach(item => {
    const productChooseTypeGenderItemEl = document.createElement('div');
    productChooseTypeGenderItemEl.classList.add('product-choose-type-gender-item');
    productChooseTypeGenderItemEl.innerHTML = `
      <img class="product-gender-item" src=${item.image}>
    `;
    productChooseTypeGenderParentEl.appendChild(productChooseTypeGenderItemEl);
  });
  productChooseTypeParentEl.appendChild(productChooseTypeGenderParentEl);

  console.log(productTypeItemsArr, 'arr')
  productTypeItemsArr.forEach(item => {
    const productChooseTypeItemEl = document.createElement('div');
    productChooseTypeItemEl.classList.add('product-choose-type-item');
    productChooseTypeItemEl.addEventListener('click', () => {
      showProductAddWindow();
    });
    productChooseTypeItemEl.innerHTML = `
      <div class="product-choose-type-item-image_parent">
        <img src=${item.image} class="product-choose-type-item-image">
      </div>
      <div class="product-choose-type-item-info_parent">
        <p class="product-choose-type-item-info">${item.info}</p>
      </div>
    `;
    productChooseTypeParentEl.appendChild(productChooseTypeItemEl);
  });

  if (addBtn) {
    const productChooseTypeAddEl = document.createElement('div');
    productChooseTypeAddEl.setAttribute('id', 'product-choose-type-add_parent');
    productChooseTypeAddEl.addEventListener('click', () => {
      showProductChooseAddWindow();
    });
    productChooseTypeAddEl.innerHTML = `
      <img src="./pictures/icons/product-type-add.png" id="product-choose-type-add">
    `;
    productChooseTypeParentEl.appendChild(productChooseTypeAddEl);
  }

  return productChooseTypeParentEl;
 }

 function createProductChooseSubType(activeItemId = 1, secondSideBool = true, addLineStyle = false) {
  const productSubTypeParentEl = document.createElement('div');
  productSubTypeParentEl.setAttribute('id', 'product-subtype_parent');
  const productSubTypeFirstSideEl = document.createElement('div');
  productSubTypeFirstSideEl.setAttribute('id', 'product-subtype-first_side');
  createProductSubTypeInfoes(activeItemId, productSubTypeFirstSideEl, addLineStyle);
  productSubTypeParentEl.appendChild(productSubTypeFirstSideEl);

  if (secondSideBool) {
    const productSubTypeSecondSideEl = document.createElement('div');
    productSubTypeSecondSideEl.setAttribute('id', 'product-subtype-second_side');
    const productSubTypeAddEl = document.createElement('div');
    productSubTypeAddEl.setAttribute('id', 'product-subtype-add_parent');
    productSubTypeAddEl.innerHTML = `
      <img src="./pictures/icons/product-type-add.png" id="product-subtype-add">
    `;
    productSubTypeAddEl.addEventListener('click', () => {
      showProductSubTypeWindow();
    });
    productSubTypeSecondSideEl.appendChild(productSubTypeAddEl);
    productSubTypeParentEl.appendChild(productSubTypeSecondSideEl);
  }

  return productSubTypeParentEl;
 }

 function createProductSubTypeInfoes(checkId, appendParent, addLineStyle) {
   productTypeItemsArr.forEach(item => {
    if (item.id === checkId) {
      const productSubTypeItemsParentEl = document.createElement('div');
      productSubTypeItemsParentEl.setAttribute('id', 'product-subtype-items_parent');
      item.subTypes.forEach(secondItem => {
        const productSubTypeItemEl = document.createElement('div');
        productSubTypeItemEl.classList.add('product-subtype-item');
        productSubTypeItemEl.textContent = secondItem;
        productSubTypeItemsParentEl.appendChild(productSubTypeItemEl);
      });
      appendParent.appendChild(productSubTypeItemsParentEl);
      } 
    });

    const productSubTypeLineParent = document.createElement('div');
    productSubTypeLineParent.setAttribute('id', 'product-subtype-line_parent');
    if (addLineStyle) {
      productSubTypeLineParent.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 25)';
    }
    productSubTypeLineParent.innerHTML = `
      <img src="./pictures/product-choose-images/product-subtype-line.png" id="product-subtype-line">
    `;
    appendParent.appendChild(productSubTypeLineParent);
 }

 function createProductContent(productArr = getProductItemArr(1), productSubTypeObj = {id: 1, info: 'Ring'}) {
    const wrapperSecondSide = document.querySelector('#wrapper-second-side');
    wrapperSecondSide.innerHTML = "";
    const productParentEl = document.createElement('div');
    productParentEl.setAttribute('id', 'products-parent');
    productParentEl.append(createProductChoose(), createProductChooseSubType(productSubTypeObj.id), createProductItems(productArr), createProductItemsFilterContent(), createProductItemsFilterCallBtn(), createProductSubTypeAddWindow(productSubTypeObj.info), createProductChooseAddWindow());
    wrapperSecondSide.appendChild(productParentEl);
    productFilterSearch(wrapperSecondSide, productArr);

    if (productArr.length === 0) {
        const message = document.createElement('div');
        message.textContent = "We don't have such of thing";
        message.setAttribute('id', 'product-message');
        wrapperSecondSide.appendChild(message);
        setTimeout(() => {
          document.location.reload(true);
        }, 1000);
    }

    const productSubTypeAddWindowClose = document.querySelector('#product-subtype-add-window-close_parent');
    const productSubTypeAddWindow =  document.querySelector('#product-subtype-add-window_parent');
    const productSubTypeAddWindowBtn = document.querySelector('#product-subtype-add-window-btn');
    productSubTypeAddWindowClose.addEventListener('click', () => {
      hideSomeItem(productSubTypeAddWindow);
    });

    productSubTypeAddWindowBtn.addEventListener('click', () => {
      addProductSubType(productSubTypeObj.id, wrapperSecondSide);
    });
 }

 function getProductLoading() {
  const productLoadEl = document.createElement('div');
  productLoadEl.setAttribute('id', 'product-load');
  productLoadEl.innerHTML = `
    <img src="/icons/product-load.gif">
  `;

  return productLoadEl;
 }

 function productFilterSearch(wrapperSecondSide, checkArr = getProductItemArr(1)) {
  let searchObj = {};
  let countOfFilter = 0;
  
   function checkFilterPriceFileds() {
     const filterPriceStartEl = document.querySelector('#product-filter-price-start-input');
     const filterPriceEndEl = document.querySelector('#product-filter-price-end-input');

    if (filterPriceStartEl.value.trim() && filterPriceEndEl.value.trim()) {
      if ((!isNaN(filterPriceStartEl.value.trim())) && (!isNaN(filterPriceEndEl.value.trim()))) {
          return {
            startPrice: filterPriceStartEl.value.trim(),
            endPrice: filterPriceEndEl.value.trim()
          }
      }
    }
   }

   function checkFilterDateFileds() {
     const filterDateStartEl = document.querySelector('#product-filter-start-date-input');
     const filterDateEndEl = document.querySelector('#product-filter-end-date-input');

     if (filterDateStartEl.value.trim() && filterDateEndEl.value.trim()) {
        return {
          firstDate: filterDateStartEl.value,
          secondDate: filterDateEndEl.value
        }
     }
   }

  const productFilterSaveBtn = document.querySelector('#product-filter-btn');
  productFilterSaveBtn.addEventListener('click', () => {
    const answerFromPriceCheck = checkFilterPriceFileds();
    const answerFromDateCheck = checkFilterDateFileds();

    if (answerFromPriceCheck) {
       searchObj.priceSearchArr = getFilterPriceSearchData(checkArr, answerFromPriceCheck, wrapperSecondSide);
       countOfFilter+= 1;
    }

    if (answerFromDateCheck) {
       searchObj.dateSearchArr = getFilterDateSearchArr(checkArr, answerFromDateCheck, wrapperSecondSide);
    }
  });
  
 }

 function getFilterDateSearchArr(checkArr, answerFromDateCheck, wrapperSecondSide) {
  const firstDate = new Date(answerFromDateCheck.firstDate);
  const secondDate = new Date(answerFromDateCheck.secondDate);
  const dateSearchArr = [];

  checkArr.forEach(item => {
    const itemDate = new Date(item.date);
    if (itemDate > firstDate && itemDate < secondDate) {
       dateSearchArr.push(item);
    }
  });

  wrapperSecondSide.innerHTML = "";
  wrapperSecondSide.appendChild(getProductLoading());
  setTimeout(() => {
    wrapperSecondSide.innerHTML = "";
    createProductContent(dateSearchArr);
    productFilter();
  }, 600);

  return dateSearchArr;
 }

 function getFilterPriceSearchData(checkArr, checkObj, wrapperSecondSide) {
  const priceSearchArr = [];
  checkArr.forEach(item => {
    if (+item.price >= checkObj.startPrice && +item.price < checkObj.endPrice) {
      priceSearchArr.push(item);
    }
  });

  wrapperSecondSide.innerHTML = "";
  wrapperSecondSide.appendChild(getProductLoading());
  setTimeout(() => {
    wrapperSecondSide.innerHTML = "";
    createProductContent(priceSearchArr);
    productFilter();
  }, 600);

  return priceSearchArr;
 }

 function createProductItemsFilterContent() {
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

 function createProductItemsFilterCallBtn() {
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

 function createProductItems(productArr) {
  const productItemsParentEl = document.createElement('div');
  productItemsParentEl.setAttribute('id', 'product-items_parent');
  
  productArr.forEach(item => {
    const productItemEl = document.createElement('div');
    productItemEl.classList.add('product-item');
    // productItemEl.addEventListener('click', () => {
    //   editProductItem(item.model);
    // });
    productItemEl.innerHTML = `
      <div class="product-item-img_parent">
        <img style="width:" src=${item.image} class="product-item-img">
      </div>
      <div class="product-item-info_parent">
        <div class="product-item-info-price">${item.model}</div>
        <div class="product-item-info-price">${item.price}${item.valuet}</div>
      </div>
    `;
    productItemsParentEl.appendChild(productItemEl);
  });

    return productItemsParentEl;
 }

 function productSearch(wrapperSecondSide) {
  let productSearchArr = [];
  const productSearchInputEl = document.querySelector('#product-search-input');
  const productSearchIconEl = document.querySelector('#product-search-icon_parent');
  const productSearchComeBackEl = document.querySelector('#product-search-come-back');
  productSearchIconEl.addEventListener('click', () => {
  const searchVal = productSearchInputEl.value.toLowerCase();
  let resultArr;
  if (searchVal.trim()) {
    productSearchArr = [];
    getProductItemArr(1).forEach(item => {
      if (item.model.toLowerCase().includes(searchVal) || item.price.toLowerCase().includes(searchVal)) {
        productSearchArr.push(item);
      }
    });
    if (productSearchArr.length === 0) {;
       resultArr = getProductItemArr(1);
    } else {
      resultArr = productSearchArr;
    }
    } else {
      resultArr = getProductItemArr(1);
    }
    wrapperSecondSide.innerHTML = "";
    wrapperSecondSide.appendChild(getProductLoading());
    setTimeout(() => {
      wrapperSecondSide.innerHTML = "";
      createProductContent(resultArr)
      productFilter();
    }, 600);
    productSearchInputEl.value = "";
  });
  productSearchComeBackEl.addEventListener('click', () => {
    wrapperSecondSide.innerHTML = "";
    wrapperSecondSide.appendChild(getProductLoading());
    setTimeout(() => {
      wrapperSecondSide.innerHTML = "";
      createProductContent();
      productFilter();
    }, 600);
    productSearchInputEl.value = "";
  });
 }

  function productFilter() {
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

  function hideProductFilterWindow(productFilterWindowEl, productFilterCallBtn) {
    productFilterWindowEl.classList.add('fade-out');
    productFilterWindowEl.classList.remove('fade-in');
    setTimeout(() => {
      hideSomeItem(productFilterWindowEl);
      productFilterCallBtn.classList.add('call-btn-fade-out');
      showSomeItemWithFlex(productFilterCallBtn);
    }, 1000);
  }

  function showProductFilterWindow(filterBtn, productFilterWindowEl) {
    productFilterWindowEl.classList.add('fade-in');
    productFilterWindowEl.classList.remove('fade-out');
    showSomeItem(productFilterWindowEl);
    hideSomeItem(filterBtn);
  }

  function showSomeItem(showItem) {
    showItem.classList.add('show');
    showItem.classList.remove('hide');
  }

  function hideSomeItem(hideSomeItem) {
    hideSomeItem.classList.add('hide');
    hideSomeItem.classList.remove('show');
  }

  function showSomeItemWithFlex(item) {
    item.classList.add('flex-show');
    item.classList.remove('hide');
  }

  function getProductItemArr(checkId = 1) {
    let productArr;
    productTypeItemsArr.forEach(item => {
      if (item.id === checkId) {
        productArr = item.productItemsArr;
      }
    });

    return productArr;
  }

  function createProductAddWindow() { 
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

  function showProductAddWindow(activeId = 1) {
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

  function addNewItemToProducts(activeId, contOfUpload) {
    const productAddWindowEl = document.querySelector('#product-add-window');
    const articulInputEl = document.querySelector('#product-add-window-input-articul');
    const priceInputEl = document.querySelector('#product-add-window-input-price');
    
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
            articulInputEl.value = "";
            priceInputEl.value = "";
            uploadParentEl.innerHTML = contOfUpload;
          }
        })
      }
    });
  }

  function closeProductChooseAddWindow(productAddWindowEl) {
    productAddWindowEl.classList.remove('flex-show');
    hideSomeItem(productAddWindowEl);
    showSomeItem(document.querySelector('#wrapper-first-side'));
    showSomeItem(document.querySelector('#wrapper-second-side'));
  }

  function createProductChooseAddWindow() {
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

  function showProductChooseAddWindow() {
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

  function addNewItemToProductChoose(uploadEl, uploadElContSave) {
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

createShop();
});
