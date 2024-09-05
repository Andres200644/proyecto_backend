const Cart = (cartItems) => {
    return `
        <div class="cart">
            ${cartItems.map(item => `
                <div class="cart-item">
                    <h2>${item.name}</h2>
                    <p>Quantity: ${item.quantity}</p>
                    <button>Remove</button>
                </div>
            `).join('')}
        </div>
    `;
};

export default Cart;
