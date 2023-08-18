<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">{{ category.categoryName }}</h4>
                <h5>{{ msg }}</h5>
            </div>
            <div class="row">
                <div v-for="product of products" :key="product.id"
                    class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
                    <ProductBox :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductBox from '@/components/ProductBox.vue';
import axios from 'axios';
export default {
    data() {
        return {
            id: null,
            category: {},
            products: [],
            msg: ''
        }
    },
    methods: {
        fetchProduct() {
            axios.get(this.baseURL + "products/")
                .then(res => {
                    // return console.log(res.data);
                    this.products = res.data.filter(product => product.categoryId == this.$route.params.id
                    )
                    if (this.products.length == 0) {
                        this.msg = "No products found for this category"
                    } else if (this.products.length == 1) {
                        this.msg = "Only 1 Product found for this category"
                    } else {
                        this.msg = this.products.length + " Product found for this category"
                    }
                    //console.log(this.products);
                })
                .catch(err => { console.log('err', err); });
        }
    },
    components: {
        ProductBox
    },
    props: ['baseURL', 'categories'],
    mounted() {
        this.id = this.$route.params.id;
        this.category = this.categories.find(category => category.id == this.id)
        this.fetchProduct()

    }
}
</script>

<style></style>