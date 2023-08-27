import React, { useState, useEffect }  from 'react';
import "./CardList.css";
import Card from '../Card/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

const CardList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/newproducts')
        .then(res => setProducts(res.data))
        .catch(err => console.log(err));
}, []);
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
        {products.map((item, index) => (
          <Card
            image={item.Photo}
            nameProduct={item.ProductName}
            price={item.Price}
            key={index}
            className="card"
          ></Card>
        ))}
      </Slider>
    </div>
  );
};

export default CardList;
