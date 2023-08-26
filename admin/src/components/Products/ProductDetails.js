import React, {useState, useEffect} from 'react';
import {Card} from 'antd';
import axios from 'axios';
import '../../css/Product.css';
import { Link } from 'react-router-dom'; // Import the Link component from React Router
// import EditProduct from './EditProduct'; // Make sure to provide the correct path

const {Meta} = Card;


function ProductDetail() {
    
    const [products, setProducts] = useState([]);

    const {id} = useParams();
  useEffect(() => {
    axios
    axios.get(`http://localhost:3000/api/product/products`+id)
    .then((res) => {
        setProducts(res.data);
        // setProductDetals(res.data);

      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
 <div className='MainProductID-container'>
        <div id='productdetail'>
            <div className='card' key={products.ProductID}>
                <img
                  alt={products.ProductName}
                  src={products.Photo}
                />
              <div className='content'>
                <span>{products.ProductName}</span>
                <span>{products.Descrip}</span>
                <span>{products.CategoryID}</span>
                {/* <span>{productdetails.SizeID}</span>
                <span>{productdetails.ColorID}</span>
                <span>{productdetails.Quantity}</span>
                <span>{productdetails.Price}</span> */}
              </div>
            </div>
        </div>
        </div>

    </>
  );
}

export default ProductDetail;





