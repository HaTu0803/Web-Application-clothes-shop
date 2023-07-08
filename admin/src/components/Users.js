import React from 'react';
import CardUser from './CardUser';
import "../css/Users.css";

const Users = () => {

    return (
       <div className = "card-app">
       <div className = "add-button">+ Thêm mới</div>
       <div className = "card-container">
       <CardUser />
       <CardUser />
       <CardUser />
       <CardUser />
       <CardUser />
       <CardUser />
        </div>
        </div>
    );
}

export default Users;
