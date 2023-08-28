import React, { useState } from 'react';
import axios from 'axios';
import '../../css/AddUser.css';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [UserID, setUserID] = useState('');
    const [UserName, setUserName] = useState('');
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Address, setAddress] = useState('');
    const [Pass, setPass] = useState('');
    const [TypeAccount, setTypeAccount] = useState('');
    const TypeAccountOptions = ['user', 'admin', 'staff'];
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/user', {
                UserID: UserID,
                Name: Name,
                UserName: UserName,
                Pass: Pass,
                TypeAccount: TypeAccount,
                Address: Address,
                Email: Email,
            });

            console.log(response.data);

            setUserID('');
            setUserName('');
            setPass('');
            setTypeAccount('');
            setName('');
            setAddress('');
            setEmail('');
            navigate.push('/user'); 

         

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="add-user-container">
            <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="userName">User ID:</label>
            <input type="text" id="userid" value={UserID} onChange={(e) => setUserID(e.target.value)} />
        </div>
                <div className="form-group">
                    <label htmlFor="userName">User Name:</label>
                    <input type="text" id="userName" value={UserName} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="form-group">
                <label htmlFor="name">Full Name:</label>
                <input type="text" id="name" value={Name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" value={Address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="pass">Password:</label>
                    <input type="password" id="pass" value={Pass} onChange={(e) => setPass(e.target.value)} />
                </div>
                <div className="form-group">
                <label>
                TypeAccount:
                <select value={TypeAccount} onChange={(e) => setTypeAccount(e.target.value)}>
                    <option value="">Select type</option>
                    {TypeAccountOptions.map((option) => (
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
