import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';

import AddProductScreen from './screens/AddProductScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import EditProductScreen from './screens/EditProductScreen';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/products" element={<ProductScreen />} />
      {/* <Route path="/productdetails/:id"
      element={<ProductDetailScreen />} /> */}
      <Route path="/products/:id" element={<ProductDetailScreen />} />

      <Route path="/addproducts" element={<AddProductScreen />} />
      <Route path="/categories" element={<CategoriesScreen />} />
      <Route path="/editproduct/:id" element={<EditProductScreen />} />
      <Route path="/productdetails/:id" element={<ProductDetailScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
