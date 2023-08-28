import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import profile from "./../Images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";
import "../css/Sidebar.css";

const Sidebar = () => {
  useEffect(() => {
    const handleSidebarOpen = () => {
      const sidebar = document.querySelector(".sidebar");
      sidebar.classList.toggle("close");
    };

    const handleSidebarClose = () => {
      const sidebar = document.querySelector(".sidebar");
      sidebar.classList.add("close", "hoverable");
    };

    const handleSidebarExpand = () => {
      const sidebar = document.querySelector(".sidebar");
      sidebar.classList.remove("close", "hoverable");
    };

    const submenuItems = document.querySelectorAll(".submenu_item");

    const handleSubmenuItemToggle = (event) => {
      const clickedItem = event.target;
      submenuItems.forEach((item) => {
        if (item !== clickedItem) {
          item.classList.remove("show_submenu");
        }
      });
      clickedItem.classList.toggle("show_submenu");
    };

    const handleWindowResize = () => {
      const sidebar = document.querySelector(".sidebar");
      if (window.innerWidth < 768) {
        sidebar.classList.add("close");
      } else {
        sidebar.classList.remove("close");
      }
    };

    const sidebarOpen = document.querySelector("#sidebarOpen");
    const sidebarClose = document.querySelector(".collapse_sidebar");
    const sidebarExpand = document.querySelector(".expand_sidebar");
    const sidebar = document.querySelector(".sidebar");

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
    sidebarOpen.addEventListener("click", handleSidebarOpen);
    sidebarClose.addEventListener("click", handleSidebarClose);
    sidebarExpand.addEventListener("click", handleSidebarExpand);
    submenuItems.forEach((item) => {
      item.addEventListener("click", handleSubmenuItemToggle);
    });

    window.addEventListener("resize", handleWindowResize);

    return () => {
      sidebarOpen.removeEventListener("click", handleSidebarOpen);
      sidebarClose.removeEventListener("click", handleSidebarClose);
      sidebarExpand.removeEventListener("click", handleSidebarExpand);
      submenuItems.forEach((item) => {
        item.removeEventListener("click", handleSubmenuItemToggle);
      });
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav className="sidebar">
      <div className="menu_content">
        <div className="logo_item">
          <FontAwesomeIcon icon={faBars} id="sidebarOpen" />
          <img src={profile} alt="" />
          <span className="role">ADMIN</span>
        </div>
    
            <Link to="/" className="nav_link">
              <span className="navlink_icon">
                <FontAwesomeIcon icon={faTachometerAlt} />
              </span>
              <span className="navlink">Dashboard</span>
            </Link>
      

     
            <Link to="/products" className="nav_link">
              <span className="navlink_icon">
                <FontAwesomeIcon icon={faCartShopping} />
              </span>
              <span className="navlink">Products</span>
            </Link>
  

        
            <Link to="/categories" className="nav_link">
              <span className="navlink_icon">
                <FontAwesomeIcon icon={faListAlt} />
              </span>
              <span className="navlink">Categories</span>
            </Link>
        
         
            <Link to="/categories" className="nav_link">
              <span className="navlink_icon">
                <FontAwesomeIcon icon={faShippingFast} />
              </span>
              <span className="navlink">Orders</span>
            </Link>
          
            <div className="nav_link">
              <span className="navlink_icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span className="navlink">User</span>
            </div>
       

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
  );
};

export default Sidebar;
