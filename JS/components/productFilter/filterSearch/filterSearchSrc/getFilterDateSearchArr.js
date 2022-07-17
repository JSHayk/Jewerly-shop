import getProductLoading from "../../../productLoading/getProductLoading.js";
import createProductContent from "../../../productContent/createProductContent.js";
import productFilter from "../../productFilter.js";

export default function getFilterDateSearchArr(checkArr, answerFromDateCheck, wrapperSecondSide) {
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