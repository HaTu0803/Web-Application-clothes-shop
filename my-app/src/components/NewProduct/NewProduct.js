import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Card from '../Card';
import { ProductData } from "../../Helpers/ProductData";
import Footer from '../Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import "../../css/NewProduct.css";
import { Link } from 'react-router-dom';

const NewProduct = () => {
    const [sortOption, setSortOption] = useState('tangdan');
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(20);
    const [sortedProductData, setSortedProductData] = useState([]);
    const [selectedPage, setSelectedPage] = useState(1);

    useEffect(() => {
        sortProductData();
    }, [sortOption]);

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const sortProductData = () => {
        const sortedData = [...ProductData].sort((a, b) => {
            const priceA = parseFloat(a.price);
            const priceB = parseFloat(b.price);
            if (sortOption === 'tangdan') {
                return priceA - priceB;
            } else if (sortOption === 'giamdan') {
                return priceB - priceA;
            }
            return 0;
        });
        setSortedProductData(sortedData);
    };

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProductData.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        setSelectedPage(pageNumber);
    };

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(sortedProductData.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <Header />
            <div className="wrapper">
                <div className="sort">
                    <p className="info-home"><Link to="/"><FontAwesomeIcon className='icon-home' icon={faHome}/></Link>/Hàng Mới</p>
                    
                    <select id="operators" onChange={handleSortChange} value={sortOption}>
                        <option value="tangdan">Giá tăng dần</option>
                        <option value="giamdan">Giá giảm dần</option>
                    </select>

                    <div className="pagination1">
                    {pageNumbers.map((number) => (
                        <button
                            key={number}
                            onClick={() => paginate(number)}
                            style={{
                                backgroundColor: selectedPage === number ? '#ee4266' : '#eee',
                            }}
                        >
                            {number}
                        </button>
                    ))}
                </div>

                </div>
                <div className="row">
                    {currentProducts.map((item, index) => (
                        <Card key={index} image={item.img} nameProduct={item.nameProduct} price={item.price}></Card>
                    ))}
                </div>
                <div className="pagination">
                    {pageNumbers.map((number) => (
                        <button
                            key={number}
                            onClick={() => paginate(number)}
                            style={{
                                backgroundColor: selectedPage === number ? '#ee4266' : '#eee',
                            }}
                        >
                            {number}
                        </button>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default NewProduct;
