export default function createProductItems(productArr) {
    const productItemsParentEl = document.createElement('div');
    productItemsParentEl.setAttribute('id', 'product-items_parent');
    
    productArr.forEach(item => {
      const productItemEl = document.createElement('div');
      productItemEl.classList.add('product-item');
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