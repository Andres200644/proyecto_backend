import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import ProductDetail from '../components/ProductDetail.js';

const Product = (product) => {
    return `
        ${Header()}
        <main>
            ${ProductDetail(product)}
        </main>
        ${Footer()}
    `;
};

export default Product;
