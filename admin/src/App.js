import './App.css';
import HomeScreen from './screens/HomeScreen';
import MainProductScreen from './screens/MainProductScreen';
import AddProductScreen from './screens/AddProductScreen';

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
      <Route path="/mainproducts" element={<MainProductScreen />} />
      <Route path="/addproducts" element={<AddProductScreen />} />
      </Routes>
    </Router>
    
  );
};

export default App;
