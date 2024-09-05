import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import ProductList from '../components/ProductList.js';

const Shop = (products) => {
    return `
        ${Header()}
        <main>
            ${ProductList(products)}
        </main>
        ${Footer()}
    `;
};

export default Shop;
