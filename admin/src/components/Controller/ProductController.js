import axios from 'axios';

export default {
    async addProduct(productData) {
        try {
          const response = await axios.post('http://localhost:3000/api/product/addproducts/', productData);
          return response.data;
        } catch (error) {
          throw error;
        }
    }
}
