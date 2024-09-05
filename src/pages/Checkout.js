import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const Checkout = () => {
    return `
        ${Header()}
        <main>
            <h2>Checkout</h2>
            <p>Checkout process goes here.</p>
        </main>
        ${Footer()}
    `;
};

export default Checkout;
