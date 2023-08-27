import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './SearchProduct.css';
import { Link, useParams } from 'react-router-dom';


const SearchProduct = () => {
    const [sortBy, setSortBy] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(20);
    const [selectedPage, setSelectedPage] = useState(1);
    const [products, setProducts] = useState([]);

    const { name } = useParams();

    useEffect(() => {
        axios.get('http://localhost:5000/api/search/' + name)
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const productCount = products.length;

    const sortedProducts = [...products];
    if (sortBy === 'highest') {
        sortedProducts.sort((a, b) => b.Price - a.Price);
    } else if (sortBy === 'lowest') {
        sortedProducts.sort((a, b) => a.Price - b.Price);
    }

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        setSelectedPage(pageNumber);
    };

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(sortedProducts.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <div className="wrapper">
                <div className="sort">
                    <p className="info-home-productCount"><Link to="/"><FontAwesomeIcon className='icon-home' icon={faHome} /></Link>/{name}</p>
                    <div className="productCount" >{productCount === 0 ? (<h1>Không tìm thấy sản phẩm cho "{name}"</h1>) : (<h1>Có {productCount} sản phẩm được tìm thấy cho "{name}"</h1>)} </div>
                    <select id="operators" onChange={handleSortChange} value={sortBy}>
                        <option value=''>Tùy chọn</option>
                        <option value='highest'>Giá cao nhất</option>
                        <option value='lowest'>Giá thấp nhất</option>
                    </select>

                    <div className="pagination1">
                        {pageNumbers.map((number) => (
                            <button
                                key={number}
                                onClick={() => paginate(number)}
                                style={{
                                    backgroundColor: selectedPage === number ? '#333' : 'white',
                                    color: selectedPage === number ? 'white' : '#333',
                                }}
                            >
                                {number}
                            </button>
                        ))}
                    </div>

                </div>
                <div className="row">
                    {currentProducts.map((data) => (
                        <Card className='card' key={data.ProductID} id={data.ProductID} image={data.Photo} nameProduct={data.ProductName} price={data.Price}></Card>
                    ))}
                </div>
                <div className="pagination">
                    {pageNumbers.map((number) => (
                        <button
                            key={number}
                            onClick={() => paginate(number)}
                            style={{
                                backgroundColor: selectedPage === number ? '#333' : 'white',
                                color: selectedPage === number ? 'white' : '#333',
                            }}
                        >
                            {number}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SearchProduct;
