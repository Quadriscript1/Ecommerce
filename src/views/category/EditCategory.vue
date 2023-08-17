<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">Edit Category</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-3"> </div>
            <div class="col-6">
                <form v-if="category">
                    
                     <div class="form-group">
                        <label for="">CategoryName</label>
                        <input type="text" class="form-control" v-model="category.categoryName" required>
                    </div>
                    <div class="form-group">
                        <label >Description</label>
                        <textarea class="form-control" cols="10" rows="2" v-model="category.description" required></textarea>
                    </div>
                    <div class="form-group">
                        <label for="">Image Url</label>
                        <input type="text" class="form-control" v-model="category .imageURL" required>
                    </div>

                    <button type="button" class="btn btn-primary" @click="editCategory">submit</button>


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
        }
    },
    props:['baseURL','categories'],
    methods:{
        async editCategory(){
            await axios.put(`${this.baseURL}category/${this.id}`, this.category)
            .then(()=>{
                this.$emit("fetchData ");
                this.$router.push({name: 'Category'});
                swal({
                    text:'category has been updated',
                    icon:"success"
                })
            }).catch(err=> console.log('err', err))
            
        }
    },
    mounted(){
        this.id =  this.$route.params.id,
        this.category = this.categories.find(category => category.id == this.id)
    }
}
</script>

<style>

</style>