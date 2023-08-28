import React from 'react';
import CardUser from './CardUser';
import "../../css/Users.css";
import { Link } from 'react-router-dom'; 
const Users = () => {
    
    return (
       <div className = "card-app">
       <button className = "add-button"><Link to={`/AddUser`} id = "link">Thêm Mới</Link></button>
       <div className = "card-container">
       <CardUser />
        </div>
        </div>
    );
}

export default Users;
