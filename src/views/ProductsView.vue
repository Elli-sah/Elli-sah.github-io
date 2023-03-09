<script>
  import BackgroundHome from '../components/BackgroundHome.vue';
  import ProductList from '../components/ProductList.vue';
  import axios from 'axios';

  export default {
    components: {
      ProductList,
      BackgroundHome,
    },
    data() {
      return {
        products: [],
        showElements: false,
      };
    },
    computed: {
      filteredProducts() {
        const category = this.$route.params.category;
        return this.products.filter((product) => product.category === category);
      },
    },
    mounted() {
      axios
        .get('https://fakestoreapi.com/products')
        .then((response) => {
          this.products = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  };
</script>

<template>
  <BackgroundHome />
  <div class="nav">
    <ul id="ul">
      <RouterLink
        id="products"
        to="/products/All_products"
        @click="showElements = false"
      >
        <li class="catgory-links">All Products</li>
      </RouterLink>
      <RouterLink to="/products/electronics" @click="showElements = true">
        <li class="catgory-links">Electronics</li>
      </RouterLink>
      <RouterLink to="/products/jewelery" @click="showElements = true">
        <li class="catgory-links">Jewelery</li>
      </RouterLink>
      <RouterLink to="/products/men's clothing" @click="showElements = true">
        <li class="catgory-links">Men's clothing</li>
      </RouterLink>
      <RouterLink to="/products/women's clothing" @click="showElements = true">
        <li class="catgory-links">Women's clothing</li>
      </RouterLink>
    </ul>
  </div>
  <div v-if="showElements" class="filtered">
    <h2>{{ category }}</h2>
    <ul>
      <li v-for="product in filteredProducts" :key="product.id">
        <img :src="product.image" :alt="product.title" />
        <h3>{{ product.title }}</h3>
        <p>{{ product.description }}</p>
        <p>Price: ${{ product.price }}</p>
      </li>
    </ul>
  </div>
  <ProductList v-else />
</template>
<style scoped>
  .nav {
    display: flex;
    justify-content: center;
  }
  #ul {
    display: flex;
    flex-direction: row;
  }
  .catgory-links {
    list-style: none;
    margin: 30px;
    margin-top: 50px;
  }
</style>
