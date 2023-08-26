import React from 'react';
import Header from '../components/Header';
import Cart from '../components/Cart/Cart';
import Footer from '../components/Footer';




const CartScreen = () => {
    return (
        <>
            <Header />
            <div className = "wrapper">
                <Cart />
            </div>
            <Footer />
        </>
    )
    }   
export default CartScreen;