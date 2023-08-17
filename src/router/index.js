import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCategory from '../views/category/AddCategory.vue'
import Category from '../views/category/category.vue'
import Admin from '../views/Admin.vue'
import Products from '../views/products/products.vue'
import AddProduct from '../views/products/AddProduct.vue'
import EditCategory from '../views/category/EditCategory.vue'
import EditProduct from '../views/products/EditProduct.vue'
import showDetails from '../views/products/showDetails.vue'
import ListProduct from '../views/category/ListProduct.vue'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'
import Cart from '../views/Cart.vue'
import showProduct from '../views/products/showProduct.vue'
import showCategory from '../views/category/showCategory.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  //category detail page
  {
    path:'/category/show/:id',
    name:'ListProduct',
    component:ListProduct
  },
  {
    path:'/admin/category/add',
    name:'AddCategory',
    component:AddCategory
  },
  {
    path:'/admin/category',
    name:'Category',
    component:Category
  },
  {
    path:'/admin/category/:id',
    name:'EditCategory',
    component:EditCategory
  },
  {
    path:'/categories',
    name:'showCategory',
    component:showCategory
  },
  {
    path:'/admin',
    name:'Admin',
    component: Admin
  },
  {
    path:'/admin/product',
    name:'AdminProduct',
    component: Products
  },
  //edit product
  {
    path:'/admin/product/:id',
    name:'EditProduct',
    component:EditProduct
  },
  {
    path:'/products',
    name:'showProduct',
    component:showProduct
  },
  {
    path:'/cart',
    name:'Cart',
    component:Cart
  },
  //show details of products
  {
    path:'/product/show/:id',
    name:'showDetails',
    component:showDetails
  },
  {
    path:'/admin/product/new',
    name:'AddProduct',
    component:AddProduct
  },
  //signup and signin
  {
    path:'/signup',
    name:'Signup',
    component:Signup
  },
  {
    path:'/signin',
    name:'Signin',
    component:Signin
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
