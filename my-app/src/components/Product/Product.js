import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import "./Product.css";
import { Link, useParams } from 'react-router-dom';
import ReactSimplyCarousel from 'react-simply-carousel';

const Product = () => {
    const [currentValue, setCurrentValue] = useState(1);
    const [selectedSize, setSelectedSize] = useState(""); // Thêm state cho kích thước
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const [data, setProducts] = useState([]);


    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:5000/api/products/${id}')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleSizeClick = (size) => {
        setSelectedSize(size); // Cập nhật kích thước khi người dùng chọn
    };

    const handleDecrease = () => {
        if (currentValue > 1) {
            setCurrentValue(prevValue => prevValue - 1);
        }
    };

    const handleIncrease = () => {
        setCurrentValue(prevValue => prevValue + 1);
    };

    return (
        <>
            <div className="product">
                <div className="sort">
                    <p className="info-home"><Link to="/"><FontAwesomeIcon className='icon-home' icon={faHome} /></Link>/ {data && data.ProductName}</p>
                </div>
                <div className="product-details">
                    <img className="product-img" src={data.Photo} alt={data.Photo} />
                    <div className="product-info">
                        <h1 className="product-name">{data.ProductName}</h1>
                        <p className="product-price">{data.Price}</p>
                        <div className="product-discount">
                            <ul>
                                <li>Đồng giá Ship toàn quốc 25.000đ</li>
                                <li>Hỗ trợ 10.000 phí Ship cho đơn hàng từ 200.000đ</li>
                                <li>Miễn phí Ship cho đơn hàng từ 300.000đ</li>
                                <li>Đổi trả trong 30 ngày nếu sản phẩm lỗi bất kì</li>
                            </ul>
                        </div>
                        <div className="product-color">  <h2>Màu sắc: {/* ProductData[1].color */}</h2>
                            <button className="product-button1">
                                <a href="" ><img className="product-button1-img" src={data.Photo} alt={data.Photo} /></a>
                            </button>
                        </div>
                        <div className="product-size">
                            <div className="product-size-par">
                                <h2>Size: </h2>
                                <p className="selected-size">{selectedSize}</p>
                            </div>
                            <button className={`product-button2 ${selectedSize === 'XS' ? 'selected' : ''}`} onClick={() => handleSizeClick('XS')}>XS</button>
                            <button className={`product-button2 ${selectedSize === 'S' ? 'selected' : ''}`} onClick={() => handleSizeClick('S')}>S</button>
                            <button className={`product-button2 ${selectedSize === 'M' ? 'selected' : ''}`} onClick={() => handleSizeClick('M')}>M</button>
                            <button className={`product-button2 ${selectedSize === 'L' ? 'selected' : ''}`} onClick={() => handleSizeClick('L')}>L</button>
                            <button className={`product-button2 ${selectedSize === 'XL' ? 'selected' : ''}`} onClick={() => handleSizeClick('XL')}>XL</button>
                        </div>

                        <p className="product-description"><h1>Miêu tả sản phẩm :</h1> {data.Descrip}</p>
                        <div className="product-quantity">
                            <h2>Số lượng: </h2>
                            <button className="minus-btn-quantity" onClick={handleDecrease}>-</button>
                            <span className="input-quantity" >{currentValue} </span>
                            <button className="plus-btn-quantity" onClick={handleIncrease}>+</button>
                        </div>
                        <div className="product-static">
                            <button className="product-add">Thêm vào giỏ hàng</button>
                            {/* <button className="product-like"><FontAwesomeIcon icon={faHeart} /></button> */}
                        </div>
                        <div className="product-choosesize">
                            <hr></hr>
                            <h2>Chọn kích thước</h2>
                            <p>Chọn kích thước dựa trên số đo của bạn. Để biết thêm thông tin về các số đo, hãy xem bảng đo của chúng tôi.</p>
                            <table className="table-size">
                                <tr>
                                    <th>SIZE</th>
                                    <th>KÍCH THƯỚC NGỰC</th>
                                    <th>KÍCH THƯỚC VÒNG EO</th>
                                    <th>VÒNG HÔNG</th>
                                </tr>
                                <tr>
                                    <td>XS</td>
                                    <td>78</td>
                                    <td>60</td>
                                    <td>86</td>
                                </tr>
                                <tr>
                                    <td>S</td>
                                    <td>82</td>
                                    <td>64</td>
                                    <td>90</td>
                                </tr>
                                <tr>
                                    <td>M</td>
                                    <td>86</td>
                                    <td>68</td>
                                    <td>94</td>
                                </tr>
                                <tr>
                                    <td>L</td>
                                    <td>90</td>
                                    <td>72</td>
                                    <td>98</td>
                                </tr>
                                <tr>
                                    <td>XL</td>
                                    <td>94</td>
                                    <td>76</td>
                                    <td>102</td>
                                </tr>
                            </table>
                        </div>
                        <div className="product-policy">
                            <hr></hr>
                            <h2>Chính sách hoàn trả</h2>
                            <p>Chúng tôi muốn khách hàng hài lòng với việc mua hàng của họ. Tuy nhiên, nếu bạn đổi ý hoặc muốn đổi lấy kích thước,
                                màu sắc hoặc kiểu dáng khác, vui lòng trả lại (các) mặt hàng đó trong vòng 30 ngày kể từ ngày mua và chúng tôi sẽ hoàn
                                lại tiền cho bạn.</p>
                        </div>
                    </div>
                </div>
                <div className="product-same">
                    <h1>Sản phẩm tương tự</h1>
                    <ReactSimplyCarousel
                        activeSlideIndex={activeSlideIndex}
                        onRequestChange={setActiveSlideIndex}
                        itemsToScroll={1}
                        forwardBtnProps={{
                            style: {
                                alignSelf: 'center',
                                background: 'black',
                                border: 'none',
                                borderRadius: '50%',
                                color: 'white',
                                cursor: 'pointer',
                                fontSize: '20px',
                                height: 30,
                                lineHeight: 1,
                                textAlign: 'center',
                                width: 30,
                            },
                            children: <span>{`>`}</span>,
                        }}
                        backwardBtnProps={{
                            style: {
                                alignSelf: 'center',
                                background: 'black',
                                border: 'none',
                                borderRadius: '50%',
                                color: 'white',
                                cursor: 'pointer',
                                fontSize: '20px',
                                height: 30,
                                lineHeight: 1,
                                textAlign: 'center',
                                width: 30,
                            },
                            children: <span>{`<`}</span>,
                        }}
                        responsiveProps={[
                            {
                                itemsToShow: 6,  // Duy trì số lượng thẻ ở đây
                                itemsToScroll: 1,
                                width: 1000,    // Số lớn để hiển thị tất cả thẻ trên một trang
                            },
                        ]}
                        speed={500}
                        easing="ease-in-out"
                    >
                        

                    </ReactSimplyCarousel>
                </div>

            </div>
        </>
    );
};

export default Product;
