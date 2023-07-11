import React from 'react';
import './index.css';
import Header from './components/Header';
// import Slide from './components/Slide';
// import Service from './components/Service';
// import CardList from './components/CardList';
// import CardDetail from './components/CardDetail';
// import SideContent from './components/SideContent';
// import Sales from './components/Sales';
import Footer from './components/Footer';

import "./App.css";
import { Routes, Route } from "react-router-dom";
import {ToastContainer } from "react-toastify";

import Home from "./components/carts/Home";
import NotFound from "./components/carts/NotFound";
import Cart from "./components/carts/Cart";

import "react-toastify/dist/ReactToastify.css";



function App() {
  return (

  <div className = "wrapper">

        <ToastContainer />
        <Header />
        <div className="content-container">
          <Routes>
            <Route path="/cart" component={Cart} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
          </Routes>
        </div>
        <Footer />


  </div>

  )
};
export default App;