<template>
  <div id="header">
    <h1 id="h1"><RouterLink to="/">Fake Store</RouterLink></h1>
    <nav>
      <RouterLink id="products" to="/products/All_products">
        <li class="catgory-links">All Products</li>
      </RouterLink>
      <RouterLink id="login" to="/login">
        <img
          src="../../assets/person_FILL0_wght400_GRAD0_opsz48.svg"
          alt="login"
        />
      </RouterLink>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
  $displayflex: flex;

  #header {
    display: $displayflex;
    height: 120px;
    border-style: solid;
    border-color: rgb(0, 0, 0);
    flex-direction: row;
    align-items: center;
  }
  #h1 {
    display: $displayflex;
    margin: 10px;
    width: 120px;
    height: 100px;
    border-style: groove;
    font-size: large;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
  nav {
    display: $displayflex;
    align-items: center;
    height: 40px;
    width: 90%;
    font-weight: bold;
    justify-content: space-around;
  }
  // #categorylinks {
  //   display: $displayflex;
  //   flex-direction: row;
  //   justify-content: space-evenly;
  // }
  img {
    margin-right: 20px;
  }
  ul {
    display: flex;
    flex-direction: row;
  }
  li {
    list-style: none;
    margin: 30px;
    margin-top: 50px;
  }
</style>
