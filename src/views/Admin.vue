<template>
    <div class="container py-4">  
        <button class="btn btn-primary btn-lg">
            <router-link to="/admin/category" class="text-white">Admin Category</router-link>
        </button>
        <br>
        <button class="btn btn-primary btn-lg ">
             <router-link to="/admin/product" class="text-white">Admin products</router-link>
        </button>
        
   
    </div>
</template>
<!-- <template>
    <div>
        <router-link :to="{ name: 'category' }">
            <button class="btn btn-primary btn-lg">Admin Category</button>
        </router-link>
        <br>
        <router-link :to="{ name: 'products' }">
            <button class="btn btn-primary btn-lg">Admin Product</button>
        </router-link>
    </div>
</template> -->

<script>

</script>

<style>
.btn {
    margin-bottom: 20px;
}
</style>