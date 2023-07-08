import React from 'react';
import '../css/CardUser.css';
import User1 from '../images/avatar-users.png';
import Edit from '../images/pencil.svg';
import Remove from '../images/trash-can.svg';
const CardUser = () => {
    return (
        <div className = "users-container">
        <div className = "card-holder" >
            <div className = "card-user">
                <div className = "avatar-user">
                <img src = {User1} alt="" className= 'avatar' />
                </div>
                <div className = "card-name">
                    <p>ADMIN</p>
                </div>
                <div className = "card-role">
                    <p>admin</p>
                </div>
                <div className = "card-mail">
                <p>admin@am.gmail.com</p>
                </div>
            </div>
            <div class = "user-action">
            <div className = 'edit-container'>
            <img src = {Edit} alt="" className= 'edit-button' />
            </div>
            <div className = 'remove-container'>
            <img src = {Remove} alt="" className= 'remove-button' />
            </div>
            </div>
        </div>
        </div>
    );
}

export default CardUser;
