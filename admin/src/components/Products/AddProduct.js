import React, { useState } from "react";
import "../../css/Addproduct.css";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleBack = () => {
    // Handle logic when clicking the "Back to Products" button
  };

  const handlePublish = () => {
    // Handle logic when clicking the "Publish" button
    // Send the product data to the server or perform other actions
  };

  const handlePriceChange = (event) => {
    const priceValue = event.target.value;
    if (priceValue >= 0) {
      setPrice(priceValue);
    }
  };

  const handleQuantityChange = (event) => {
    const quantityValue = event.target.value;
    if (quantityValue >= 0) {
      setQuantity(quantityValue);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    // Handle image upload logic
    setImage(file);
  };

  return (
    <div className="Categories-container">
      <div className="left-container">
        <div className="category_bar">
          <p>Tên danh mục</p>
          <select className="category_select">
            <option value="">Chọn danh mục</option>
            <option value="category1">Danh mục 1</option>
            <option value="category2">Danh mục 2</option>
            <option value="category3">Danh mục 3</option>
          </select>
        </div>
        <div className="product_bar">
          <p>Tên sản phẩm</p>
          <input
            type="text"
            className="input1"
            placeholder="Nhập tên sản phẩm"
          />
        </div>
        <div className="price_bar">
          <p>Giá</p>
          <input
            type="number"
            className="input1"
            placeholder="Nhập giá"
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <div className="quantity_bar">
          <p>Số lượng</p>
          <input
            type="number"
            className="input1"
            placeholder="Nhập số lượng"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>
        <div className="des_bar">
          <p>Mô tả</p>
          <textarea placeholder="Nhập mô tả"></textarea>
        </div>
        <div className="image_bar">
          <p>Ảnh</p>
          <input
            type="file"
            id="img"
            name="img"
            className="input2"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        <div className="filter-button">Tạo mới</div>
      </div>
    </div>
  );
};

export default AddProduct;
