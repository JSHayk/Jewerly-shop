import showSomeItem from "../../function-helpers/showSomeItem.js";
import hideSomeItem from "../../function-helpers/hideSomeItem.js";

export default function showProductFilterWindow(filterBtn, productFilterWindowEl) {
    productFilterWindowEl.classList.add('fade-in');
    productFilterWindowEl.classList.remove('fade-out');
    showSomeItem(productFilterWindowEl);
    hideSomeItem(filterBtn);
}