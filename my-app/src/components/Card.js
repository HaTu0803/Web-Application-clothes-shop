import React, { useState } from 'react';
import '../css/Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faHeart, faExpand } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const [card, setCard] = useState(null);

  const handleIconClick = () => {
    setCard({
      img: props.image,
      name: props.nameProduct,
      price: props.price
    });
  };

  const handleClosePopup = (event) => {
    event.stopPropagation();
    setCard(null);
  };

  const handlePopupClick = (event) => {
    event.stopPropagation();
  };


  const [currentValue, setCurrentValue] = useState(1);

  const handleDecrease = () => {
    if (currentValue > 1) {
      setCurrentValue(prevValue => prevValue - 1);
    }
  };

  const handleIncrease = () => {
    setCurrentValue(prevValue => prevValue + 1);
  };

  return (
    <div className="card">
      <div className="card-body">
        <Link to="/product/1" ><img src={props.image} className="img1" alt="Product" /></Link>
        <div className="action-product">
          <a href="#" className="action tooltip">
            <FontAwesomeIcon icon={faShoppingBag} />
            <span className="tooltiptext">Thêm vào giỏ hàng</span>
          </a>
          <a href="#" className="action tooltip">
            <FontAwesomeIcon icon={faHeart} />
            <span className="tooltiptext">Thêm vào mục ưa thích</span>
          </a>
          <a href="#" className="action tooltip" onClick={handleIconClick}>
            <FontAwesomeIcon icon={faExpand} />
            <span className="tooltiptext">Xem Chi Tiết</span>
          </a>
        </div>
        <h3>{props.nameProduct}</h3>
        <a href="#" className="btn">{props.price}</a>
      </div>
      {card && (
        <div className="popup-card"
          style={{ display: card ? 'inline-block' : 'none' }}
          onClick={handleClosePopup} // Close popup on clicking outside the content
        >
          <div className="popup-content" onClick={handlePopupClick}> {/* Prevent clicks inside popup from closing it */}
            <span onClick={() => setCard(null)}>&times;</span>
            <div className="popup-body">
              <img className="popup-img" src={card.img} alt={card.name} />
              <div className="popup-info">
                <h1 className="popup-name">{card.name}</h1>
                <span className="popup-price">{card.price}</span>
                <div className="popup-color" >
                  <button className="popup-button1"></button>
                  <button className="popup-button2"></button>
                  <button className="popup-button3"></button>
                </div>
                <div className="popup-quantity">
                  <div className="popup-quantity-par">
                    <button className="minus-btn" onClick={handleDecrease}>-</button>
                    <span className="quantity-value">{currentValue}</span>
                    <button className="plus-btn" onClick={handleIncrease}>+</button>
                  </div>
                  <div className="popup-static">
                    <span>Còn hàng</span>
                  </div>
                </div>
                <button className="popup-add">Thêm vào giỏ hàng</button>
                <form className="popup-form">
                  <fieldset>
                    <legend class="dotted-border">&#127873; Khuyến mãi - ưu đãi</legend>
                    <ul>
                      <li>Đồng giá Ship toàn quốc 25.000đ</li>
                      <li>Hỗ trợ 10.000 phí Ship cho đơn hàng từ 200.000đ</li>
                      <li>Miễn phí Ship cho đơn hàng từ 300.000đ</li>
                      <li>Đổi trả trong 30 ngày nếu sản phẩm lỗi bất kì</li>
                    </ul>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
