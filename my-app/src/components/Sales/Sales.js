import React from 'react';
import "../../css/Sales.css";
import SalesIMG from "../../Images/saleup.png";


const Sales = () => {
    return (
      <div className = "info-discount">
      <img src = {SalesIMG} className = "sales-image" />
      <h1>BIG SALE</h1>
      <span>Sở hữu những bộ trang phục yêu thích với giá thấp nhất</span>
      <a href="#" className="btn">Mua Ngay</a>
    </div>
    );
}

export default Sales;
