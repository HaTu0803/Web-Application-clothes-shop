import './App.css';
import HomeScreen from './screens/HomeScreen';
import MainProductScreen from './screens/ProductScreen';
import AddProductScreen from './screens/AddProductScreen';
import CategoriesScreen from './screens/CategoriesScreen';

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/products" element={<MainProductScreen />} />
      <Route path="/addproducts" element={<AddProductScreen />} />
      <Route path="/categories" element={<CategoriesScreen />} />

      </Routes>
    </Router>
    
  );
};

export default App;
