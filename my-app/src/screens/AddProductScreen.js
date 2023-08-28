import React from 'react';
import Sidebar from '../components/Sidebar';
import AddProducts from '../components/Products/AddProduct';

const AddProductScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <AddProducts/>
      </main>
    </>
  );
};

export default AddProductScreen;
