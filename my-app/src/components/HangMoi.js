import React from 'react';
import ReactDOM from 'react-dom/client';
import "../css/HangMoi.css";
import Header from './Header';
import CardList from './CardList';
import { ProductData } from "../Helpers/ProductData";
import Footer from './Footer';
import Card from './Card';




function HangMoi() {
  return (

  <div className = "wrapper">
    <Header />
    <CardList></CardList>
    <Footer />
  </div>

  )
};

export default HangMoi;

