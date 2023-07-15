import React from 'react';
import "../css/Card.css";
import { Link } from 'react-router-dom';


const CardDetail = () => {
    return (
         <div className = "new-product">
             <div className = "card-detail">
                <Link to="/newproduct" className="btn">XEM THÊM</Link>
            </div>
        </div>
    );
}

export default CardDetail;
