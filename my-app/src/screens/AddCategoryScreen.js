import React from 'react';
import Sidebar from '../components/Sidebar';
import AddCategory from '../components/Categories/AddCategory';

const AddCategorytScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <AddCategory/>
      </main>
    </>
  );
};

export default AddCategorytScreen;
