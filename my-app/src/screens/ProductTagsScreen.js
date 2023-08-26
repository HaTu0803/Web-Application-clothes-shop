import React from 'react';
import Header from '../components/Header';
import ProductTags from '../components/Tag/ProductTags';
import Footer from '../components/Footer';




const ProductTagsScreen = () => {
    return (
        <>
            <Header />
            <div className = "wrapper">
                <ProductTags />
            </div>
            <Footer />
        </>
    )
    }   
export default ProductTagsScreen;