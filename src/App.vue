<template>
  <navbar :cartCount="cartCount" />
  <router-view v-if="categories && products" style="min-height: 60vh;" :baseURL="baseURL" :categories="categories"
    :products="products" @fetchData="fetchData" />
  <myFooter />
</template>



<script>
import Navbar from "./components/Navbar.vue";
import myFooter from "./components/MyFooter.vue";
import axios from "axios"

export default {
  data() {
    return {
      baseURL: "http://localhost:3000/",
      products: null,
      categories: null,
      cartCount: null,
      carts: [],
      auth_info:[],

    }
  },
  components: {
    Navbar,
    myFooter
  },
  methods: {
    async fetchData() {
      //api call to get the categories
      await axios.get(this.baseURL + "category/")
        .then(res => {
          this.categories = res.data
        }).catch(err => { console.log('err', err); });

      //api call to get the products
      await axios.get(this.baseURL + "products/")
        .then(res => {
          this.products = res.data
        }).catch(err => { console.log('err', err); });
    },
    //api call to fetch cartitems if auth_info is set i.e logged in
    getCart() {
      //console.log("Fetching cart...");
      if (this.auth_info) {
        //console.log("Auth info available:", this.auth_info);
        axios.get(this.baseURL + 'cart')
          .then((res) => {
            //console.log("API response:", res.data);
            this.carts = res.data.filter(c => c.userId === this.auth_info.id);
            this.cartCount = this.carts.length;
            //console.log("Filtered carts:", this.carts);
          })
          .catch(error => {
            //console.error('Error fetching cart:', error);
          });
      } else {
        //console.log("No auth info available");
        this.cartCount = 0;
      }
    }



  },
  mounted() {
    this.fetchData();
    this.getCart();
    this.auth_info = JSON.parse(localStorage.getItem('authUser'));

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
