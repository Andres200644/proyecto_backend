document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('header').innerHTML = '<h1>Runwaystyle</h1>';
    document.getElementById('footer').innerHTML = '<p>© 2024 Runwaystyle</p>';
    loadProducts();
});

function loadProducts() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="product">
            <img src="src/assets/images/product1.jpg" alt="Product 1">
            <h2>Product 1</h2>
            <p>Descripción del producto 1</p>
        </div>
        <div class="product">
            <img src="src/assets/images/product2.jpg" alt="Product 2">
            <h2>Product 2</h2>
            <p>Descripción del producto 2</p>
        </div>
    `;
}
