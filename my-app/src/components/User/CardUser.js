import React, {useState, useEffect}  from 'react';
import '../../css/CardUser.css';
import axios from 'axios';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PaginationComponent from './PaginationComponent';



const CardUser = () => {

   

    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(0); 
    const navigate = useNavigate();
      
    
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get('http://localhost:3000/api/user/');
            setUsers(response.data);
          } catch (error) {
            console.error(error);
          }
        };
        
        fetchUsers();
      }, []);
      
    
    const itemsPerPage = 9;

    const pageCount = Math.ceil(users.length / itemsPerPage);

    const handlePageClick = async (data) => {

    const selectedPage = await data.selected;
    
    setCurrentPage(selectedPage);

};

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const usersToDisplay = users.slice(startIndex, endIndex);
    

    const handleDeleteConfirmation = async (UserID) => {
      const isConfirmed = window.confirm(`Bạn có chắc muốn xóa người dùng ID ${UserID} này?`);
      if (isConfirmed) {
        try {
          const userInfo = users.find(user => user.UserID === UserID);
          if (userInfo) {
              const { Name } = userInfo;
              await deleteUser(UserID, Name);
          }

      } catch (error) {
          console.error(error);
      }
      }
  };

  const deleteUser = async (UserID, Name) => {
      try {
          const response = await axios.delete(`http://localhost:3000/api/user/${UserID}`);
          console.log(response.data);
          alert(`Người dùng ${Name} đã bị xóa`);
          navigate.push('/user'); 
   
      } catch (error) {
          console.error(error);
      }
  };
    return (

        <div className = "users-container">


        {usersToDisplay.map((data) => (
           
    

        <div className = "card-holder"  key={data.UserID} >
            <div className = "card-user">
                <div className = "avatar-user">
                <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/OOjs_UI_icon_userAvatar-constructive.svg/1200px-OOjs_UI_icon_userAvatar-constructive.svg.png" alt="" className= 'avatar' />
                </div>
                <div className = "card-name">
                    <p>{data.UserName}</p>
                </div>
                <div className = "card-role">
                    <p>{data.TypeAccount}</p>
                </div>
                <div className = "card-mail">
                <p>{data.Email}</p>
                </div>
            </div>
            <div className = "user-action">
            <button className = 'edit-container'>
            <Link to={`/EditUser/${data.UserID}`}>
            <EditOutlined className="edit-icon" />
            </Link>
            </button>
            
            <button className = 'remove-container' onClick={() => handleDeleteConfirmation(data.UserID)}>
            <DeleteOutlined className="delete-icon"  /></button>
            </div>
        </div>

        ))}

        <PaginationComponent pageCount={pageCount} handlePageClick={handlePageClick} />
        </div>
 
    );
}

export default CardUser;
