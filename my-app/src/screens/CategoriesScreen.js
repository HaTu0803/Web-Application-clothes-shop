import React from 'react';
import Sidebar from '../components/Sidebar';
import Categories from './../components/Categories/Categories';

const CategoriesScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Categories/>
      </main>
    </>
  );
};

export default CategoriesScreen;
