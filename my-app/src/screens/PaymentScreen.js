import React from 'react';
import Header from '../components/Header';
import Payment from '../components/Payment/Payment';
import Footer from '../components/Footer';




const PaymentScreen = () => {
    return (
        <>
            <Header />
            <div className = "wrapper">
                <Payment />
            </div>
            <Footer />
        </>
    )
    }   
export default PaymentScreen;