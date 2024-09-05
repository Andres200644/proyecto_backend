import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import ProductList from '../components/ProductList.js';

const Home = (products) => {
    return `
        ${Header()}
        <main>
            ${ProductList(products)}
        </main>
        ${Footer()}
    `;
};

export default Home;
