import React, {useState, useEffect} from 'react';
import {Card} from 'antd';
import axios from 'axios';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import '../../css/Product.css';
import { Link } from 'react-router-dom'; // Import the Link component from React Router

const {Meta} = Card;

function Product() {
  const [products, setProducts] = useState([]);
  // const [sortedProducts, setSortedProducts] = useState([]);
  // const [selectedOption, setSelectedOption] = useState('');
  // const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState(null); // 'highest' or 'lowest'

  // const deletehandler = (id) => {
  //   if (window.confirm("Are you sure??")) {
  //     dispatch(deleteProduct(id));
  //   }
  // };
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };
  // const handleSortChange = (event) => {
  //   setSortBy(event.target.value);
  // const SortingOptions = {
  //   HIGHEST_PRICE: 'Giá cao nhất',
  //   LOWEST_PRICE: 'Giá thấp nhất',
  //   NEWEST: 'Mới nhất',
  //   BEST_SELLER: 'Mua nhiều nhất',
  // };

  
  useEffect(() => {
    axios.get('http://localhost:3000/api/products/')
      .then(res => {
        setProducts(res.data)
        setSortedProducts(res.data);
      }
      )
      .catch(err => console.log(err));
  }, []);

  const sortedProducts = [...products];
  if (sortBy === 'highest') {
    sortedProducts.sort((a, b) => b.Price - a.Price);
  } else if (sortBy === 'lowest') {
    sortedProducts.sort((a, b) => a.Price - b.Price);
  }
  return (
    <>
    <div className='Header-container'>
    <div className="left-column">
    <div className="group">
      <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
      <input placeholder="Search" type="search" className="input"></input>
    </div>
    </div>
    <div className="right-column">

    <div className="sort-dropdown">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" value={sortBy} onChange={handleSortChange}>
            <option value="">Tùy chọn</option>
            <option value="highest">Giá cao nhất</option>
            <option value="lowest">Giá thấp nhất</option>
          </select>
        </div>
        </div>
 
    </div>
    <div className="MainProduct-container">
        <div id="product">
          
          {sortedProducts.map((data) => (
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





