export default function createProductSubTypeAddWindow(info) {
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