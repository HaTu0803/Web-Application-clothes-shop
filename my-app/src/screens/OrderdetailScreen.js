import React from "react";
import OrderDetail from "../components/Order/Order-detail.js";

import Sidebar from '../components/Sidebar';

const UserScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <OrderDetail />
      </main>
    </>
  );
};

export default UserScreen;
