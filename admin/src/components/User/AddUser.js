import React, { useState } from 'react';
import axios from 'axios';
import '../../css/AddUser.css';

const AddUser = () => {
    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');
    const [typeAccount, setTypeAccount] = useState('');
    const typeAccountOptions = ['user', 'admin', 'staff'];

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/user', {
                UserName: userName,
                Pass: pass,
                TypeAccount: typeAccount
            });

            console.log(response.data);

            setUserName('');
            setPass('');
            setTypeAccount('');

  

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="add-user-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userName">User Name:</label>
                    <input type="text" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="pass">Password:</label>
                    <input type="password" id="pass" value={pass} onChange={(e) => setPass(e.target.value)} />
                </div>
                <div className="form-group">
                <label>
                TypeAccount:
                <select value={typeAccount} onChange={(e) => setTypeAccount(e.target.value)}>
                    <option value="">Select type</option>
                    {typeAccountOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </label>
                </div>
                <button type="submit">Create user</button>
            </form>
        </div>
    );
};

export default AddUser;
