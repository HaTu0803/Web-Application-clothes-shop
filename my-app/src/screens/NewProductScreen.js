import React from 'react';
import Header from '../components/Header';
import NewProduct from '../components/NewProduct';
import Footer from '../components/Footer';




const NewProductScreen = () => {
    return (
        <>
            <Header />
            <div className = "wrapper">
                <NewProduct />
            </div>
            <Footer />
        </>
    )
    }   
export default NewProductScreen;