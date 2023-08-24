// console.log('hej')

interface Product {
    name: string;
    price: number;
    quantity: number;
}

function createProduct(name: string, price: number, quantity: number): Product {
    return {
        name,
        price,
        quantity
    }
}

function calculateTotalCost(products: Product[]): number {
    const totalCost = products.reduce((total, product) => total + product.price * product.quantity, 0)
    return totalCost
}

function updateQuantity(product: Product, newQuantity: number): void {
    product.quantity = newQuantity
}
document.addEventListener('DOMContentLoaded', () => {
    const productNameInput = document.getElementById('productName') as HTMLInputElement;
    const productPriceInput = document.getElementById('productPrice') as HTMLInputElement;
    const productQuantityInput = document.getElementById('productQuantity') as HTMLInputElement;
    const productList = document.getElementById('productList')!;
    const totalCostElement = document.getElementById('totalCost');

    const products: Product[] = [];

    function renderProducts() {
        productList.innerHTML = '';
        products.forEach(product => {
            const li = document.createElement('li');
            li.textContent = `${product.name} - Pris: ${product.price} kr - Kvantitet: ${product.quantity}`;
            productList.appendChild(li);
        });
    }

    document.getElementById('addProduct')?.addEventListener('click', () => {
        const productName = productNameInput.value;
        const productPrice = parseFloat(productPriceInput.value);
        const productQuantity = parseFloat(productQuantityInput.value);

        if (productName && !isNaN(productPrice) && !isNaN(productQuantity)) {
            const newProduct = createProduct(productName, productPrice, productQuantity);
            products.push(newProduct);

            renderProducts();

            productNameInput.value = '';
            productPriceInput.value = '';
            productQuantityInput.value = '';
        }

    });
});
