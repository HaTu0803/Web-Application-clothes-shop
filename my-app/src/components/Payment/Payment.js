import React from 'react';
import './Payment.css';
import { FaCcVisa, FaCcMastercard, FaCcDiscover } from 'react-icons/fa';


const Payment = () => {
    return (
        <>
            <div className="container">

                <div className="row">
                    <div className="col-75">
                        <div className="container">
                            <form action="/action_page.php">

                                <div className="row">
                                    <div className="col-50">
                                        <h3>Billing Address</h3>
                                        <label for="fname"> Nhập họ tên</label>
                                        <input type="text" id="fname" name="firstname" placeholder="Họ và tên" />
                                        <label for="email">Nhập email</label>
                                        <input type="text" id="email" name="email" placeholder="Email" />
                                        <label for="adr"> Nhập số điện thoại</label>
                                        <input type="tel" id="num" name="number" />


                                        <div className="row">
                                            <div className="col-25">
                                                <label for="city">Thành phố</label>
                                                <div className="custom-city" style={{ width: '200px' }}>
                                                    <select>
                                                        <option value="0">Chọn tỉnh/thành</option>
                                                        <option value="1">TP Hồ Chí Minh</option>
                                                        <option value="2">Đà Nẵng</option>

                                                    </select>
                                                </div>

                                            </div>
                                            <div className="col-25">
                                                <label for="city">Quận/huyên</label>

                                                <div className="custom-dis" style={{ width: '200px' }}>
                                                    <select>
                                                        <option value="0">Chọn quận/huyên</option>
                                                        <option value="1">Hóc Môn</option>
                                                        <option value="2">Quận 5</option>

                                                    </select>
                                                </div>

                                            </div>
                                            <div className="col-25">
                                                <label for="city"> Phường/xã</label>

                                                <div className="custom-com" style={{ width: '200px' }}>
                                                    <select>
                                                        <option value="0">Chọn phường/xã</option>
                                                        <option value="1">Xuân Thới Thượng</option>
                                                        <option value="2">4</option>

                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-50">
                                        <h3>Payment</h3>
                                        <label for="fname">Các loại thẻ</label>
                                        <div className="icon-container">
                                            <form>
                                                <input name="gender" type="radio" /> <FaCcVisa style={{ color: 'navy' }} />
                                                <input name="gender" type="radio" /><FaCcMastercard style={{ color: 'red' }} />
                                                <input name="gender" type="radio" /> <FaCcDiscover style={{ color: 'orange' }} />
                                            </form>

                                        </div>
                                        <label for="cname">Tên chủ thẻ</label>
                                        <input type="text" id="cname" name="cardname" placeholder="Tên" />
                                        <label for="ccnum">Số thẻ</label>
                                        <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                                        <label for="expmonth">Exp Month</label>
                                        <input type="number" id="expmonth" name="expmonth" />
                                        <div className="row">
                                            <div className="col-50">
                                                <label for="expyear">Exp Year</label>
                                                <input type="text" id="expyear" name="expyear" placeholder="2018" />
                                            </div>
                                            <div className="col-50">
                                                <label for="cvv">CVV</label>
                                                <input type="text" id="cvv" name="cvv" placeholder="352" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <label>
                                    <input type="checkbox" name="sameadr" /> Shipping address same as billing
                                </label>
                                <input type="submit" value="Tiếp tục thanh toán" className="btn" />
                            </form>
                        </div>
                    </div>
                    <div className="col-25">
                        <div className="container">
                            <h4>Cart <span className="price" style={{ color: 'black' }}><i className="fa fa-shopping-cart"></i> <b>4</b></span></h4>
                            <p><a href="#">Balo Satchel Trang Trí Khóa</a> <span className="price">$15</span></p>
                            <p><a href="#">Sơ mi trắng</a> <span className="price">$5</span></p>
                            <p><a href="#">Áo thun</a> <span className="price">$8</span></p>
                            <p><a href="#">Quần jean</a> <span className="price">$2</span></p>
                            <hr />
                            <p>Total <span className="price" style={{ color: 'black' }}><b>$30</b></span></p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Payment;