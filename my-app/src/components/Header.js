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
                        <li className="dropdown"><a href="" className="menu-text">Sản Phẩm</a>
                            <div className="dropdown-content">
                                <div className="Type1"><h5>GIÀY</h5>
                                    <ul className='Product'>
                                        <li className='Type'><a>Giày</a></li>
                                        <li className='Type'><a>Giày</a></li>
                                        <li className='Type'><a>Giày</a></li>
                                        <li className='Type'><a>Giày</a></li>
                                    </ul>
                                </div>
                                <div className="Type2"><h5>TÚI</h5>
                                    <ul className='Product'>
                                        <li className='Type'><a>Giày</a></li>
                                        <li className='Type'><a>Giày</a></li>
                                        <li className='Type'><a>Giày</a></li>
                                        <li className='Type'><a>Giày</a></li>
                                    </ul>
                                </div>
                                <div className="Type3"><h5>PHỤ KIỆN</h5>
                                    <ul className='Product'>
                                        <li className='Type'><a>Giày</a></li>
                                        <li className='Type'><a>Giày</a></li>
                                        <li className='Type'><a>Giày</a></li>
                                        <li className='Type'><a>Giày</a></li>
                                    </ul></div>
                                <div className="Type4"><h5>QUẦN ÁO</h5>
                                    <ul className='Product'>
                                        <li className='Type'><a>Giày</a></li>
                                        <li className='Type'><a>Giày</a></li>
                                        <li className='Type'><a>Giày</a></li>
                                        <li className='Type'><a>Giày</a></li>
                                        <li className='Type'><a>Giày</a></li>
                                        <li className='Type'><a>Giày</a></li>
                                        <li className='Type'><a>Giày</a></li>
                                        <li className='Type'><a>Giày</a></li>
                                    </ul></div>
                                <div className="Type5"><h5>BỘ SƯU TẬP</h5>
                                    <ul className='Product'>
                                        <li className='Type'><a>Giày</a></li>
                                        <li className='Type'><a>Giày</a></li>
                                        <li className='Type'><a>Giày</a></li>
                                        <li className='Type'><a>Giày</a></li>
                                        <li className='Type'><a>Giày</a></li>
                                        <li className='Type'><a>Giày</a></li>
                                        <li className='Type'><a>Giày</a></li>
                                        <li className='Type'><a>Giày</a></li>
                                        <li className='Type'><a>Giày</a></li>
                                        <li className='Type'><a>Giày</a></li>
                                        <li className='Type'><a>Giày</a></li>
                                        <li className='Type'><a>Giày</a></li>
                                    </ul></div>
                            </div>
                        </li>
                        <li><a href="" className="menu-text">Bộ Sưu Tập</a></li>
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
