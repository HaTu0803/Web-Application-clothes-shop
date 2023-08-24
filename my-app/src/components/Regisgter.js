import React from 'react';
import "../css/Login.css";



const Register = () => {
    return (

        <body>
            <div class="container">
                <div class="Register">
                    <h3 class="title">User Register</h3>
                    <div class="text-input">
                        <i class="ri-user-fill"></i>
                        <input type="text" placeholder="Name">
                        </input>
                        
                    </div>
                    <div class="text-input">
                        <i class="ri-user-fill"></i>
                        <input type="text" placeholder="Gmail">
                        </input>
                    </div>
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
                    <div class="text-input">
                        <i class="ri-lock-fill"></i>
                        <input type="password" placeholder="Retype-assword">
                        </input>

                    </div>
                   
                    <button class="Register-btn">REGISTER</button>
                    <div class="create">
                        <a href="#">Login</a>
                        <i class="ri-arrow-right-fill"></i>
                    </div>
                </div>
            </div>
        </body>

    );
}

export default Register;
