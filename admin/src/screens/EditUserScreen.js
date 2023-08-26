import React from "react";
import Sidebar from '../components/Sidebar';
import EditUser from "../components/User/EditUser";

const AddUserScreen = () => {
  
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
      <EditUser/>
      </main>
    </>
  );
};

export default AddUserScreen;
