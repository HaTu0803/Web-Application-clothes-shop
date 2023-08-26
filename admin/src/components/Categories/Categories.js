import React, {useState, useEffect} from 'react';
import {Card} from 'antd';
import axios from 'axios';
import '../../css/Categories.css';
import { Link } from 'react-router-dom'; // Import the Link component from React Router

import {EditOutlined, DeleteOutlined, ReadOutlined} from '@ant-design/icons';

  
  const Categories = () => {


    const [categories, setCategories] = useState([]);

    useEffect(() => {
      axios
        .get('http://localhost:3000/api/categories/categories/')
        .then((res) => {
          setCategories(res.data);
        })
        .catch((err) => console.log(err));
    }, []);
      return (
          <div className = "Categories-container">
          <div className = "left-container">
          <div className="category_bar">
          <p>Tên danh mục</p>
          <input type="text" className = "input1" placeholder="Nhập tên" />
          </div>
          
          <div className = "filter-button">Tạo mới</div>
          </div>
          { <div className = "right-container">
          <table className='table'>
            <thead>
              <tr>
              <th>ID danh mục</th>
              <th>Tên danh mục</th>
              </tr>
            </thead>
            <tbody>
                {categories.map((data, index)=>{
                    return <tr key={index}>
                      <td>
                        {data.CategoryID}
                      </td>
                      <td>
                        {data.CategoryName}
                      </td>
                      <td>
                      <div className='icon-wrapper'>
              <div className='column'>
                <Link
                    to={`/product/productdetails/${data.ProductID}`}
                    className='detail-link'
                  >
                    <ReadOutlined className='detail-icon' />
                  </Link>
                  </div>

                  <div className='column'>
                  <Link
                    to={`/product/editproduct/${data.ProductID}`}
                    className='edit-link'
                  >
                    <EditOutlined className='edit-icon' />
                  </Link>
                </div>

                {/* <div className='column' onClick={handleDeleteClick(data.ProductID)}> */}
                <div className='column' >

                    <DeleteOutlined className='delete-icon' />
                </div>
       
              </div>
                      </td>
                    </tr>
                })}
            </tbody>
         
        </table>
          
          </div>
         }
          </div>
      );
  }
  
  export default Categories;
  
  