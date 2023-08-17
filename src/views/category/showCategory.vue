<template>

<div class="container py-2">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3">Top Categories</h2>
        </div>
      </div>
      <div class="row">
        <div v-for="category in categories" :key="category.id" class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
          <categoryBox :category="category"/>
        </div>
      </div>
    </div>
</template>

<script>
import categoryBox from "../../components/CategoryBox.vue";


export default {
    data() {
        return {
            categories: {}
        }
    },
    components: {
        categoryBox,
    },
    props: ['categories'],
    mounted() {
        this.categories
    }
}
</script>