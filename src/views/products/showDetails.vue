<template>
    <div class="container">
        <div class="row pt-5">
            <div class="col-md-1"></div>
            <!-- Display image -->
            <div class="col-md-4 col-12">
                <img :src="product.imageURL" alt="" class="img-fluid">
            </div>
            <!-- display other features -->
            <div class="col-md-6 col-12 pt-3 pt-md-0">
                <h4>{{ product.name }}</h4>
                <h6 class="category font-italic">{{ category.categoryName }}</h6>
                <h6 class="font-weight-bold">${{ product.price }}</h6>
                <p>{{ product.description }}</p>
                <div class="d-flex flex-row justify-content-between">
                    <div class="input-group col-md-3 col-4 p-0">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Quantity</span>
                        </div>
                        <input type="number" class="form-control" v-model="quantity">
                    </div>
                    <div class="input-group col-md-3 col-4 p-0">
                        <button id="add-to-cart-button" class="btn mr-3 p-1 py-0" @click="addToCart">Add to Cart</button>
                    </div>
                </div>
                <div class="features pt-3">
                    <h5><strong>Features</strong></h5>
                    <ul>
                        <li>Lorem ipsum dolot, optio cum.libero nisi obcaecati. Ut minima, eam neque perferendis dolorum
                            totam quia.</li>
                        <li>Lorem ipsum dolot, optio cum.libero nisi obcaecati. Ut minima, eam neque perferendis dolorum
                            totam quia.</li>
                        <li>Lorem ipsum dolot, optio cum.libero nisi obcaecati. Ut minima, eam neque perferendis dolorum
                            totam quia.</li>
                        <li>Lorem ipsum dolot, optio cum.libero nisi obcaecati. Ut minima, eam neque perferendis dolorum
                            totam quia.</li>
                        <li>Lorem ipsum dolot, optio cum.libero nisi obcaecati. Ut minima, eam neque perferendis dolorum
                            totam quia.</li>
                    </ul>

                </div>
                <button id="wishlist-button" class="btn mr-3 p-1 py-0" @click="addToWishlist">{{ wishListString }}</button>
            </div>


        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            product: {},
            category: {},
            quantity:1,
            wishListString:'Add to wishlist',
            auth_info:{}

        }
    },
    props: ['baseURL', 'products', 'categories'],
    methods:{
        addToCart(){
        if(!this.auth_info){
            alert('Please login to access this cart');
            return this.$router.push('/signin')

        }else{
            const cart ={
                userId:this.auth_info.id,
                categoryId : this.product.categoryId,
                description :this.product.description,
                quantity:this.quantity,
                name: this.product.name,
                imageURL: this.product.imageURL,
                price:this.product.price
            }
            axios.post(this.baseURL+'cart',cart)
            .then((res) => {
                if(res.status == 201) {
                    swal({
                        text:"product added to the cart successfully",
                        icon:"success",
                    })
                    console.log(this.auth_info);
                }
            })
        }
           
        }
    },
    mounted() {
        this.auth_info = JSON.parse( localStorage.getItem('authUser'));
        this.id = this.$route.params.id;
        this.product = this.products.find(product => product.id == this.id)
        this.category = this.categories.find(category => category.id == this.product.categoryId)
    }
}
</script>

<style>
    .category{
        font-weight: 400;
    }
    #wishlist-button{
        background-color: #b9b9b9;
    }
    #add-to-cart-button{
        background-color: #febd69;
    }
</style>