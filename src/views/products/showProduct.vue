<template>
    <div class="container py-2">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="pt-3">Top Products</h2>

            </div>
        </div>
        <div class="row">
            <div v-for="product in products" :key="product.id"
                class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
                <productBox :product="product" />
            </div>
        </div>
    </div>
</template>

<script>
import productBox from "../../components/ProductBox.vue";

export default {
    data() {
        return {
            products: {}
        }
    },
    components: {
        productBox,
    },
    props: ['products'],
    mounted() {
        this.products
    }
}
</script>

<style></style>