import React from 'react';
import './index.css';

import Cart from './components/Cart';
import Payment from './components/Payment';

import {BrowserRouter ,Routes,Route} from "react-router-dom";



function App() {
  return (

  <div className = "wrapper">
    
    <BrowserRouter>
      <Routes>
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment />} />

      </Routes>
    </BrowserRouter>
  
  </div>

    
    
  );
};

export default App;
