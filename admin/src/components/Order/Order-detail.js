import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/Order-detail.css';
import { useParams } from 'react-router-dom';
import product from '../../images/image20.png';
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

  const { OrderID } = useParams();
      
  // const deletehandler = (id) => {
  //   if (window.confirm("Are you sure??")) {
  //     dispatch(deleteProduct(id));
  //   }
  // };


useEffect(() => {
  axios.get(`http://localhost:3000/api/Orders/${OrderID}`)
    .then(res => {
      setOrderDetail(res.data)
    }
    )
    .catch(err => console.log(err));
}, [OrderID]);


    return (
      <div>
      {OrderDetail.map((data) => (

        <div className = "order_detail-container ">

            <div className = "order_detail-header">
             <div>
                <p>{data.CreateTime}</p>
                <p>ID đơn hàng: {data.OrderID}</p>
             </div>
             <div>
                <form action="" className = "change_status">
                <select name="status" id="status">
                <option value="">Thay đổi trạng thái</option>
                <option value="payment waitting">Đang chờ thanh toán</option>
                <option value="verified">Đã xác nhận</option>
                <option value="transport">Vận chuyển</option>
                <option value="delivered">Đã giao hàng</option>
              </select>
            </form>
             </div>
            </div>
            <div className = "order_detail-info">
            <div>
            <FontAwesomeIcon icon={faCircleUser} />
            <strong><p>Khách hàng</p></strong>
            <p>{data.BuyerName}</p>
            </div>
            <div>
            <FontAwesomeIcon icon={faShippingFast} />
            <strong><p>Thông tin vận chuyển</p></strong>
            <p>Đơn vị vận chuyển: Giao hàng nhanh</p>
            <p>Thanh toán: Momo</p>
            </div>
            <div>
            <FontAwesomeIcon icon={faLocationDot} />
            <strong><p>Địa chỉ</p></strong>
            <p>Số nhà 235 đường Trần Hưng Đạo Quận 5 TP.HCM</p>
            </div>
            </div>
            <hr />
            <div className = "order_detail-center">
            <div className = "check-product">
            <table>
            <tr>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Tổng tiền</th>
     
          </tr>
          <tr>
            <td><img src = {product}/><span>Balo Satchel trang trí khóa</span>
            <p>Trắng kem</p>
            </td>
            <td>45</td>
            <td>2</td>
            <td>{data.TotalPrice}</td>
          </tr>
          </table>
          <div className = "price-total">
            <span className = "price-detail">Tiền hàng </span>
            <span><strong>90</strong></span>
            </div>
            <div  className = "price-total">
            <span className = "price-detail">Phí vận chuyển </span>
            <span><strong>10</strong></span>
            </div>
            <div  className = "price-total">
            <span className = "price-detail"><strong>Tổng cộng </strong></span>
            <span><strong>100</strong></span>
            </div>

            </div>

            <div className = "btn-checked">
            <p>Đánh dấu đã giao</p>
            
            </div>
            
            </div>
            
        </div>
        ))}
        </div>
    );
  
}

export default OrderDetail;
