import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
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
                                <div className="Type1"><Link to="/categorytype/Váy"><h5>VÁY</h5></Link>
                                    <ul className='Product'>
                                        <li className='Type'><Link to="/category/Váy mini">Váy mini</Link></li>
                                        <li className='Type'><Link to="/category/Váy midi">Váy midi</Link></li>
                                        <li className='Type'><Link to="/category/Váy maxi">Váy maxi</Link></li>
                                        <li className='Type'><Link to="/category/Váy Skirls">Váy Skirls</Link></li>
                                    </ul>
                                </div>
                                <div className="Type2"><Link to="/categorytype/Áo"><h5>Áo</h5> </Link>
                                    <ul className='Product'>
                                        <li className='Type'><Link to="/category/Áo sơ mi">Áo sơ mi</Link></li>
                                        <li className='Type'><Link to="/category/Áo Blouse">Áo Blouse</Link></li>
                                        <li className='Type'><Link to="/category/Áo khoác dài">Áo khoác dài</Link></li>
                                        <li className='Type'><Link to="/category/Áo Blazers">Áo Blazers</Link></li>
                                        <li className='Type'><Link to="/category/Áo len">Áo len</Link></li>
                                    </ul>
                                </div>
                                <div className="Type3"><Link to="/categorytype/Quần"><h5>Quần</h5> </Link>
                                    <ul className='Product'>
                                        <li className='Type'><Link to="/category/Quần dài">Quần dài</Link></li>
                                        <li className='Type'><Link to="/category/Quần Jean">Quần Jean</Link></li>
                                    </ul></div>
                            </div>
                        </li>

                        <li className='dropdown-col'><Link to="/producttags" className="menu-text">Bộ Sưu Tập</Link>
                            <div className="dropdown-collection">
                                <div className="Type5">
                                    <ul className='Product'>
                                        <li className='Type'><Link to = "/producttag/Office Wear">Office Wear</Link></li>
                                        <li className='Type'><Link to = "/producttag/Vacation Wear">Vacation Wear</Link></li>
                                        <li className='Type'><Link to = "/producttag/Casual Wear">Casual Wear</Link></li>
                                        <li className='Type'><Link to = "/producttag/Party Wear">Party Wear</Link></li>
                                    </ul></div>
                                <div className="Type6">
                                    <ul className='Product'>
                                        <li className='Type'><Link to = "/producttag/Xuân Hè">Xuân Hè</Link></li>
                                        <li className='Type'><Link to = "/producttag/Thu Đông">Thu Đông</Link></li>
                                    </ul></div>
                            </div>
                        </li>
                        <li>
                            <ScrollLink to="footer" smooth={true} duration={500}>
                                <div className="menu-text">Liên Hệ</div>
                            </ScrollLink>
                        </li>


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
