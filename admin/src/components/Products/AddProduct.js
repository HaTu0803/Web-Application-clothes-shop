import React, {useState} from 'react';
import '../../css/Addproduct.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductController from '../Controller/ProductController';

const AddProduct = () => {
  const [product, setProduct] = useState({
    ProductName: '',
    Descrip: '',
    Photo: '',
    CategoryID: '',
    productDetails: [],
  });

  const [productDetails, setProductDetails] = useState({
    SizeID: '',
    ColorID: '',
    Quantity: '',
    Price: '',
  });
  // const [selectedCategory, setSelectedCategory] = useState('');
  // const [categories, setCategories] = useState([]); // State for categories

  // const handleBack = () => {
  //   // Handle logic when clicking the "Back to Products" button
  // };

  // const handleProductChange = (e) => {
  //   const { ProductName,Descrip, , value } = e.target;
  //   setProduct((prevProduct) => ({
  //     ...prevProduct,
  //     [name]: value,
  //   }));
  // };

  // const handleProductDetailsChange = (e) => {
  //   const { name, value } = e.target;
  //   setProductDetails((prevDetails) => ({
  //     ...prevDetails,
  //     [name]: value,
  //   }));
  // };
  const [errors, setErrors] = useState({}); // State for validation errors

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (product.CategoryID == '') {
      validationErrors.CategoryID = 'Vui lòng chọn danh mục.';
    }
    if (product.ProductName == '') {
      validationErrors.ProductName = 'Vui lòng nhập tên sản phẩm.';
    }
    if (productDetails.Price == 0) {
      validationErrors.Price = 'Vui lòng nhập giá của sản phẩm.';
    }
    if (productDetails.Quantity == 0) {
      validationErrors.Quantity = 'Vui lòng nhập số lượng của sản phẩm.';
    }
    if (productDetails.SizeID == '') {
      validationErrors.SizeID = 'Vui lòng nhập size của sản phẩm.';
    }
    if (productDetails.ColorID == '') {
      validationErrors.ColorID = 'Vui lòng nhập màu của sản phẩm.';
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const combinedData = {
      ...product,
      productDetails, // Assuming you want to send an array of details
    };
    ProductController.addProduct(combinedData);
};

//   useEffect(()=>{
//     axios.post('http://localhost:3000/api/product/addproducts/')
//     .then((res) => {
//       setProduct(res.data);
//       setProductDetails(res.data);
//     })
//     .catch((err) => console.log(err));
// }, []);

  return (
    <div className="d-flex vh-150 align-items-center">
        <div className='w-50 bg-white rounded p-3'>

        <form onSubmit={handleSubmit}>
        <h2>Add Product</h2>
        <div className="mb-2">

      <label htmlFor="category">Tên danh mục</label>
       <input
        id="category"
        className="input1"
        placeholder="Nhập tên danh mục"

        value={product.CategoryID}
        onChange={(e) => setProduct({...product, CategoryID: e.target.value})}
    />
    </div>
    <div className="product_bar">
      <label htmlFor="productName">ID sản phẩm</label>
      <input
        id="productID"
        className="input1"
        placeholder="Nhập ID sản phẩm"
        value={product.ProductID}
        onChange={(e) => setProduct({...product, ProductID: e.target.value})}
      />
    </div>
    <div className="product_bar">
      <label htmlFor="productName">Tên sản phẩm</label>
      <input
        id="productName"
        className="input1"
        placeholder="Nhập tên sản phẩm"
        value={product.ProductName}
        onChange={(e) => setProduct({...product, ProductName: e.target.value})}
      />
    </div>
    <div className="price_bar">
      <label htmlFor="price">Giá</label>
      <input
            type = "number"
            min="0"
            step="1"
        id="price"
        className="input1"
        placeholder="Nhập giá"
        value={productDetails.Price}
        onChange={(e) => setProductDetails({...productDetails,
          Price: e.target.value})}
      />
    </div>
    <div className="quantity_bar">
      <label htmlFor="quantity">Số lượng</label>
      <input
      type = "number"
      min="0"
      step="1"
        id="quantity"
        className="input1"
        placeholder="Nhập số lượng"
        value={productDetails.Quantity}
        onChange={(e) => setProductDetails({...productDetails,
          Quantity: e.target.value})}
      />
    </div>
    <div className="color_bar">
      <label htmlFor="color">Màu</label>
      <input
        id="color"
        className="input1"
        placeholder="Nhập số lượng"
        value={productDetails.ColorID}
        onChange={(e) => setProductDetails({...productDetails,
          ColorID: e.target.value})}
      />
    </div>
    <div className="size_bar">
      <label htmlFor="size">Size</label>
      <input
        id="size"
        className="input1"
        placeholder="Nhập size"
        value={productDetails.SizeID}
        onChange={(e) => setProductDetails({...productDetails,
          SizeID: e.target.value})}
      />
    </div>
    <div className="des_bar">
      <label htmlFor="description">Mô tả</label>
      <textarea
        id="description"
        placeholder="Nhập mô tả"
        value={product.Descrip}
        onChange={(e) => setProduct({...product, Descrip: e.target.value})}
      ></textarea>
    </div>
    <div className="image_bar">
      <label htmlFor="img">Ảnh</label>
      <input
        id="img"
        className="input1"
        placeholder="Nhập anh"
        value={product.Photo}
        onChange={(e) => setProduct({...product, Photo: e.target.value})}
      />
    </div>
    {Object.keys(errors).map((key) => (
            <div key={key} className="error-message">
              {errors[key]}
            </div>
          ))}
    <button type="submit" className="filter-button">
      Tạo mới
    </button>
  </form>
  </div>
</div>
  );
};

export default AddProduct;
