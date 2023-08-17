<template>
    <div class="card w-100 h-100" style="margin-top: 10px;">
        <div>
            <img :src="category.imageURL" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
            <router-link :to="`/category/show/${category.id}`" :params="{ id: category.id }">
              <h5 class="card-title">{{ category.categoryName }}</h5>
            </router-link>

            <!-- <h5 class="card-title">{{ category.categoryName }}</h5> -->

            <p class="card-text">{{ category.description }}</p>
            <router-link :to="{ name: 'EditCategory', params: { id: category.id } }" v-show="$route.name == 'Category'">
                <button class="btn btn-primary">Edit</button>
            </router-link>
        </div>
    </div>
</template>


<script>
export default {
    name: "CategoryBox",
    props: ["category"],

}


</script>

<style scoped>
.card-img-top {
    object-fit: cover;
}
</style>