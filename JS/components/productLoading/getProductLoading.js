export default function getProductLoading() {
    const productLoadEl = document.createElement('div');
    productLoadEl.setAttribute('id', 'product-load');
    productLoadEl.innerHTML = `
      <img src="/icons/product-load.gif">
    `;
    return productLoadEl;
}