import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/Order-detail.css';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faLocationDot,
  faCircleUser,
  faShippingFast,
  faUser,
  faCog,
  faQuestionCircle,
  faSun,
  faBars,
  faSignOut,
  faSignIn
} from '@fortawesome/free-solid-svg-icons';

const OrderDetail = () => {
  const [OrderDetail, setOrderDetail] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0); 
  const { OrderID } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/Orders/${OrderID}`)
      .then((res) => {
        setOrderDetail(res.data);
        
 
        const total = res.data.reduce((sum, data) => {
          return sum + parseInt(data.ProductPrice) * parseInt(data.Quantity);
        }, 0);
        setTotalAmount(total);
      })
      .catch((err) => console.log(err));
  }, [OrderID]);

  return (
    <div>
      {OrderDetail.length > 0 && (
        <div className="order_detail-container ">
        <div className="order_detail-header">
        <div>
          <p>ID đơn hàng: {OrderDetail[0].OrderID}</p>
        </div>
        <div>
          <form action="" className="change_status"></form>
        </div>
      </div>
      <div className="order_detail-info">
        <div>
          <FontAwesomeIcon icon={faCircleUser} />
          <strong>
            <p>Khách hàng</p>
          </strong>
          <p>{OrderDetail[0].BuyerName}</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faShippingFast} />
          <strong>
            <p>Trạng thái đơn hàng</p>
          </strong>
          <p>{OrderDetail[0].Statuss}</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faLocationDot} />
          <strong>
            <p>Địa chỉ</p>
          </strong>
          <p>{OrderDetail[0].BuyerAddress}</p>
        </div>
      </div>
      <hr />
          <div className="check-product">
            <table>
              <tr>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Tổng tiền</th>
              </tr>
              {OrderDetail.map((data) => (
                <tr key={data.ProductName}>
                  <td>
                    <span>{data.ProductName}</span>
                  </td>
                  <td>{data.ProductPrice}</td>
                  <td>{data.Quantity}</td>
                  <td>
                    {parseInt(data.ProductPrice) * parseInt(data.Quantity)}
                  </td>
                </tr>
              ))}
            </table>
            <div className="price-total">
              <span className="price-detail">Tiền hàng </span>
              <span>
                <strong>{totalAmount}</strong>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetail;