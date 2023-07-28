import React from 'react';
import './index.css';
import HomeScreen from './screens/HomeScreen';
import NewProduct from './components/NewProduct/NewProduct';
import Product from './components/Product/Product';
import { ProductData } from "./Helpers/ProductData";
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
        <Route path="/newproduct" element={<NewProduct />} />
        {ProductData.map(product => (
          <Route key={product.id} path={`/product/${product.id}`} element={<Product />} />
        ))}
      </Routes>
    </Router>
  )
};
export default App;