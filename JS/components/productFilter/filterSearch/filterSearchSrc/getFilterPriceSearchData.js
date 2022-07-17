import getProductLoading from "../../../productLoading/getProductLoading.js";
import createProductContent from "../../../productContent/createProductContent.js";
import productFilter from "../../productFilter.js";

export default function getFilterPriceSearchData(checkArr, checkObj, wrapperSecondSide) {
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