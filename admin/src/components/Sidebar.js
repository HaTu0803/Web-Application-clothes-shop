import React, { useEffect } from 'react';
import profile from '../images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router,Routes, Route, NavLink } from 'react-router-dom';
import Users from './Users';
import Dashboard from './Dashboard';
import Orders from './Orders';
import Categories from './Categories';
import OrderDetail from './Order-detail';
import {
  faTachometerAlt,
  faCartShopping,
  faCartPlus,
  faListAlt,
  faShippingFast,
  faUser,
  faCog,
  faQuestionCircle,
  faSun,
  faBars,
  faSignOut,
  faSignIn
} from '@fortawesome/free-solid-svg-icons';
import '../css/Sidebar.css';
import { Category } from '@material-ui/icons';

const Sidebar = () => {
  useEffect(() => {
    const handleSidebarOpen = () => {
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.toggle('close');
    };

    const handleSidebarClose = () => {
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.add('close', 'hoverable');
    };

    const handleSidebarExpand = () => {
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.remove('close', 'hoverable');
    };

    const handleDarkLightToggle = () => {
      const body = document.querySelector('body');
      body.classList.toggle('dark');
    };

    const submenuItems = document.querySelectorAll('.submenu_item');

    const handleSubmenuItemToggle = (event) => {
      const clickedItem = event.target;
      submenuItems.forEach((item) => {
        if (item !== clickedItem) {
          item.classList.remove('show_submenu');
        }
      });
      clickedItem.classList.toggle('show_submenu');
    };

    const handleWindowResize = () => {
      const sidebar = document.querySelector('.sidebar');
      if (window.innerWidth < 768) {
        sidebar.classList.add('close');
      } else {
        sidebar.classList.remove('close');
      }
    };

 
    const darkLight = document.querySelector('#darkLight');
    const sidebarOpen = document.querySelector('#sidebarOpen');
    const sidebarClose = document.querySelector('.collapse_sidebar');
    const sidebarExpand = document.querySelector('.expand_sidebar');
    const sidebar = document.querySelector('.sidebar');

    sidebar.addEventListener("mouseenter", () => {
      if (sidebar.classList.contains("hoverable")) {
        sidebar.classList.remove("close");
      }
    });
    sidebar.addEventListener("mouseleave", () => {
      if (sidebar.classList.contains("hoverable")) {
        sidebar.classList.add("close");
      }
    });
    sidebarOpen.addEventListener('click', handleSidebarOpen);
    sidebarClose.addEventListener('click', handleSidebarClose);
    sidebarExpand.addEventListener('click', handleSidebarExpand);
    darkLight.addEventListener('click', handleDarkLightToggle);
    submenuItems.forEach((item) => {
      item.addEventListener('click', handleSubmenuItemToggle);
    });

    window.addEventListener('resize', handleWindowResize);

    return () => {
      sidebarOpen.removeEventListener('click', handleSidebarOpen);
      sidebarClose.removeEventListener('click', handleSidebarClose);
      sidebarExpand.removeEventListener('click', handleSidebarExpand);
      darkLight.removeEventListener('click', handleDarkLightToggle);
      submenuItems.forEach((item) => {
        item.removeEventListener('click', handleSubmenuItemToggle);
      });
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <>
    <Router>
      <nav className="navbar">
        <div className="logo_item">
          <FontAwesomeIcon icon={faBars} id="sidebarOpen" />
          <img src={profile} alt="" />
          ADMIN
        </div>

        <div className="search_bar">
          <input type="search" placeholder="Tìm Kiếm" />
        </div>

        <div className="navbar_content">
          <FontAwesomeIcon icon={faSun} id="darkLight" />
        </div>
      </nav>

      <nav className="sidebar">
        <div className="menu_content">
          <ul className="menu_items">
            <li className="item">
            <NavLink to="/">
              <div className="nav_link">
                <span className="navlink_icon">
                  <FontAwesomeIcon icon={faTachometerAlt} />
                </span>
                <span className="navlink">Dashboard</span>
              </div>
              </NavLink>
            </li>

            <li className="item">
              <div className="nav_link">
                <span className="navlink_icon">
                  <FontAwesomeIcon icon={faCartShopping} />
                </span>
                <span className="navlink">Products</span>
              </div>
            </li>

            <li className="item">
              <div className="nav_link">
                <span className="navlink_icon">
                  <FontAwesomeIcon icon={faCartPlus} />
                </span>
                <span className="navlink">Add Products</span>
              </div>
            </li>

            <li className="item">
            <NavLink to="/Categories">
              <div className="nav_link">
                <span className="navlink_icon">
                  <FontAwesomeIcon icon={faListAlt} />
                </span>
                <span className="navlink">Categories</span>
              </div>
              </NavLink>
            </li>

            <li className="item">
            <NavLink activeClassName="selected" to="/Orders">
              <div className="nav_link">
                <span className="navlink_icon">
                  <FontAwesomeIcon icon={faShippingFast} />
                </span>
                <span className="navlink">Orders</span>
              </div>
              </NavLink>
            </li>

            <li className="item">
            <NavLink activeClassName="selected" to="/Users">
              <div className="nav_link">
                <span className="navlink_icon">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <span className="navlink">Users</span>
              </div>
              </NavLink>
            </li>

            <ul className="sidebar_bottom">
              <li className="item">
                <div className="nav_link">
                  <span className="navlink_icon">
                    <FontAwesomeIcon icon={faCog} />
                  </span>
                  <span className="navlink">Application Setting</span>
                </div>
              </li>
              <li className="item">
                <div className="nav_link">
                  <span className="navlink_icon">
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </span>
                  <span className="navlink">Get Technical Help</span>
                </div>
              </li>
            </ul>
          </ul>

          <div className="bottom_content">
            <div className="bottom expand_sidebar">
              <span>Expand</span>
              <FontAwesomeIcon icon={faSignIn} />
            </div>
            <div className="bottom collapse_sidebar">
              <span>Collapse</span>
              <FontAwesomeIcon icon={faSignOut} />
            </div>
          </div>
        </div>
      </nav>
      <Routes>
                 <Route exact path='/' element={< Dashboard />}></Route>
                 <Route exact path='/Users' element={< Users />}></Route>
                 <Route exact path='/Orders' element={< Orders />}></Route>
                 <Route exact path='/Categories' element={< Categories />}></Route>
                 <Route exact path='/Order-detail' element={< OrderDetail />}></Route>
          </Routes>
      </Router>
    </>
  );
};

export default Sidebar;
