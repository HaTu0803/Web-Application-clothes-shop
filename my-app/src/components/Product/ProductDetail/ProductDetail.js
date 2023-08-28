import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import "./ProductDetails.css";
import { Link, useParams } from 'react-router-dom';
import ReactSimplyCarousel from 'react-simply-carousel';
import { ProductDetailData } from '../../../Helpers/ProductData';
import { useCartContext } from '../../../screens/CartContext';

const ProductDetails = () => {
    const [currentValue, setCurrentValue] = useState(1);
    const [selectedSize, setSelectedSize] = useState(""); // Thêm state cho kích thước
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const [item, setItem] = useState([]);
    const { addToCart } = useCartContext();

    const { id } = useParams();

    const handleAddProduct = (currentValue) => {
        const product = {
            id: item.ProductID,
            name: item.ProductName,
            price: item.Price,
            image: item.Photo,
            size: selectedSize,
            quantity: currentValue
        };
        addToCart(product, currentValue);
    };
    useEffect(() => {
        axios.get('http://localhost:5000/api/products/' + id)
            .then(res => {
                setItem(res.data[0]);
            })

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
        <div className="product-container">
            <div className="sort">
                <p className="info-home"><Link to="/"><FontAwesomeIcon className='icon-home' icon={faHome} /></Link>/ {item.ProductName}</p>
            </div>
            <div className="product-details">
                <img className="product-img" src={item.Photo} alt={item.ProductName} />
                <div className="product-info">
                    <h1 className="product-name">{item.ProductName}</h1>
                    <p className="product-price">Giá: {item.Price} đồng</p>
                    <div className="product-discount">
                        <ul>
                            <li>Đồng giá Ship toàn quốc 25.000đ</li>
                            <li>Hỗ trợ 10.000 phí Ship cho đơn hàng từ 200.000đ</li>
                            <li>Miễn phí Ship cho đơn hàng từ 300.000đ</li>
                            <li>Đổi trả trong 30 ngày nếu sản phẩm lỗi bất kì</li>
                        </ul>
                    </div>
                    {/* <div className="product-color">  <h2>Màu sắc: ${item.ColorName}</h2>
                            <button className="product-button1">
                                <img className="product-button1-img" src={item.Photo} alt={product.Photo} />
                            </button>
                        </div> */}
                    <div className="product-size">
                        <div className="product-size-par">
                            <h1>Kích cỡ: <p className="selected-size">{selectedSize}</p></h1>
                        </div>
                        <button className={`product-button2 ${selectedSize === 'S' ? 'selected' : ''}`} onClick={() => handleSizeClick('S')}>S</button>
                        <button className={`product-button2 ${selectedSize === 'M' ? 'selected' : ''}`} onClick={() => handleSizeClick('M')}>M</button>
                        <button className={`product-button2 ${selectedSize === 'L' ? 'selected' : ''}`} onClick={() => handleSizeClick('L')}>L</button>
                        <button className={`product-button2 ${selectedSize === 'XL' ? 'selected' : ''}`} onClick={() => handleSizeClick('XL')}>XL</button>
                        <button className={`product-button2 ${selectedSize === 'XXL' ? 'selected' : ''}`} onClick={() => handleSizeClick('XXL')}>XXL</button>
                    </div>

                    <div className="product-description">
                        <h1>Miêu tả sản phẩm :</h1>
                        <p>{item.Descrip}</p>
                    </div>

                    <div className="product-quantity">
                        <h1>Số lượng: </h1>
                        <div className="product-btn-wrapper">
                            <button className="minus-btn-quantity" onClick={handleDecrease}>-</button>
                            <span className="input-quantity" >{currentValue} </span>
                            <button className="plus-btn-quantity" onClick={handleIncrease}>+</button>
                        </div>
                    </div>
                    <div className="product-static">
                        <button className="product-add" onClick={
                            () => handleAddProduct(currentValue)
                        }>
                            Thêm vào giỏ hàng
                        </button>
                    </div>
                </div>

            </div>
            <div className="product-choosesize">
                <hr></hr>
                <h1>Chọn kích thước</h1>
                <p>Chọn kích thước dựa trên số đo của bạn. Để biết thêm thông tin về các số đo, hãy xem bảng đo của chúng tôi.</p>
                <table className="table-size-product">
                    <tr>
                        <th>SIZE</th>
                        <th>KÍCH THƯỚC NGỰC</th>
                        <th>KÍCH THƯỚC VÒNG EO</th>
                        <th>VÒNG HÔNG</th>
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
                    <tr>
                        <td>XXL</td>
                        <td>98</td>
                        <td>80</td>
                        <td>106</td>
                    </tr>
                </table>
            </div>
            <div className="product-policy">
                <h1>Chính sách hoàn trả</h1>
                <p>Chúng tôi muốn khách hàng hài lòng với việc mua hàng của họ. Tuy nhiên, nếu bạn đổi ý hoặc muốn đổi lấy kích thước,
                    màu sắc hoặc kiểu dáng khác, vui lòng trả lại (các) mặt hàng đó trong vòng 30 ngày kể từ ngày mua và chúng tôi sẽ hoàn
                    lại tiền cho bạn.</p>
            </div>
            <div className="product-same">
                <h1>Sản phẩm tương tự</h1>
                <ReactSimplyCarousel
                    activeSlideIndex={activeSlideIndex}
                    onRequestChange={(requestedIndex) => {
                        if (requestedIndex < activeSlideIndex) {
                            setActiveSlideIndex(activeSlideIndex - 1);
                        } else if (requestedIndex > activeSlideIndex) {
                            setActiveSlideIndex(activeSlideIndex + 1);
                        }
                    }}
                    itemsToShow={4}  // Display 4 items at a time
                    itemsToScroll={1}
                    forwardBtnProps={{
                        //here you can also pass className, or any other button element attributes
                        style: {
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
                            position: 'absolute',
                            right: 0,
                            top: '50%',
                        },
                        children: <span>{`>`}</span>,
                    }}
                    backwardBtnProps={{
                        style: {
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
                            zIndex: 100,
                            position: 'absolute',
                            left: 0,
                            top: '50%',
                        },
                        children: <span>{`<`}</span>,
                    }}
                    responsiveProps={[
                        {
                            itemsToShow: 4,  // Duy trì số lượng thẻ ở đây
                            itemsToScroll: 1,
                            width: 1000,    // Số lớn để hiển thị tất cả thẻ trên một trang
                        },
                    ]}
                    speed={500}
                    easing="ease-in-out"
                >
                    {ProductDetailData.slice(0, 10).map((item, index) => (
                        <div className="product-same-info">
                            <img className="product-same-img" src={item.img} alt={item.img} />
                            <p className="product-same-name">{item.nameProduct}</p>
                            <p className="product-same-price">{item.price}</p>
                        </div>

                    ))}


                </ReactSimplyCarousel>
            </div>

        </div>
    );
};

export default ProductDetails;
