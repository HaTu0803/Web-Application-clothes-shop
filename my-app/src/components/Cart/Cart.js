import React from 'react';
import '../../css/Cart.css';
import remove from '../../Images/trash.svg';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <>
      <div className="Cart-container">

        <div className="cart-info">
          <table>
            <tr>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
              <th>Xoá</th>
            </tr>
            <tr>
              <td>Balo Satchel Trang Trí Khóa</td>
              <td>45.00</td>
              <td><input type="number" id="quantity" name="quantity" min="1" max="5" />

              </td>
              <td>45.00</td>
              <td><img src={remove} /></td>
            </tr>
            <tr>
              <td>Balo</td>
              <td>39.00</td>
              <td><div class="input-group">
                <input type="number" id="quantity" name="quantity" min="1" max="5" />
              </div>
              </td>
              <td>39.00</td>
              <td><img src={remove} /></td>
            </tr>

          </table>

        </div>
        <div className="payment">
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, textAlign: 'right' }}>Tổng tiền thanh toán </div>
            <div style={{ flex: 1, textAlign: 'center' }}>45.00</div>
          </div>
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button style={{ width: '200px', height: '50px', fontSize: '16px', backgroundColor: 'white', color: 'black' }}>Tiếp tục mua hàng</button>
          <Link to= "/payment"><button style={{ width: '200px', height: '50px', fontSize: '16px', backgroundColor: 'red', color: 'white' }}>Thanh toán ngay</button> </Link> 
        </div>
      </div>
    </>
  );
}

export default Cart;

