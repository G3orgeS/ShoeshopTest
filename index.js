"use strict";
// console.log('hello world')
function createProduct(name, price, quantity) {
    return {
        name,
        price,
        quantity
    };
}
;
function calculateTotalCost(products) {
    const totalCost = products.reduce((total, product) => total + product.price * product.quantity, 0);
    return totalCost;
}
;
function updateQuantity(product, newQuantity) {
    product.quantity = newQuantity;
}
;
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    const productNameInput = document.getElementById('productName');
    const productPriceInput = document.getElementById('productPrice');
    const productQuantityInput = document.getElementById('productQuantity');
    const productList = document.getElementById('productList');
    const products = [];
    function renderProducts() {
        productList.innerHTML = '';
        products.forEach(product => {
            const li = document.createElement('li');
            const totalCost = calculateTotalCost(products);
            li.textContent = `${product.name} - Pris: ${product.price} kr - Kvantitet: ${product.quantity} - Totalsumman: ${totalCost} kr`;
            productList.appendChild(li);
        });
    }
    ;
    (_a = document.getElementById('addProduct')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        const productName = productNameInput.value;
        const productPrice = parseFloat(productPriceInput.value);
        const productQuantity = parseFloat(productQuantityInput.value);
        if (productName && !isNaN(productPrice) && !isNaN(productQuantity)) {
            const existingProductIndex = products.findIndex(product => product.name === productName);
            if (existingProductIndex !== -1) {
                products[existingProductIndex].quantity += productQuantity;
            }
            else {
                const newProduct = createProduct(productName, productPrice, productQuantity);
                products.push(newProduct);
            }
            renderProducts();
            productNameInput.value = '';
            productPriceInput.value = '';
            productQuantityInput.value = '';
        }
    });
});
