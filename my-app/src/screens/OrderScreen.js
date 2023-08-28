import React from "react";
import Orders from "../components/Order/Orders.js";

import Sidebar from '../components/Sidebar';

const UserScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Orders />
      </main>
    </>
  );
};

export default UserScreen;
