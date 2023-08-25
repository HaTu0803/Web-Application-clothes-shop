import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from "../Images/logo.png";
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Body = () => {
    return (
        <div className="container">

            <div className="header">
                <Link to="/"><img src={Logo} className="logo" /></Link>
                <nav>
                    <ul className="main-menu">

                        <li><Link to="/newproducts" className="menu-text">Hàng Mới</Link></li>
                        <li className="dropdown"><Link to="/products" className="menu-text">Sản Phẩm</Link>
                            <div className="dropdown-content">
                                <div className="Type1"><h5>VÁY ĐẦM</h5>
                                    <ul className='Product'>
                                        <li className='Type'><a>Váy mini</a></li>
                                        <li className='Type'><a>Váy midi</a></li>
                                        <li className='Type'><a>Váy maxi</a></li>
                                        <li className='Type'><a>Skirls</a></li>
                                    </ul>
                                </div>
                                <div className="Type2"><h5>Áo</h5>
                                    <ul className='Product'>
                                        <li className='Type'><a>Áo sơ mi</a></li>
                                        <li className='Type'><a>Áo Blouse</a></li>
                                        <li className='Type'><a>Áo choàng</a></li>
                                        <li className='Type'><a>Áo Blazers</a></li>
                                        <li className='Type'><a>Áo len</a></li>
                                    </ul>
                                </div>
                                <div className="Type3"><h5>Quần</h5>
                                    <ul className='Product'>
                                        <li className='Type'><a>Quần dài</a></li>
                                        <li className='Type'><a>Jean</a></li>
                                    </ul></div>
                                <div className="Type5"><h5>Bộ Sưu Tập</h5>
                                    <ul className='Product'>
                                        <li className='Type'><a>MÙA XUÂN - MÙA HẠ</a></li>
                                        <li className='Type'><a>MÙA THU - MÙA ĐÔNG</a></li>
                                    </ul></div>
                            </div>
                        </li>
                        <li><a href="" className="menu-text">Bộ Sưu Tập</a></li>
                        <div className="dropdown-collection">
                            <div className="Type5">
                                <ul className='Product'>
                                    <li className='Type'><a>Office Wear</a></li>
                                    <li className='Type'><a>Vacation Wear</a></li>
                                    <li className='Type'><a>Casual Wear</a></li>
                                    <li className='Type'><a>Party Wear</a></li>
                                </ul></div>
                        </div>
                        <li><a href="" className="menu-text">Liên Hệ</a></li>


                        <nav className="menu-right">
                            <input type="text" className="search-input  mainLoginInput" name="search" placeholder="Tìm Kiếm..." />
                            <a href="" target="_blank" className="menu-text menu-icon"><FontAwesomeIcon icon={faSearch} /></a>
                            <a href="" target="_blank" className="menu-text menu-icon"><FontAwesomeIcon icon={faUser} /></a>
                            <Link to="/cart" target="_blank" className="menu-text menu-icon"><FontAwesomeIcon icon={faShoppingCart} /></Link>
                        </nav>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Body;
