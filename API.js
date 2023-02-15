import axios from 'axios';

export default {
  async fetchProducts() {
    try {
      const products = await axios.get('https://fakestoreapi.com/products');
      console.log(products.data);
      return products.data;
    } catch (result) {
      console.error(result);
    }
  },

  async fetchCategories() {
    try {
      const categories = await axios.get(
        'https://fakestoreapi.com/products/categories',
      );
      console.log(categories.data);
      return categories.data;
    } catch (result) {
      console.error(result);
    }
  },
};
