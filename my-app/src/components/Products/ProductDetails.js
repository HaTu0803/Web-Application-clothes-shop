                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           rt React, {useState,                                                                                                                                                                                                                                                                                 useEffect, useMemo} from 'react';
// import {Card} from 'antd';
import '../../css/Product.css';
import ProductController from '../Controller/ProductController';
// import { Link } from 'react-router-dom';
// import EditProduct from './EditProduct';

// const {Meta} = Card;

/**
 * Represents a component that displays a list of
 * products and allows sorting and searching.
 * @return {boolean}
 */
function ProductDetail() {
    const [products, setProducts] = useState([]);

    const currentPath = window.location.pathname;
  const pathSegments = currentPath.split('/');
  const ProductID = useMemo(() => {
    return pathSegments[pathSegments.length - 1];
  }, []);
  const doSomething = async () =>{
    const product = await
          ProductController.getProductByID(ProductID);
          console.log(product);
          if (product) {
            setProducts(product);
          }
  };
  useEffect(() => {
    doSomething();
  }, [ProductID]);

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
              <span>{products.ProductID}</span>
                <span>{products.ProductName}</span>
                <span>{products.Descrip}</span>
                <span>{products.CategoryID}</span>
                <span>{products.SizeName}</span>
                <span>{products.ColorName}</span>
                <span>{products.Quantity}</span>
                <span>{products.Price}</span>
              </div>
            </div>
        </div>
        </div>

    </>
  );
}

export default ProductDetail;


