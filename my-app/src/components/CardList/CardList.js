import React from 'react';
import "./CardList.css";
import Card from '../Card/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardList = ({data}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    cssEase: "ease",
    pauseOnHover: false
  };

  return (
    <div className="new-product">
      <Slider {...settings}>
        {data.map((item, index) => (
          console.log(item.id),
          <Card
            id={item.id}
            image={item.img}
            nameProduct={item.nameProduct}
            price={item.price}
            key={index}
            className="card-carousel"
          ></Card>
        ))}
      </Slider>
    </div>
  );
};

export default CardList;
