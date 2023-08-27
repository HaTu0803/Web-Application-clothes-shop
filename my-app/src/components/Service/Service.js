import React from 'react';
import "./Service.css";
import shipping from "../../Images/shipping.png";
import support from "../../Images/support.png";
import exchange from "../../Images/return.png";

const Service = () => {
    return (
        <div>
    <div className="main-content">
      <div className="item1"><img src = {shipping} className = "item1"/>
        <span className = "img-describe">Miễn phí giao hàng</span>
    </div>
      <div className="item2"><img src = {support} className = "item2"/>
        <span className="img-describe">Hỗ trợ Online 24/7</span>
    </div>
      <div className="item3"><img src = {exchange} className = "item3"/>
        <span className="img-describe">Bảo hành 1 đổi 1</span>
    </div>
    </div>
    <div className="service">Mở bán nhiều sản phẩm mới </div>
    <div className = "service-detail">Các sản phẩm bắt nhịp quốc tế, nàng thời thượng không nên bỏ lỡ</div>
        </div>
    );
}

export default Service;
