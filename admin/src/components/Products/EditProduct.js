import React, { useState, useEffect } from 'react';
import '../../css/Editproduct.css';
import axios from 'axios';

function EditProduct(ProductID) {
  const [product, setProduct] = useState({});
  const [editedProduct, setEditedProduct] = useState({}); // For editing without altering the original state

  // Đoạn mã dưới đây giả định rằng bạn có một cách để lấy thông tin sản phẩm từ API hoặc lưu trữ
 
  useEffect(() => {
    axios.get('http://localhost:3000/api/editproduct/${ProductID}')
      .then(res => {
        setProduct(res.data)
        setEditedProduct(res.data); // Initialize editedProduct with the same data

      }
      )
      .catch(err => console.log(err));
  }, [ProductID]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
        // Send updatedProduct data to the backend
        const response = await axios.put(`/editproduct/${ProductID}`, product);
        console.log('Product updated:', response.data);
        // Handle success or redirect to another page
    } catch (error) {
        console.error('Error updating product:', error);
        // Handle error
    }
};

  return (
    <div className='edit-container'>
      <h2>Edit Product</h2>
      {/* <div>
        <label htmlFor="categoryName">Category:</label>
        <select
          id="categoryName"
          name="categoryName"
          value={product.categoryName || ''}
          onChange={handleInputChange}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.CategoryID} value={category.CategoryName}>
              {category.CategoryName}
            </option>
          ))}
        </select>
      </div> */}
      <div>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={product.productName || ''}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="descrip">Description:</label>
        <input
          type="text"
          id="descrip"
          name="descrip"
          value={product.descrip || ''}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="photo">Photo:</label>
        <input
          type="text"
          id="photo"
          name="photo"
          value={product.photo || ''}
          onChange={handleInputChange}
        />
      </div>
      {/* Thêm các trường dữ liệu khác tương tự */}
      <button onClick={handleUpdate}>Lưu thay đổi</button>
    </div>
  );
}

export default EditProduct;
