<script>
  import AllProducts from '../../API.js';
  export default {
    data() {
      return { products: [], button: '' };
    },
    mounted() {
      this.api();
    },
    methods: {
      async api() {
        this.products = await AllProducts.fetchProducts();
      },
    },
  };
</script>
<template>
  <div id="pcontainer" v-if="products.length !== 0">
    <div class="productInfo" :key="product.id" v-for="product in products">
      <div id="title">{{ product.title }}</div>
      <div>
        <img class="image" :src="product.image" alt="productimage" />
      </div>
      <div>{{ product.price + ' £' }}</div>
      <div id="description">
        <h3>Description</h3>
        {{ product.description }}
      </div>
      <button type="button" @click="onClick" class="btn btn-primary">
        add to cart
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  $text-color: rgba(0, 0, 0, 0.9);

  .productInfo {
    border-style: groove;
    border-color: black;
    color: $text-color;
    width: 200px;
    height: 350px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    font-size: x-small;
    background-color: white;
    height: fit-content;
    min-height: 400px;
  }
  #pcontainer {
    background-color: dimgrey;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 20px;
  }
  button {
    width: 105px;
  }
  .image {
    width: 50px;
  }
  h3 {
    font-size: medium;
  }
  #title {
    font-weight: bold;
  }
  #description {
    margin: 5px;
  }
</style>
