import React from 'react';
import './index.css';
import HomeScreen from './screens/HomeScreen';
import NewProductScreen from './screens/NewProductScreen';
import CartScreen from './screens/CartScreen';
import PaymentScreen from './screens/PaymentScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ProductsScreen from './screens/ProductsScreen';
import ProductTagsScreen from './screens/ProductTagsScreen';
import CategoryTypeScreen from './screens/CategoryTypeScreen';
import CategoryScreen from './screens/CategoryScreen';
import ProductTagTypeScreen from './screens/ProductTagTypeScreen';
import SearchProductScreen from './screens/SearchProductScreen';
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
        <Route path="/newproducts" element={<NewProductScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/products/:id" element={<ProductDetailsScreen />} />
        <Route path="/products" element={<ProductsScreen />} />
        <Route path="/producttags" element={<ProductTagsScreen />} />
        <Route path="/category/:type" element={<CategoryTypeScreen />} />
        <Route path="/categorytype/:type" element={<CategoryScreen />} />
        <Route path="/producttag/:type" element={<ProductTagTypeScreen />} />
        <Route path="/search/:name" element={<SearchProductScreen />} />
      </Routes>
    </Router>
  )
};
export default App;