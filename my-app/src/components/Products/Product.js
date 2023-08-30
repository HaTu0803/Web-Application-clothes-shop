import React, {useState, useEffect} from 'react';
// import {Card} from 'antd';
import {EditOutlined, DeleteOutlined, ReadOutlined} from '@ant-design/icons';
import '../../css/Product.css';
import {Link} from 'react-router-dom';
import ProductController from '../Controller/ProductController';


// import EditProduct from './EditProduct';
// import {useParams} from 'react-router-dom';

// const {Meta} = Card;

/**
 * Represents a component that displays a list of
 * products and allows sorting and searching.
 * @return {boolean}
 */
function Product() {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [query, setQuery] = useState('');
  // const [selectedCategory, setSelectedCategory] = useState('');

  // const {id} = useParams();
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  // const handleDelete = (id)=>{
  //   axios.delete('http://localhost:3000/deleteproducts/'+id)
  //   .then((res) => {
  //       location.reload();
  //     })
  //     .catch((err) => console.log(err));
  // }

  const sortedProducts = [...products];
  if (sortBy === 'highest') {
    sortedProducts.sort((a, b) => b.Price - a.Price);
  } else if (sortBy === 'lowest') {
    sortedProducts.sort((a, b) => a.Price - b.Price);
  }

  const filteredProducts = sortedProducts.filter(
    (item) =>
      (item.ProductName.toLowerCase().includes(query.toLowerCase()) ||
        item.CategoryID.toLowerCase().includes(query.toLowerCase(),
        )),
  );
  const doSomething = async () =>{
    const product = await
          ProductController.getAllProduct();
          if (product) {
            setProducts(product);
          }
  };
  useEffect(() => {
    doSomething();
  }, []);

  return (
    <>
      <div className='Header-container'>
        <div className='left-column'>
          <div className='group'>
            <svg
              className='icon'
              aria-hidden='true'
              viewBox='0 0 24 24'
            >
              <g>
                <path d='M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20
                11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804
  5.808-2.13l3.66
  3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5
  11c0-4.135
  3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5
  7.5-7.5-3.365-7.5-7.5z'></path>
              </g>
            </svg>
            <input
              placeholder='Search'
              type='search'
              className='input'
              onChange={handleSearchChange}
            ></input>
          </div>
        </div>
        <div className='right-column'>
          <div className='sort-dropdown'>
            <label htmlFor='sort'>Sắp xếp theo </label>
            <select
              id='sort'
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value=''>Tùy chọn</option>
              <option value='highest'>Giá cao nhất</option>
              <option value='lowest'>Giá thấp nhất</option>
            </select>
          </div>
          {/* <div>
            <select
              id='category'
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              {}
              <option value=''>Tất cả danh mục</option>
            </select>
          </div> */}
        </div>
        <div className='create'>
            <Link to='/admin/addproducts'>CREATE +</Link>
        </div>
      </div>
      <div className='MainProduct-container'>
        
        <div id='product'>
          {filteredProducts.map((data) => (
            <div className='card' key={data.ProductID}>
              <Link to={`/admin/productdetails/${data.ProductID}`}>
                <img
                  alt={data.ProductName}
                  src={data.Photo}
                />
              </Link>
              <div className='content'>
                <h3>{data.ProductName}</h3>
                <span>${data.Price}</span>
              </div>
              <div className='icon-wrapper'>
              <div className='column'>
                <Link
                    to={`/admin/productdetails/${data.ProductID}`}
                    className='detail-link'
                  >
                    <ReadOutlined className='detail-icon' />
                  </Link>
                  </div>

                  <div className='column'>
                  <Link
                    to={`/admin/editproduct/${data.ProductID}`}
                    className='edit-link'
                  >
                    <EditOutlined className='edit-icon' />
                  </Link>
                </div>

                <div className='column' >

                    <DeleteOutlined className='delete-icon' />
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </>
  );
}

export default Product;


