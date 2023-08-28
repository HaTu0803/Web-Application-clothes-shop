import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making API requests
// import "./Login.css";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(null);

    const handleLogin = async () => {
        try {
            // Make API request to authenticate user
            const response = await axios.post('your_api_endpoint', { username, password });
            
            // Handle successful login response here
            console.log('Login successful:', response.data);
        } catch (error) {
            // Handle login error here
            console.error('Login error:', error);
            setLoginError('Invalid username or password.');
        }
    };

    return (
        <body>
            <div className="container">
                <div className="login">
                    <h3 className="title">User Login</h3>
                    <div className="text-input">
                        <i className="ri-user-fill"></i>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="text-input">
                        <i className="ri-lock-fill"></i>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {loginError && <p className="error-message">{loginError}</p>}
                    <button className="login-btn" onClick={handleLogin}>LOGIN</button>
                    <a href="#" className="forgot">Forgot Username/Password?</a>
                    <div className="create">
                        <a href="/register">Create Your Account</a>
                        <i className="ri-arrow-right-fill"></i>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Login;