import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import Footer from '../components/Footer';




const HomeScreen = () => {
    return (
        <>
            <Header />
            <div className = "wrapper">
                <Home />
            </div>
            <Footer />
        </>
    )
    }   
export default HomeScreen;