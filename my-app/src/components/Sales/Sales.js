import React from 'react';
import "./Sales.css";
import SalesIMG from "../../Images/saleup.png";
import { Link } from 'react-router-dom';


const Sales = () => {
    return (
      <div className = "info-discount">
      <img src = {SalesIMG} className = "sales-image" />
      <h1>BIG SALE</h1>
      <span>Sở hữu những bộ trang phục yêu thích với giá thấp nhất</span>
      <Link to="/newproducts" className="btn">Mua Ngay</Link>
    </div>
    );
}

export default Sales;
