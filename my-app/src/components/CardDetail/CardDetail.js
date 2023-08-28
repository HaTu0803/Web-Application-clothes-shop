import React from 'react';
import "../Card/Card.css";
import { Link } from 'react-router-dom';


const CardDetail = () => {
    return (
         <div className = "new-product">
             <div className = "card-detail">
                <Link to="/user/newproducts" className="btn">XEM THÊM</Link>
            </div>
        </div>
    );
}

export default CardDetail;
