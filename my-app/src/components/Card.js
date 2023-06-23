import React from 'react';
import "../css/Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingBag, faHeart, faExpand} from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {
    return (
             <div className="card">
                <div className="card-body">
                 <img src = {props.image} className = "img1" alt = "Product"/>
                 <div className = "action-product">
                  <a href="#" className = "action tooltip" ><FontAwesomeIcon icon={faShoppingBag} />
                    <span className = "tooltiptext">Thêm vào giỏ hàng</span>
                  </a>
                  <a href="#" className = "action tooltip"><FontAwesomeIcon icon={faHeart} />
                    <span className = "tooltiptext">Thêm vào mục ưa thích</span>
                  </a>
                  <a href="#" className = "action tooltip"><FontAwesomeIcon icon={faExpand} />
                    <span className = "tooltiptext">Xem Chi Tiết</span>
                  </a>
                </div>
                 <h3>{props.nameProduct}</h3>
                  <a href="#" className="btn">{props.price}</a>
                </div>
              </div>
    );
}

export default Card;
