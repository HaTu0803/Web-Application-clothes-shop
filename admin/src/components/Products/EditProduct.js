import React, {useState, useEffect, useMemo} from 'react';
import '../../css/Editproduct.css';
import axios from 'axios';

/**
 * Modifies the details of a product.
 *
 * @param {string} productId
 * @param {Object} updatedDetails
 * @param {string} updatedDetails.name
 * @param {number} updatedDetails.price
 * @param {string} updatedDetails.description
 * @return {boolean}
 */
function EditProduct() {
  const currentPath = window.location.pathname;
  const pathSegments = currentPath.split('/');
  const ProductID = useMemo(() => {
    return pathSegments[pathSegments.length - 1];
  }, []);
  const [values, setValues] = useState({
    productName: '',
    descrip: '',
    photo: '',
  });

 useEffect(() => {
    axios.get(`http://localhost:3000/api/product/editproduct/${ProductID}`)
      .then((res) => {
        const productData = res.data[0];
        if (productData) {
          setValues((prevValues) => ({
            ...prevValues,
            productName: productData.productName || '',
            descrip: productData.descrip || '',
            photo: productData.photo || '',
          }));
        }
      })
      .catch((err) => console.log(err));
  }, [ProductID]);

  const handleUpdate = (event) => {
    event.preventDefault();
      axios.post(`http://localhost:3000/api/product/editproduct/${ProductID}`, values)
      .then((res) => {
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='edit-container'>
      <h2>Edit Product</h2>
      <div>
  <label htmlFor="productName">Product Name:</label>
  <input
  type="text"
  id="productName"
  name="productName"
  value={values.productName}
  onChange={(e) =>
    setValues((prevValues) => ({...prevValues, productName: e.target.value}))
  }
/>
</div>
      <div>
        <label htmlFor="descrip">Description:</label>
        <input
          type="text"
          id="descrip"
          name="descrip"
          value={values.descrip}
          onChange={(e) => setValues({...values, descrip: e.target.value})}
        />
      </div>
      <div>
        <label htmlFor="photo">Photo:</label>
        <input
          type="text"
          id="photo"
          name="photo"
          value={values.photo}
          onChange={(e) => setValues({...values, photo: e.target.value})}
        />
      </div>
      {/* Add similar fields for other data */}
      <button onClick={handleUpdate}>Save Changes</button>
    </div>
  );
}

export default EditProduct;
