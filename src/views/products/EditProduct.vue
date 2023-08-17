<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">Edit Product</h4>
                
            </div>
        </div>
        <div class="row">
            <div class="col-3"> </div>
            <div class="col-6">
             <form v-if="product">
                <div class="form-group">
                    <label>Category</label>
                    <select class="form-control" v-model="product.categoryId" required>
                        <option v-for="category of categories" :key="category.id" :value="category.id">{{ category.categoryName }}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" v-model="product.name" class="form-control">
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <input type="text" v-model="product.description" class="form-control">
                </div>
                <div class="form-group">
                    <label>Image URL</label>
                    <input type="text" v-model="product.imageURL" class="form-control">
                </div>
                <div class="form-group">
                    <label>Price</label>
                    <input type="number" v-model="product.price" class="form-control">
                </div>
                <button type="button" @click="editProduct" class="btn btn-primary">Add Product</button>
            </form>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import swal from "sweetalert"
export default {
    data(){
        return{
            category:null,
            id:null,
            product:null
        }
    },
    props:['baseURL','products','categories'],
    methods:{
        async editProduct(){
            await axios.put(`${this.baseURL}products/${this.id}`, this.product)
            .then(()=>{
                this.$emit("fetchData ");
                this.$router.push({name: 'AdminProduct'});
                swal({
                    text:'category has been updated',
                    icon:"success"
                })
            }).catch(err=> console.log('err', err))
            
        }
    },
    mounted(){
        this.id =  this.$route.params.id,
        this.category = this.categories.find(category => category.id == this.id),
        this.product =this.products.find(product => product.id == this.id)
    }
}
</script>