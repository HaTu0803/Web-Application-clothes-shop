import React from 'react';
import './index.css';
import HomeScreen from './screens/HomeScreen';
import NewProduct from './components/NewProduct/NewProduct';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import Payment from './components/Payment/Payment';
import { ProductData } from "./Helpers/ProductData";
import Product from './components/Product/Product';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/newproducts" element={<NewProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/product/1" element={<Product />} />
      </Routes>
    </Router>
  )
};
export default App;