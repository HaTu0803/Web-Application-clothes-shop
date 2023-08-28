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
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeAdminScreen from './screens/HomeAdminScreen';
import ProductScreen from './screens/ProductScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';

import AddProductScreen from './screens/AddProductScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import EditProductScreen from './screens/EditProductScreen';
import AddCategorytScreen from './screens/AddCategoryScreen';
import EditCategoryScreen from './screens/EditCategoryScreen';

import UserScreen from './screens/UserScreen';
import OrderScreen from './screens/OrderScreen';
import OrderdetailScreen from './screens/OrderdetailScreen';
import AddUserScreen from './screens/AddUserScreen';
import EditUserScreen from './screens/EditUserScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
        <Route path="/user/" element={<HomeScreen />} />
        <Route path="/user/newproducts" element={<NewProductScreen />} />
        <Route path="/user/cart" element={<CartScreen />} />
        <Route path="/user/payment" element={<PaymentScreen />} />
        <Route path="/user/products/:id" element={<ProductDetailsScreen />} />
        <Route path="/user/products" element={<ProductsScreen />} />
        <Route path="/user/producttags" element={<ProductTagsScreen />} />
        <Route path="/user/category/:type" element={<CategoryTypeScreen />} />
        <Route path="/user/categorytype/:type" element={<CategoryScreen />} />
        <Route path="/user/producttag/:type" element={<ProductTagTypeScreen />} />


        <Route path="/admin/" element={<HomeAdminScreen />} />
      <Route path="/admin/products" element={<ProductScreen />} />
      {/* <Route path="/productdetails/:id"
      element={<ProductDetailScreen />} /> */}
      <Route path="/admin/products/:id" element={<ProductDetailScreen />} />

      <Route path="/admin/addproducts" element={<AddProductScreen />} />
      <Route path="/admin/categories" element={<CategoriesScreen />} />
      <Route path="/admin/editproduct/:id" element={<EditProductScreen />} />
      <Route path="/admin/productdetails/:id" element={<ProductDetailScreen />} />
      <Route path="/admin/addcategories" element={<AddCategorytScreen />} />
      <Route path="/admin/editcategory/:id" element={<EditCategoryScreen />} />
      <Route path = "/admin/user" element = {<UserScreen />} />
      <Route path = "/admin/Orders" element = {<OrderScreen />} />
      <Route path = "/admin/AddUser" element = {<AddUserScreen />} />
      <Route path = "/admin/EditUser/:UserID" element = {<EditUserScreen />} />
      <Route path="/admin/Orders/:OrderID" element={<OrderdetailScreen />} />

      </Routes>
    </Router>
  )
};
export default App;