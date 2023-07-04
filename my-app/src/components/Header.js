import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "../css/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from "../Images/logo.png";
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import HangMoi from './HangMoi';


const Body = () => {
    return (
        <BrowserRouter>
            <div className="container">

                <div className="header">
                    <a href="index.html"><img src={Logo} className="logo" /></a>
                    <nav>
                        <ul className="main-menu">

                            <li><Link to="/HangMoi" className="menu-text">Hàng Mới</Link></li>
                            <li><a href="" className="menu-text">Sản Phẩm</a></li>
                            <li><a href="" className="menu-text">Bộ Sưu Tập</a></li>
                            <li><a href="" className="menu-text">Liên Hệ</a></li>


                            <nav className="menu-right">
                                <input type="text" className="search-input  mainLoginInput" name="search" placeholder="Tìm Kiếm..." />
                                <a href="" target="_blank" className="menu-text menu-icon"><FontAwesomeIcon icon={faSearch} /></a>
                                <a href="" target="_blank" className="menu-text menu-icon"><FontAwesomeIcon icon={faUser} /></a>
                                <a href="" target="_blank" className="menu-text menu-icon"><FontAwesomeIcon icon={faShoppingCart} /></a>
                            </nav>
                        </ul>
                    </nav>
                </div>
            </div>
            <Routes>
                <Route path="/HangMoi" element={<HangMoi />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Body;
