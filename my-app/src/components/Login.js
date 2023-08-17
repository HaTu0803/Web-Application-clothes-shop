import React from 'react';
import "../css/Login.css";
import Collection from "../Images/collections.png";



const Login = () => {
    return (

        <body>
            <div class="container">
                <div class="login">
                    <h3 class="title">User Login</h3>
                    <div class="text-input">
                        <i class="ri-user-fill"></i>
                        <input type="text" placeholder="Username">
                        </input>
                    </div>
                    <div class="text-input">
                        <i class="ri-lock-fill"></i>
                        <input type="password" placeholder="Password">
                        </input>
                    </div>
                    <button class="login-btn">LOGIN</button>
                    <a href="#" class="forgot">Forgot Username/Password?</a>
                    <div class="create">
                        <a href="#">Create Your Account</a>
                        <i class="ri-arrow-right-fill"></i>
                    </div>
                </div>
            </div>
        </body>

    );
}

export default Login;
