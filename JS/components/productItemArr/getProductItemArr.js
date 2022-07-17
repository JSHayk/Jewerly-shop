import { productTypeItemsArr } from "../../../database/product-content.js";

export default function getProductItemArr(checkId = 1) {
  let productArr;
  productTypeItemsArr.forEach(item => {
    if (item.id === checkId) {
      productArr = item.productItemsArr;
    }
  });

  return productArr;
}
