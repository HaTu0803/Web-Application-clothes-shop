import React from 'react';
import Header from '../components/Header';
import SearchProduct from '../components/SearchProduct/SearchProduct';
import Footer from '../components/Footer';




const SearchProductScreen = () => {
    return (
        <>
            <Header />
            <div className = "wrapper">
                <SearchProduct />
            </div>
            <Footer />
        </>
    )
    }   
export default SearchProductScreen;