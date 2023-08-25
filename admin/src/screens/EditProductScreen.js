import React from "react";
import Sidebar from '../components/Sidebar';
import EditProduct from '../components/Products/EditProduct';

const EditProductScreen = () => {

  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <EditProduct />
      </main>
    </>
  );
};

export default EditProductScreen;
