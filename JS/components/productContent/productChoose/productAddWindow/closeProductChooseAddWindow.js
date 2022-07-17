import hideSomeItem from "../../../function-helpers/hideSomeItem.js";
import showSomeItem from "../../../function-helpers/showSomeItem.js";

export default function closeProductChooseAddWindow(productAddWindowEl) {
    productAddWindowEl.classList.remove('flex-show');
    hideSomeItem(productAddWindowEl);
    showSomeItem(document.querySelector('#wrapper-first-side'));
    showSomeItem(document.querySelector('#wrapper-second-side'));
}