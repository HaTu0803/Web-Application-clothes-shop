import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../Images/logo.png";
import { useCartContext } from '../../screens/CartContext';

const Body = () => {
    const { cartItems } = useCartContext();
    const handleSearch = () => {
        const searchInput = document.querySelector('.header');
        searchInput.classList.toggle('active');
    }

    return (
        <div className="header">
            <Link to="/" className="logo">
                <img src={Logo} alt="Logo" loading='lazy' />
            </Link>

            <nav>
                <ul className="main-menu">
                    <li><Link to="/user/newproducts" className="menu-text">Hàng Mới</Link></li>
                    <li className="dropdown">
                        <Link to="/user/products" className="menu-text">Sản Phẩm <FontAwesomeIcon icon={faCaretDown} /></Link>
                        <div className="dropdown-content">
                            <div className="Type1"><Link to="/user/categorytype/Váy"><h5>VÁY</h5></Link>
                                <ul className='Product'>
                                    <li className='Type'><Link to="/user/category/Váy mini">Váy mini</Link></li>
                                    <li className='Type'><Link to="/user/category/Váy midi">Váy midi</Link></li>
                                    <li className='Type'><Link to="/user/category/Váy maxi">Váy maxi</Link></li>
                                    <li className='Type'><Link to="/user/category/Váy Skirls">Váy Skirls</Link></li>
                                </ul>
                            </div>
                            <div className="Type2"><Link to="/user/categorytype/Áo"><h5>Áo</h5> </Link>
                                <ul className='Product'>
                                    <li className='Type'><Link to="/user/category/Áo sơ mi">Áo sơ mi</Link></li>
                                    <li className='Type'><Link to="/user/category/Áo Blouse">Áo Blouse</Link></li>
                                    <li className='Type'><Link to="/user/category/Áo khoác dài">Áo khoác dài</Link></li>
                                    <li className='Type'><Link to="/user/category/Áo Blazers">Áo Blazers</Link></li>
                                    <li className='Type'><Link to="/user/category/Áo len">Áo len</Link></li>
                                </ul>
                            </div>
                            <div className="Type3"><Link to="/user/categorytype/Quần"><h5>Quần</h5> </Link>
                                <ul className='Product'>
                                    <li className='Type'><Link to="/user/category/Quần dài">Quần dài</Link></li>
                                    <li className='Type'><Link to="/user/category/Quần Jean">Quần Jean</Link></li>
                                </ul></div>
                        </div>
                    </li>

                    <li className='dropdown-col'><Link to="/user/producttags" className="menu-text">Bộ Sưu Tập <FontAwesomeIcon icon={faCaretDown} /></Link>
                        <div className="dropdown-collection">
                            <div className="Type5">
                                <ul className='Product'>
                                    <li className='Type'><Link to="/user/producttag/Office Wear">Office Wear</Link></li>
                                    <li className='Type'><Link to="/user/producttag/Vacation Wear">Vacation Wear</Link></li>
                                    <li className='Type'><Link to="/user/producttag/Casual Wear">Casual Wear</Link></li>
                                    <li className='Type'><Link to="/user/producttag/Party Wear">Party Wear</Link></li>
                                </ul></div>
                            <div className="Type6">
                                <ul className='Product'>
                                    <li className='Type'><Link to="/user/producttag/Xuân Hè">Xuân Hè</Link></li>
                                    <li className='Type'><Link to="/user/producttag/Thu Đông">Thu Đông</Link></li>
                                </ul></div>
                        </div>
                    </li>
                    <li>
                        <ScrollLink to='footer' smooth={true} duration={500}>
                            <div className="menu-text">Liên Hệ</div>
                        </ScrollLink>
                    </li>



                </ul>
            </nav>
            <nav className="menu-right">
                <input type="text" className="search-input mainLoginInput" name="search" placeholder="Tìm Kiếm..." />
                <span className="menu-text menu-icon" onClick={handleSearch}><FontAwesomeIcon icon={faSearch} /></span>
                <Link className="menu-text menu-icon"><FontAwesomeIcon icon={faUser} /></Link>
                <Link to="/user/cart" className="menu-text menu-icon icon-shopping">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <i className='quantity-items'>{cartItems.length}</i>
                </Link>
            </nav>
        </div>
    );
}

export default Body;
