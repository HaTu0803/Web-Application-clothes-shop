import React from 'react';
import './index.css';
import HomeScreen from './screens/HomeScreen';
import NewProduct from './components/NewProduct/NewProduct';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/newproduct" element={<NewProduct />} />
      </Routes>
    </Router>
  )
};
export default App;