import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Register from '../components/Register/Regisgter';

const RegisterScreen = () => {
    return (
        <>
            <Header />
            <div className = "wrapper">
                <Register />
            </div>
            <Footer />
        </>
    )
    }   
export default RegisterScreen;