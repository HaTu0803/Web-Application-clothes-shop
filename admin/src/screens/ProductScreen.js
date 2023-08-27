import React from 'react';
import Sidebar from '../components/Sidebar';
import Products from '../components/Products/Product.js';

const ProductScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Products />
      </main>
    </>
  );
};

export default ProductScreen;
