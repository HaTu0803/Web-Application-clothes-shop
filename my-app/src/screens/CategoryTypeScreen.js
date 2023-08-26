import React from 'react';
import Header from '../components/Header';
import CategoryType from '../components/Category/CategoryType';
import Footer from '../components/Footer';




const CartScreen = () => {
    return (
        <>
            <Header />
            <div className = "wrapper">
                <CategoryType />
            </div>
            <Footer />
        </>
    )
    }   
export default CartScreen;