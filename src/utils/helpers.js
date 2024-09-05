export const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
};

export const getProductById = (products, id) => {
    return products.find(product => product.id === id);
};

export const calculateCartTotal = (cartItems) => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
};
