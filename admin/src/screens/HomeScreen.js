import React from "react";
import Dashboard from "../components/Home/Dashboard";

import Sidebar from '../components/Sidebar';

const HomeScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Dashboard />
      </main>
    </>
  );
};

export default HomeScreen;
