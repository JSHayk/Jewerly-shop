import hideSomeItem from "../../function-helpers/hideSomeItem.js";
import showSomeItemWithFlex from "../../function-helpers/showSomeItemWithFlex.js";

export default function hideProductFilterWindow(productFilterWindowEl, productFilterCallBtn) {
    productFilterWindowEl.classList.add('fade-out');
    productFilterWindowEl.classList.remove('fade-in');
    setTimeout(() => {
      hideSomeItem(productFilterWindowEl);
      productFilterCallBtn.classList.add('call-btn-fade-out');
      showSomeItemWithFlex(productFilterCallBtn);
    }, 1000);
}