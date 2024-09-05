const ProductList = (products) => {
    return `
        <div class="product-list">
            ${products.map(product => `
                <div class="product">
                    <img src="${product.image}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                </div>
            `).join('')}
        </div>
    `;
};

export default ProductList;
