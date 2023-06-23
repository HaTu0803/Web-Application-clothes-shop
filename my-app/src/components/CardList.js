import React from 'react';
import { ProductData } from "../Helpers/ProductData";
import "../css/CardList.css";
import Card from './Card';

const CardList = () => {
    return (
        <div className = "new-product">
                 <div className="row">

                {ProductData.map((item, index) => (
                    <Card image = {item.img} nameProduct = {item.nameProduct} price = {item.price} ></Card>
                ))}

              </div>
        </div>
    );
}

export default CardList;
