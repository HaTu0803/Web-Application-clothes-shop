import React from 'react';
import "./SideContent.css";
import Collection from "../../Images/collections.png";
import { Link } from 'react-router-dom';



const SideContent = () => {
    return (
        <div className = "new-product">
        <div className = "side-content">

        <div className = "side-image">
            <img src = {Collection} className = "side-image-0" />
        </div>
    <div className = "side-content-info">
        <p className = "side-content-explain">
          Casual là phong cách đơn giản mà chính bạn có thể tạo ra, ứng dụng phong cách đó trong cuộc sống hàng ngày của mình 
          và biến tấu những trang phục của mình trở thành “một sàn diễn thời trang” thực sự.
        </p>
        <div className = "side-content-detail">
            <Link to = "/producttags" className ="collection-detail">Khám Phá Bộ Sưu Tập {'>>'}</Link>
        </div>
    </div>

    </div>
    </div>
    );
}

export default SideContent;
