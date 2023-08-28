import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowLeft, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../screens/CartContext';
const Cart = () => {
  const [productBuy, setProductBuy] = useState([]);
  const [total, setTotal] = useState(0);
  const { removeItem } = useCartContext();

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    setProductBuy(JSON.parse(cart));

    const total = JSON.parse(cart)?.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
    setTotal(total);
  }, []);


  const handleSizeChange = (index, newSize) => {
    const updatedProductBuy = [...productBuy];
    updatedProductBuy[index].size = newSize;
    localStorage.setItem('cart', JSON.stringify(updatedProductBuy));
    setProductBuy(updatedProductBuy);
  };

  const handleRemoveProduct = (index) => {
    const updatedProductBuy = [...productBuy];
    updatedProductBuy.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(updatedProductBuy));
    setProductBuy(updatedProductBuy);
    setTotal(updatedProductBuy.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0));
    removeItem(index);

  };

  return (
    <>
      <div className="Cart-container">
        <div className="cart-info">
        <div className="table-container" style={{ height: '500px', overflow: 'auto' }}>
            <table>
              <thead>
                <tr>
                  <th>Ảnh sản phẩm</th>
                  <th>Tên sản phẩm</th>
                  <th>Kích cỡ</th>
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
                      <td><img className="img-product" src={product.image} /></td>
                      <td>{product.name}</td>
                      <td>
                        <select
                          style={{ fontSize: '20px', borderRadius: '8px', cursor: 'pointer' }}
                          value={product.size} name="size"
                          onChange={(e) => {
                            const newSize = e.target.value;
                            handleSizeChange(index, newSize);
                          }}
                        >
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                          <option value="XL">XL</option>
                          <option value="XXL">XXL</option>
                        </select>
                      </td>
                      <td>{product.price}</td>
                      <td>
                        <input
                          style={{ width: '60px',fontSize: '20px', borderRadius: '8px', cursor: 'pointer', padding: '0 5px' }}
                          value={product.quantity}
                          type="number"
                          id="quantity"
                          name="quantity"
                          min="1"
                          onChange={(e) => {
                            const newCart = [...productBuy];
                            newCart[index].quantity = e.target.value;
                            setProductBuy(newCart);
                            localStorage.setItem('cart', JSON.stringify(newCart));
                            setTotal(newCart.reduce((total, product) => {
                              return total + product.price * product.quantity;
                            }, 0));
                          }}
                        />
                      </td>
                      <td>{product.price * product.quantity}</td>
                      <td>
                        <FontAwesomeIcon className='icon-trash' icon={faTrash} onClick={handleRemoveProduct} />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
        </div>
        </div>
        <div className="payment">
          <div className='payment-content'>
            <div className='payment-title'>$ Tổng tiền thanh toán: </div>
            <div className='payment-total'>{total} đồng</div>
          </div>
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '80px' }}>
          <Link to="/user/products" className="continue-buy-btn"> <FontAwesomeIcon icon={faArrowLeft} /> Tiếp tục mua hàng</Link>
          <Link to="/user/payment" className="payment-btn">Thanh toán ngay <FontAwesomeIcon icon={faMoneyBill} /></Link>
        </div>
      </div>
    </>
  );
}

export default Cart;

