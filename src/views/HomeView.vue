<template>
  <div id="home">
    <div id="background-div" class="page-holder bg-cover">
      <div class="container py-5">
        <header class="text-left text-white py-5">
          <h3 class="mb-4 rounded text-white" id="heading">
            <a href="#" class="bg-white px-2 py-2 rounded">Start shopping</a>
          </h3>
          <p class="lead mb-0 bg-dark p-1 rounded"> Sweet Ecommerce</p>
        </header>
      </div>
    </div>
    
    <!-- Display top categopries -->
    <div class="container py-2">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3">Top Categories</h2>
        </div>
      </div>
      <div class="row">
        <div v-for="index in categorySize" :key="index" class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
          <categoryBox :category="categories[index-1]"/>
        </div>
      </div>
    </div>
   
    <!-- Display top products in the section -->
    <div class="container py-2">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3">Top Products</h2>

        </div>
      </div>
      <div class="row">
        <div v-for="index in productSize" :key="index" class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
          <productBox :product="products[index-1]"/>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import categoryBox from "../components/CategoryBox.vue";
import productBox from "../components/ProductBox.vue";

export default {
  name: 'HomeView',
  components: {
    categoryBox,
    productBox,
  },
  props:['categories','products'],
  data(){
    return{
      categorySize:0,
      productSize:0
    }
  },
  mounted(){
    this.categorySize = Math.min(6,this.categories.length)
    this.productSize = Math.min(6,this.products.length)
  }
}
</script>
<style>
.page-holder {
  min-height: 100vh;
}

.bg-cover {
  background-size: cover !important;
}

#background-div {
  background: url(../assets/shopping-cart.jpeg);
}

#heading {
  font-weight: 400px;
}</style>
