import React from 'react';
import { ProductData } from "../../Helpers/ProductData";
import "./CardList.css";
import Card from '../Card/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardList = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease",
    pauseOnHover: false
  };

  return (
    <div className="new-product">
      <Slider {...settings}>
        {ProductData.map((item, index) => (
          <Card
            image={item.img}
            nameProduct={item.nameProduct}
            price={item.price}
            key={index}
            className="card"
          ></Card>
        ))}
      </Slider>
    </div>
  );
};

export default CardList;
