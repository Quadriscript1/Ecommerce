<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

    <router-link class="navbar-brand" :to="{ name: 'home' }">
      ABDULQUADRI
    </router-link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="form-inline ml-auto mr-auto">
        <div class="input-group">
          <input type="text" size="100" class="form-control" placeholder="search items.." aria-label="Username"
            aria-describedby="basic-addon1">
          <div class="input-group-prepend">
            <span class="input-group-text" id="search-button-navbar">
              <i class="bi bi-search"></i>
            </span>
          </div>
        </div>
      </form>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a class="nav-link text-light dropdown-toggle" href="#" id="navbarAccount" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Browse
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarAccount">
            <router-link :to="{ name: 'home' }" class="dropdown-item">Home</router-link>
            <router-link :to="{ name: 'showProduct' }" class="dropdown-item">Product</router-link>
            <router-link :to="{ name: 'showCategory' }" class="dropdown-item">Category</router-link>
          </div>

        </li>
        <li class="nav-item dropdown">
          <a class="nav-link text-light dropdown-toggle" href="#" id="navbarAccount" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Account
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarAccount">
            <!-- <router-link :to="{ name: 'Wishlist' }" class="dropdown-item">wishlist</router-link> -->
             <router-link v-if="isLoggedIn" :to="{ name: 'Admin' }" class="dropdown-item">Admin</router-link>
            <router-link v-if="!isLoggedIn"  :to="{ name: 'Signup' }" class="dropdown-item">Sign Up</router-link>
            <router-link v-if="!isLoggedIn" :to="{ name: 'Signin' }" class="dropdown-item">Sign In</router-link>
            <a href="#" v-if="isLoggedIn" @click="signout" class="dropdown-item">Signout</a>
          </div>

        </li>
        <li class="nav-item">
          <div id="cart" style="position: relative;">
            <span id="nav-cart-count">{{ cartCount }}</span>
            <router-link :to="{ name: 'Cart' }" class="text-light">
            <i class="fa fa-shopping-cart" style="font-size: 36px;"></i>
          </router-link>
          </div>
          

        </li>
      </ul>


    </div>
  </nav>
</template>

<script>
export default {
  props:['cartCount'],
  computed:{
    isLoggedIn(){
      var check = localStorage.getItem('authUser')
      if (check) {
        return true;
      }
      return false;
    }
  },
  methods:{
    signout(){
      localStorage.removeItem('authUser');
      this.$router.push("/")
    }
  }

}
</script>

<style scoped>
/* a {
  color: #fff;
} */

.nav-link {
  color: #fff;
}
.dropdown-item {
  color: black;
}
#search-button-navbar{
  background-color: #febd69;
  border-color: #febd69;
  border-top-right-radius: 2px;
}
#nav-cart-count{
  background-color: red;
  color: #fff;
  border-radius: 50%;
  height: 15px;
  width: 15px;
  font-size: 15px;
  align-items: center;

  display: flex;
  justify-content: center;

  position: absolute;
  margin-left: 10px;

}
</style>