import React from "react";
import Sidebar from '../components/Sidebar';
import AddUser from "../components/User/AddUser";

const AddUserScreen = () => {
  
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <AddUser/>
      </main>
    </>
  );
};

export default AddUserScreen;
