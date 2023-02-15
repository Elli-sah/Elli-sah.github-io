<script>
  import API from '../../API';
  export default {
    data() {
      return { categories: [] };
    },
    mounted() {
      this.api();
    },
    methods: {
      async api() {
        this.categories = await API.fetchCategories();
      },
    },
  };
</script>
<template>
  <div class="theCategories" :key="category.id" v-for="category in categories">
    <RouterLink to="/products">{{ category }}</RouterLink>
  </div>
</template>

<style scoped>
  .theCategories {
    /* margin: 15px; */
    width: 150px;
  }
</style>
