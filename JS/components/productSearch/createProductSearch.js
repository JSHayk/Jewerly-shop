export default function createProductSearch(wrapperFirstSide) {
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