import React from "react";
import Sidebar from '../components/Sidebar';
import ProductDetails from "../components/Products/ProductDetails.js";

const ProductDetailScreen = () => {
  
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <ProductDetails/>
      </main>
    </>
  );
};

export default ProductDetailScreen;
