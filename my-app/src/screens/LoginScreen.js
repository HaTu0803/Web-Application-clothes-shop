import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../components/Login/Login';

const LoginScreen = () => {
    return (
        <>
            <Header />
            <div className = "wrapper">
                <Login />
            </div>
            <Footer />
        </>
    )
    }   
export default LoginScreen;