import React from 'react';
import './index.css';
import Header from './components/Header';
import Slide from './components/Slide';
import Service from './components/Service';
import CardList from './components/CardList';
import CardDetail from './components/CardDetail';
import SideContent from './components/SideContent';
import Sales from './components/Sales';
import Footer from './components/Footer';




function App() {
  return (

  <div className = "wrapper">
    <Header />
    <Slide />
    <Service />
    <CardList></CardList>
    <CardDetail />
    <SideContent />
    <Sales />
    <Footer />

  </div>

  )
};
export default App;