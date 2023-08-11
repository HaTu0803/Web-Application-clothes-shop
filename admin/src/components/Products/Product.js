import React, {useState, useEffect} from 'react';
import {Card} from 'antd';
import axios from 'axios';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import '../../css/Product.css';
import { Link } from 'react-router-dom'; // Import the Link component from React Router

const {Meta} = Card;

function Product() {
  const [products, setProducts] = useState([]);
  // const dispatch = useDispatch();

  // const deletehandler = (id) => {
  //   if (window.confirm("Are you sure??")) {
  //     dispatch(deleteProduct(id));
  //   }
  // };
  useEffect(() => {
    axios.get('http://localhost:3000/api/products/')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
    <div className="group">
      <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
      <input placeholder="Search" type="search" className="input"></input>
    </div>
    <div className="MainProduct-container">

        <div id="product">
          {products.map((data) => (
            <div className='card' key={data.ProductID}>
              <Link to={`/products/${data.ProductID}`}>
                <img alt={data.ProductName} src={data.Photo} />
              </Link>
              <div className='content'>
                <h3>
                  {data.ProductName}
                </h3>
                <span>${data.Price}</span>
                
                  </div>
                  <div className="icon-wrapper">
  <div className="column">
    <Link to={`/products/${data.ProductID}`} className="edit-link">
      <EditOutlined className="edit-icon" />
    </Link>
  </div>
  <div className="column">
    <Link to={`/products/${data.ProductID}`} className="edit-link">
      <DeleteOutlined className="delete-icon" />
    </Link>
  </div>
</div>

            </div>
          ))}
        </div>
      </div></>
  );
}

export default Product;





