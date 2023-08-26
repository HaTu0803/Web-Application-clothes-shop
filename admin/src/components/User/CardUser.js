import React, {useState, useEffect}  from 'react';
import '../../css/CardUser.css';
import User1 from '../../images/avatar-users.png';
import axios from 'axios';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';



const CardUser = () => {

   

    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(0); 
      
    
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

    const handlePageClick = data => {

    const selectedPage = data.selected;
    setCurrentPage(selectedPage);

};

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;


    const usersToDisplay = users.slice(startIndex, endIndex);
    

    const handleDeleteConfirmation = async (UserID) => {
      const isConfirmed = window.confirm("Bạn có chắc muốn xóa người dùng này?");
      if (isConfirmed) {
        try {
          await deleteUser(UserID);
    

      } catch (error) {
          console.error(error);
      }
      }
  };

  const deleteUser = async (UserID) => {
      try {
          const response = await axios.delete(`http://localhost:3000/api/user/${UserID}`);
          console.log(response.data);
        
   
      } catch (error) {
          console.error(error);
      }
  };
    return (
        <div className = "users-container">


        {usersToDisplay.map((data) => (
           
    

        <div className = "card-holder" >
            <div className = "card-user">
                <div className = "avatar-user">
                <img src = {User1} alt="" className= 'avatar' />
                </div>
                <div className = "card-name">
                    <p>{data.UserName}</p>
                </div>
                <div className = "card-role">
                    <p>{data.TypeAccount}</p>
                </div>
                <div className = "card-mail">
                <p>{data.UserID}</p>
                </div>
            </div>
            <div class = "user-action">
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

        <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
        </div>
    );
}

export default CardUser;
