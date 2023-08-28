import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../css/EditUser.css'; 

const EditUser = () => {
    const { UserID } = useParams();
    const [Name, setName] = useState('');
    const [Pass, setPass] = useState('');
    const [Email, setEmail] = useState('');
    const [Address, setAddress] = useState('');
    const [TypeAccount, setTypeAccount] = useState('');
    const navigate = useNavigate();

    useEffect(() => {

        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/user/${UserID}`);
                const userData = response.data[0];
                setName(userData.Name);
                setPass(userData.Pass);
                setTypeAccount(userData.TypeAccount);
                setEmail(userData.Email);
                setAddress(userData.Address);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, [UserID]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedUser = {
            Name: Name,
            Pass: Pass,
            TypeAccount: TypeAccount,
            Email: Email,
            Address: Address,
        };

        try {
            await axios.put(`http://localhost:3000/api/user/${UserID}`, updatedUser);
            navigate('/user');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="edit-user-container">
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={Name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Pass:
                    <input type="password" value={Pass} onChange={(e) => setPass(e.target.value)} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>
                Address:
                <input type="text" value={Address} onChange={(e) => setAddress(e.target.value)} />
            </label>
            <br />
                <label>
                    TypeAccount:
                    <select value={TypeAccount} onChange={(e) => setTypeAccount(e.target.value)}>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                        <option value="staff">Staff</option>
                    </select>
                </label>
                <br />
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditUser;
