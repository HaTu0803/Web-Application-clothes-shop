import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../css/EditUser.css'; // Import your custom CSS for styling

const EditUser = () => {
    const { userID } = useParams();


    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');
    const [typeAccount, setTypeAccount] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/user/${userID}`);
                const userData = response.data;
                setUserName(userData.UserName);
                setPass(userData.Pass);
                setTypeAccount(userData.TypeAccount);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, [userID]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedUser = {
            UserName: userName,
            Pass: pass,
            TypeAccount: typeAccount
        };

        try {
            await axios.put(`http://localhost:3000/api/user/${userID}`, updatedUser);
            history.push('/'); // Redirect to the desired route after successful update
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="edit-user-container">
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    UserName:
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </label>
                <br />
                <label>
                    Pass:
                    <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
                </label>
                <br />
                <label>
                    TypeAccount:
                    <select value={typeAccount} onChange={(e) => setTypeAccount(e.target.value)}>
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
