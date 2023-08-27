import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Link as ScrollLink } from 'react-scroll';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from "../../Images/logo.png";
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../screens/CartContext';
import Card from '../Card/Card';


const Body = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [result, setResult] = useState(null);
    const { cartItems } = useCartContext();

    const handleSearch = () => {
        const searchInput = document.querySelector('.header');
        searchInput.classList.toggle('active');
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            window.location.href = `/search/${searchTerm}`;
        }
    };

    const handleSearchResults = () => {
        setResult({
            Photo: searchResults.Photo,
            ProductName: searchResults.ProductName,
            Price: searchResults.Price
        });
    }

    const handleCloseSearch = (event) => {
        event.stopPropagation();
        setResult(null);
    };

    useEffect(() => {
        if (searchTerm.trim() !== '') {
            axios.get('http://localhost:5000/api/search/' + searchTerm)
                .then(res => setSearchResults(res.data))
                .catch(err => console.log(err));
        } else {
            setSearchResults([]);
        }
    }, [searchTerm]);

    return (
        <div className="container">
            <div className="header">
                <Link to="/" className="logo">
                    <img src={Logo} alt="Logo" loading='lazy' />
                </Link>

                <nav>
                    <ul className="main-menu">
                        <li><Link to="/newproducts" className="menu-text">Hàng Mới</Link></li>
                        <li className="dropdown">
                            <Link to="/products" className="menu-text">Sản Phẩm</Link>
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
                                        <li className='Type'><Link to="/producttag/Office Wear">Office Wear</Link></li>
                                        <li className='Type'><Link to="/producttag/Vacation Wear">Vacation Wear</Link></li>
                                        <li className='Type'><Link to="/producttag/Casual Wear">Casual Wear</Link></li>
                                        <li className='Type'><Link to="/producttag/Party Wear">Party Wear</Link></li>
                                    </ul></div>
                                <div className="Type6">
                                    <ul className='Product'>
                                        <li className='Type'><Link to="/producttag/Xuân Hè">Xuân Hè</Link></li>
                                        <li className='Type'><Link to="/producttag/Thu Đông">Thu Đông</Link></li>
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
                    <input type="text" className="search-input mainLoginInput" name="search" value={searchTerm}
                        onChange={(event) => {
                            setSearchTerm(event.target.value)
                            handleSearchResults()
                        }}
                        onKeyDown={handleKeyPress}
                        placeholder="Tìm Kiếm..."
                    />
                    <div id="searchResults" className="search-results" style={{ display: result ? 'flex' : 'none' }} onClick={handleCloseSearch}

                    >
                        {searchResults.slice(0, 3).map((result) => (
                            <div className="results">
                                <Link to={`/products/${result.ProductID}`}>
                                    <img src={result.Photo} alt={result.Photo} className="results-img"style={{ display: result ? 'flex' : 'none' }} />
                                </Link>
                                <Link to={`/products/${result.ProductID}`}><div className="results-name">{result.ProductName}</div></Link>
                            </div>
                        ))}
                    </div>
                    <span className="menu-text menu-icon" onClick={handleSearch}><FontAwesomeIcon icon={faSearch} /></span>
                    <Link className="menu-text menu-icon"><FontAwesomeIcon icon={faUser} /></Link>
                    <Link to="/cart" className="menu-text menu-icon icon-shopping">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <i className='quantity-items'>{cartItems.length}</i>
                    </Link>
                </nav>
            </div>
        </div>
    );
}

export default Body;
