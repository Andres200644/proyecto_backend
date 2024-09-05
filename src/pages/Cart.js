let cart = [];

export const addToCart = (productId, products) => {
    const product = getProductById(products, productId);
    if (!product) return;

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
};

export const removeFromCart = (productId) => {
    const cartItemIndex = cart.findIndex(item => item.id === productId);
    if (cartItemIndex !== -1) {
        cart[cartItemIndex].quantity -= 1;
        if (cart[cartItemIndex].quantity === 0) {
            cart.splice(cartItemIndex, 1);
        }
    }
};

export const getCartItems = () => {
    return cart;
};

export const clearCart = () => {
    cart = [];
};
