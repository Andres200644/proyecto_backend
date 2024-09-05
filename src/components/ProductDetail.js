const ProductDetail = (product) => {
    return `
        <div class="product-detail">
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <button>Add to Cart</button>
        </div>
    `;
};

export default ProductDetail;
