<template>
  <div class="container">
    <div class="row">
        <div class="col-12 text-center">
            <h3 class="pt-3">Add Category</h3>

        </div>
    </div>
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
        <form>
            <div class="form-group">
                <label for="">Name</label>
                <input type="text" class="form-control" v-model="form.categoryName">
            </div>
            <div class="form-group">
                <label for="">Description</label>
                <textarea class="form-control" cols="10" rows="2" v-model="form.description"></textarea>
            </div>
            <div class="form-group">
                <label for="">Image Url</label>
                <input type="text" class="form-control" v-model="form.imageURL">
            </div>
            <button type="button" class="btn btn-primary" @click="addCategory">submit</button>
        </form>
        </div>
        <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import sweetalert from "sweetalert"
export default {
    data(){
        return{
            form:{},
        }
    },
    methods:{
        addCategory(){
        axios.post('http://localhost:3000/category', this.form)
            .then((res) => {
                sweetalert({
                    text:"category added successfully",
                    icon:"success"
                });
                this.form =""
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }

}
</script>

<style>

</style>