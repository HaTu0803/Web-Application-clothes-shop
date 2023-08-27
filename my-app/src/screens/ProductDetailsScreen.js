import React from 'react';
import Header from '../components/Header';
import ProductDetails from '../components/Product/ProductDetail';
import Footer from '../components/Footer';




const ProductDetailsScreen = () => {
    return (
        <>
            <Header />
            <div className = "wrapper">
                <ProductDetails />
            </div>
            <Footer />
        </>
    )
    }   
export default ProductDetailsScreen;