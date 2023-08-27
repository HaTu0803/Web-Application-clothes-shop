import React from 'react';
import Header from '../components/Header';
import ProductTagType from '../components/Tag/ProductTagType';
import Footer from '../components/Footer';




const ProductTagTypeScreen = () => {
    return (
        <>
            <Header />
            <div className = "wrapper">
                <ProductTagType />
            </div>
            <Footer />
        </>
    )
    }   
export default ProductTagTypeScreen;