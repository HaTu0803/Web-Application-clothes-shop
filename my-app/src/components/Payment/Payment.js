import React from "react";
import "./Payment.css";
import { FaCcVisa, FaCcMastercard, FaCcDiscover } from "react-icons/fa";
import { useState, useEffect } from "react";

const Payment = () => {
    const [formData, setFormData] = useState({
        pwd: '',
        email: '',
    });
  const [productBuy, setproductBuy] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setproductBuy(JSON.parse(cart));
      const total = JSON.parse(cart)?.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
      setTotal(total);
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
        const response = await fetch('http://localhost:3000/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        console.log("Respond: ", response) 
        if (response.ok) {
            console.log('Data sent successfully');
        } else {
            // console.error('Error sending data');
        }
    } catch (error) {
        console.error(error);
    }
    // console.log(e);
};
  return (
    <>
      {/* <div class="container">
        <form method="POST">
          <div class="payment">
            <div class="row">
              <div class="col-50">
                <h3>Billing Address</h3>
                <label for="fname"> Nhập tên</label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Họ và tên"
                />
                <label for="email">Nhập mã thẻ</label>
                <input
                  type="text"
                  id="fname"
                  name="email"
                  placeholder="Nhập mã thẻ"
                />
                <label for="adr"> Nhập mật khẩu </label>
                <input type="password" id="pwd" name="pwd" />
              </div> */}
              <form>
              <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label" >Nhập tên</label>
                      <input  type="text"
                          id="fname"
                          name="firstname"
                          />
                    </div>
               <div class="mb-3">
                  <label for="email">Nhập mã thẻ</label>
                    <input
                      type="text"
                      id="fname"
                      name="email"
                      
                    />
                </div>
                    <div class="mb-3 form-check">
                        <label for="adr"> Nhập mật khẩu </label>
                    <input type="password" id="pwd" name="pwd" />
                    <h4>
                  Cart
                  <span class="price" style={{ color: "black" }}>
                    <i class="fa fa-shopping-cart"></i>
                  </span>
                </h4>

                {productBuy.map((product, index) => (
                  <div key={index}>
                    <p>
                      {product.name} <span class="price">{product.price}</span>
                    </p>
                  </div>
                ))}
                
                    <p>

                  Tổng
                  <span class="price" style={{ color: "black" }}>
                    <b>{total}</b>
                  </span>
                </p>
                <label>
                  <input type="checkbox" checked="checked" name="sameadr" />{" "}
                  Shipping address same as billing
                </label>
                <input
                  type="submit"
                  value="Thanh toán"
                  class="btn"
                  
                  onClick={handleSubmit}/>                    
                  </div>
                  
                  </form>
              {/* <div class="col-50">
               
                <label>
                  <input type="checkbox" checked="checked" name="sameadr" />{" "}
                  Shipping address same as billing
                </label>
              </div>
            </div>
          </div>
          {/* <input type="submit" value="Thanh toán" class="btnt" /> */}
          {/* <div class="payment">
            <div class="row">
              <div class="col-50">
                <h4>
                  Cart
                  <span class="price" style={{ color: "black" }}>
                    <i class="fa fa-shopping-cart"></i>
                  </span>
                </h4>

                {productBuy.map((product, index) => (
                  <div key={index}>
                    <p>
                      {product.name} <span class="price">{product.price}</span>
                    </p>
                  </div>
                ))}
                <p>
                  Total
                  <span class="price" style={{ color: "black" }}>
                    <b>{total}</b>
                  </span>
                </p>
                <input
                  type="submit"
                  value="Thanh toán"
                  class="btn"
                  
                  onClick={handleSubmit}
                />
              </div>
            </div>
          </div>
        </form>
      </div> */} 
    </>
  );
}
export default Payment;
