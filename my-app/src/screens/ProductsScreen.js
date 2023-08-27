import React from 'react';
import Header from '../components/Header';
import Products from '../components/Product/Products';
import Footer from '../components/Footer';




const ProductScreen = () => {
    return (
        <>
            <Header />
            <div className = "wrapper">
                <Products />
            </div>
            <Footer />
        </>
    )
    }   
export default ProductScreen;