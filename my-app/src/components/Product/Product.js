import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Card from '../Card';
import { ProductData } from "../../Helpers/ProductData";
import Footer from '../Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import "../../css/NewProduct.css";
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <>
            <Header />
            <Footer />
        </>
    );
};

export default Product;
