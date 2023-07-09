import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { PRODUCT_CREATE_RESET } from "../../Redux/Constants/ProductConstants";
// import { createProduct } from "./../../Redux/Actions/ProductActions";
// import Toast from "../LoadingError/Toast";
// import Message from "../LoadingError/Error";
// import Loading from "../LoadingError/Loading";

// const ToastObjects = {
//   pauseOnFocusLoss: false,
//   draggable: false,
//   pauseOnHover: false,
//   autoClose: 2000,
// };
const AddProduct = () => {
//   const [name, setName] = useState("");
//   const [category, setCategory] = useState("");
//   const [price, setPrice] = useState(0);
//   const [image, setImage] = useState("");
//   const [imageBanner, setImageBanner] = useState("");
//   const [countInStock, setCountInStock] = useState(0);
//   const [description, setDescription] = useState("");

//   const dispatch = useDispatch();

//   const categoriesList = useSelector((state) => state.categoriesList);
//   const { loadingCate, errorCate, categories } = categoriesList;

//   const productCreate = useSelector((state) => state.productCreate);
//   const { loading, error, product } = productCreate;

//   useEffect(() => {
//     if (product) {
//       toast.success("Product Added", ToastObjects);
//       dispatch({ type: PRODUCT_CREATE_RESET });
//       setName("");
//       setCategory("");
//       setDescription("");
//       setCountInStock(0);
//       setImage("");
//       setImageBanner("");
//       setPrice(0);
//     }
//   }, [product, dispatch]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     dispatch(createProduct(name, category, price, description, image, imageBanner, countInStock));
//   };

  return (
      <>

      </>
  );
};

export default AddProduct;
