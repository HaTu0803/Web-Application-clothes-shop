import React from 'react';
import "../css/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from "../Images/logo.png";
import { faSearch, faUser, faShoppingCart} from '@fortawesome/free-solid-svg-icons';


const Body = () => {
    return (

            <div className = "container">
               <div className="header">
        <a href = "index.html"><img src= {Logo} className="logo"/></a>
        <nav>
        
            <ul className = "main-menu">
           
            <li><a href ="" className = "menu-text">Hàng Mới</a></li>
            
            <li className="dropdown"><a href =""  className = "menu-text">Sản Phẩm</a>
                <div className="dropdown-content">
                    <div className="Type1"><h5>GIÀY</h5>
                        <ul className='Product'>
                            <li className='Type'><a>Giày Sneaker</a></li>
                            <li className='Type'><a>Giày cao gót</a></li>
                            <li className='Type'><a>Giày búp bê</a></li>
                            <li className='Type'><a>Giày nike</a></li>
                        </ul>
                    </div>
                    <div className="Type2"><h5>TÚI</h5>
                        <ul className='Product'>
                            <li className='Type'><a>Túi Hobo</a></li>
                            <li className='Type'><a>Túi Saddle</a></li>
                            <li className='Type'><a>Túi Baguette</a></li>
                            <li className='Type'><a>Túi Handle</a></li>
                        </ul>
                    </div>
                    <div className="Type3"><h5>PHỤ KIỆN</h5>
                        <ul className='Product'>
                            <li className='Type'><a>Nón</a></li>
                            <li className='Type'><a>Thắt lưng</a></li>
                            <li className='Type'><a>Kính</a></li>
                            <li className='Type'><a>Vớ</a></li>
                        </ul></div>
                    <div className="Type4"><h5>QUẦN ÁO</h5>
                    <ul className='Product'>
                            <li className='Type'><a>Áo sweater</a></li>
                            <li className='Type'><a>Áo tay ngắn</a></li>
                            <li className='Type'><a>Áo trench coat</a></li>
                            <li className='Type'><a>Áo voan nữ</a></li>
                            <li className='Type'><a>Áo sheer</a></li>
                            <li className='Type'><a>Áo pull</a></li>
                            <li className='Type'><a>Áo len</a></li>
                            <li className='Type'><a>Áo keyhole</a></li>
                        </ul></div>
                    <div className="Type5"><h5>BỘ SƯU TẬP</h5>
                        <ul className='Product'>
                            <li className='Type'><a>Active Wear</a></li>
                            <li className='Type'><a>Essentials</a></li>
                            <li className='Type'><a>Polo Premium</a></li>
                            <li className='Type'><a>Coffe Lovers</a></li>
                            <li className='Type'><a>Love Serie 01</a></li>
                            
                        </ul></div>
                </div>  
            </li>            
                              
            <li className='dropdown-col'><a href =""  className = "menu-text">Bộ Sưu Tập</a>
            <div className="dropdown-collection">
                    <div className="Type1"><h5>MÙA XUÂN</h5>
                        <ul className='Product'>
                            <li className='Type'><a>Mini camp</a></li>
                            <li className='Type'><a>Spring Flower</a></li>
                        </ul>
                    </div>
                    <div className="Type2"><h5>MÙA HẠ</h5>
                        <ul className='Product'>
                            <li className='Type'><a>Beach</a></li>
                            <li className='Type'><a>Runner</a></li>
                            <li className='Type'><a>Father's day</a></li>
                            <li className='Type'><a>Moon man</a></li>
                        </ul>
                    </div>
                    <div className="Type3"><h5>MÙA THU</h5>
                        <ul className='Product'>
                            <li className='Type'><a>BĂNG QUA KÝ ỨC</a></li>
                            <li className='Type'><a>NỮ QUYỀN VANG MÃI</a></li>
                            <li className='Type'><a>NHỮNG MẢNH GHÉP THƠ ẤU</a></li>
                            <li className='Type'><a>TINH THẦN VÀ TÍN NGƯỠNG</a></li>
                        </ul></div>
                    <div className="Type4"><h5>MÙA ĐÔNG</h5>
                    <ul className='Product'>
                            <li className='Type'><a>Grepcode</a></li>
                            <li className='Type'><a>Logomania</a></li>
                            <li className='Type'><a>unisex</a></li>
                            <li className='Type'><a>Đa màu sắc</a></li>
                            <li className='Type'><a>Christian Dior</a></li>
                            <li className='Type'><a>Fendi</a></li>
                            <li className='Type'><a>Balenciaga</a></li>
                            <li className='Type'><a>Babydoll</a></li>
                        </ul></div>
                
                </div>
            </li>
            <li><a href =""  className = "menu-text">Liên Hệ</a></li>
        
            <nav className = "menu-right">

            <input type="text" className = "search-input  mainLoginInput"  name="search" placeholder="Tìm Kiếm..."  />
            <a href ="" target ="_blank" className = "menu-text menu-icon"><FontAwesomeIcon icon={faSearch} /></a>
            <a href ="" target ="_blank" className = "menu-text menu-icon"><FontAwesomeIcon icon={faUser} /></a>
            <a href ="" target ="_blank" className = "menu-text menu-icon"><FontAwesomeIcon icon={faShoppingCart}/></a>
            </nav>
            
            </ul>
        
        </nav>
       </div>
        </div>
    );
}

export default Body;
