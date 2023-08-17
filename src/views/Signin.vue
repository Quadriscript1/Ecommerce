<template>
    <div class="container">
        <div class="row">
            <div class="col-12 justify-content-center d-flex flex-row pt-5">
                <div id="signin" class="flex-item border">
                    <h2 class="pt-4">Sign-In</h2>
                    <form @submit="signin" class="form-group pl-4 pr-4 pt-4">
                        <div class="form-group">
                            <label for="Email">Email</label>
                            <input type="email" id="email" v-model="form.email" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="Password">Password</label>
                            <input type="password" id="password" v-model="form.password" class="form-control" required>
                        </div>
                        <button class="btn btn-primary mt-2 py-0">Continue</button>

                    </form>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
export default {
    data() {
        return {
            user:{},
            form:{},
            loginStatus:null
        }
    },
    props: ['baseURL'],
    methods: {
       
        signin(){
            var loginData = {
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                id:Math.random() * 100
            }

            let usersData = JSON.parse(localStorage.getItem('users'))
            let obj = {}
            let loginStatus = false

            usersData.some(item=>{
                if(item.email==loginData.email && item.pass == loginData.password){
                    localStorage.setItem("authUser", JSON.stringify(item))
                    loginStatus = true
                    obj = item
                    
                }
            })
            if(loginStatus){
                alert('Login successful')
                return this.$router.push('/') 
            }
        },

        getUser(){
            axios.get(this.baseURL + "user")
            .then((res) => {
                this.user = res.data;
            })
        }

    },

    mounted(){
        this.getUser();
        this.signin();
    }
}
</script>

<style scoped>
.btn-primary {
    color: #000;
    background-color: #f0c14b;
}

@media screen and (min-width: 992px) {
    #signin {
        width: 40%;
    }
}
</style>