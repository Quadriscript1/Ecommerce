<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">
          Shopping cart
        </h3>
      </div>
    </div>

    <!-- loop over the cart items and display -->

    <div v-for="cart in carts" :key="cart.id" class="row mt-2 pt-3">
      <div class="col-2"></div>
      <div class="col-md-3">
        <img :src="cart.imageURL" alt="" class="w-100 card-image-top embed-responsive embed-responsive-16by9"
          style="object-fit: cover" />
      </div>

      <!-- display product name, quantity -->
      <div class="col-md-5 px-3">
        <div class="card-block px-3">
          <h6 class="card-title">
            {{ cart.name }}
          </h6>

          <p class="mb-0 font-weight-bold" id="item-price">
            $ {{ cart.price }} per unit
          </p>
          <p class="mb-0">Quantity:{{ cart.quantity }}</p>
        </div>
        <p class="mb-0">
          Total:
          <span class="font-weight-bold">
            $ {{ cart.price * cart.quantity }}
          </span>
        </p>
        <br>
        <a href="#" class="text-right" @click="deleteItem(cart.id)">Remove from Cart</a>
      </div>
      <div class="col-2"></div>
      <div class="col-12">
        <hr />
      </div>
    </div>

    <!-- display the price -->
    <div class="total-cost pt-2 text-right">
      <h5>Total : ${{ totalCost }}</h5>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      carts: [],
      auth_info: {},
      auth_info: null

    }
  },
  props: ['baseURL', 'products', 'categories'],
  methods: {
    getCart() {
      if (this.auth_info) {
        axios.get(this.baseURL + 'cart')
          .then((res) => {
            this.carts = res.data.filter(c => c.userId == this.auth_info.id);
            this.totalCost = res.data.totalCost;


        
          })
      } else {
        this.carts = 0
      }

    },
    deleteItem(cart) {

      axios.delete(`${this.baseURL}cart/${cart}`)
        .then(() => {
          // After deleting the item, update the cart data and total cost
          this.getCart();
        })
        .catch((error) => {
          console.error('Error deleting item:', error);
        });
    }
  },
  computed: {
    totalCost() {
      return this.carts.reduce((total, cart) => {
        return total + cart.price * cart.quantity;
      }, 0);
    },
  },
  mounted() {
    this.auth_info = JSON.parse(localStorage.getItem('authUser'));
    this.getCart();
    this.carts
  }
}
</script>

<style>
.category {
  font-weight: 400;
}

.wishlist-button {
  background-color: #b9b9b9;
}
</style>