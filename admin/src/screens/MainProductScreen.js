import React from "react";
import Sidebar from '../components/Sidebar';
import MainProducts from "../components/Products/MainProducts.js";

const MainProductScreen = () => {

  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <MainProducts/>
      </main>
    </>
  );
};

export default MainProductScreen;
