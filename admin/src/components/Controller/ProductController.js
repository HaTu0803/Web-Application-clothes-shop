import axios from 'axios';

export default {
  async getAllProduct() {
      return axios
    .get('http://localhost:3000/api/product/products/')
    .then((res) => {
       return res.data;
      })
      .catch((err) => console.log(err));
  },
  async getProductByID(ProductID) {
    return axios
    .get(`http://localhost:3000/api/product/products/`+ProductID)
  .then((res) => {
     return res.data[0];
    })
    .catch((err) => console.log(err));
},
    async addProduct(product) {
      try {
        const response = await axios.post('http://localhost:3000/api/product/addproducts/', product);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    async getProductToEdit(ProductID) {
      return axios.get(`http://localhost:3000/api/product/editproduct/${ProductID}`)
      .then((res) => {
        console.log(res.data[0]);
        return res.data[0];
      })
      .catch((err) => console.log(err));
    },
    async editProduct(ProductID, product) {
      axios.post(`http://localhost:3000/api/product/editproduct/${ProductID}`, product)
      .then((res) => {
      })
      .catch((err) => console.log(err));
    },
};
