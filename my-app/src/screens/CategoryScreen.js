import React from 'react';
import Header from '../components/Header';
import Category from '../components/Category/Category';
import Footer from '../components/Footer';




const CategoryScreen = () => {
    return (
        <>
            <Header />
            <div className = "wrapper">
                <Category />
            </div>
            <Footer />
        </>
    )
    }   
export default CategoryScreen;