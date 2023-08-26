import './App.css';
import HomeScreen from './screens/HomeScreen';
import MainProductScreen from './screens/ProductScreen';
import AddProductScreen from './screens/AddProductScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import UserScreen from './screens/UserScreen';
import OrderScreen from './screens/OrderScreen';
import OrderdetailScreen from './screens/OrderdetailScreen';
import AddUserScreen from './screens/AddUserScreen';
import EditUserScreen from './screens/EditUserScreen';
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
      <Route path = "/user" element = {<UserScreen />} />
      <Route path = "/Orders" element = {<OrderScreen />} />
      <Route path = "/AddUser" element = {<AddUserScreen />} />
      <Route path = "/EditUser/:UserID" element = {<EditUserScreen />} />
      <Route path="/Orders/:OrderID" element={<OrderdetailScreen />} />
      </Routes>
    </Router>
    
  );
};

export default App;
