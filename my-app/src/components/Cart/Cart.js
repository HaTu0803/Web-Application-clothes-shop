import React from 'react';
import './Cart.css';
import remove from '../../Images/trash.svg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Cart = () => {
  const [productBuy, setproductBuy] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    setproductBuy(JSON.parse(cart));

    const total = JSON.parse(cart)?.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
    setTotal(total);


  }, []);

  const handleRemoveProduct = (index) => {
    const newCart = [...productBuy];
    newCart.splice(index, 1);
    setproductBuy(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setTotal(newCart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0));
  };

  return (
    <>
      <div className="Cart-container">

        <div className="cart-info">
          <table>
            <thead>
              <tr>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {productBuy &&
                productBuy.map((product, index) => (
                  <tr key={index}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                      <input
                        value={product.quantity}
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="1"
                        max="5"
                        onChange={(e) => {
                          const newCart = [...productBuy];
                          newCart[index].quantity = e.target.value;
                          setproductBuy(newCart);
                          localStorage.setItem('cart', JSON.stringify(newCart));
                          setTotal(newCart.reduce((total, product) => {
                            return total + product.price * product.quantity;
                          }, 0));
                        }}
                      />
                    </td>
                    <td>{product.price * product.quantity}</td>
                    <td>
                      <img src={remove} alt="Remove" onClick={handleRemoveProduct} />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

        </div>
        <div className="payment">
          <div className='payment-content'>
            <div className='payment-title'>$ Tổng tiền thanh toán: </div>
            <div className='payment-total'>{total} đồng</div>
          </div>
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/products" className="continue-buy-btn">Tiếp tục mua hàng</Link>
          <Link to="/payment" className="payment-btn">Thanh toán ngay </Link>
        </div>
      </div>
    </>
  );
}

export default Cart;

