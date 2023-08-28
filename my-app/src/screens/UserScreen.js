import React from "react";
import User from "../components/User/Users.js";

import Sidebar from '../components/Sidebar';

const UserScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <User />
      </main>
    </>
  );
};

export default UserScreen;
