import React from 'react';
import Sidebar from '../components/Sidebar';
import EditCategory from '../components/Categories/EditCategory';

const EditCategoryScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <EditCategory />
      </main>
    </>
  );
};

export default EditCategoryScreen;
