<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center pt-3">
        ABDULQUADRI
      </div>
    </div>

    <div class="row">
      <div class="col-12 justify-content-center d-flex pt-3">
        <div id="signup-div" class="flex-item border">
          <h2 class="pt-4 pl-4">Create Account</h2>
          <form  class="pt-4 pr-4 pl-4">
            <div class="form-group">
              <label for="Email">Email</label>
              <input type="email" id="email" v-model="form.email" class="form-control" required>
            </div>
            <div class="form-row">
              <div class="col">
                <div class="form-group">
                  <label for="Firstname">Firstname</label>
                  <input type="text" id="firstname" v-model="form.firstName" class="form-control" required>
                </div>

              </div>
              <div class="col">
                <div class="form-group">
                  <label for="Lastname">Lastname</label>
                  <input type="text" id="lastname" v-model="form.lastName" class="form-control" required>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="Password">Password</label>
              <input type="password" id="password" v-model="form.password" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="confirmPassword">ConfirmPassword</label>
              <input type="password" id="confirmPassword" v-model="form.confirmPassword" class="form-control" required>
            </div>
            <button @click="signup" class="btn btn-primary mt-2">Create Account</button>
          </form>
            <div>
              <small>Already has an account</small>
              <router-link :to="{ name: 'Signin' }" class="">Sign In</router-link>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import axios from "axios";
  import swal from "sweetalert";


export default {
  data(){
    return{
      form:{}
    }
  },
  props:["baseURL"],
  methods:{
    async signup(e){
      e.preventDefault();
      if(this.password === this.confirmPassword){
        //call signup api
        console.log(this.form);
        await axios.post(this.baseURL+"signup",this.form)
        .then(() =>{
          this.$router.replace("/");
          // let obj = {
          //       id:Math.floor(Math.random() * 100),
          //       email:document.getElementById('email').value,
          //       firstname: document.getElementById('firstname').value,
          //       lastName: document.getElementById('lastname').value,
          //       pass: document.getElementById('password').value
          //     };
              
          //     let arr = [];
          //     if (localStorage.getItem('users') === null) {
          //       arr.push(obj);
          //     } else {
          //       arr = JSON.parse(localStorage.getItem('users'));
          //       if (arr.some(el => el.email === obj.email)) {
          //         return alert('Email already exists');
          //       } else {
          //         arr.push(obj);
          //       }
          //     }
          //     localStorage.setItem('users', JSON.stringify(arr))
              
          swal({
            text:"User signup successful... please login",
            icon:"success"

          })
        }).catch(err => console.log('err', err))

      }else[
        //show error
        swal({
          text:"Password is incorrect",
          icon:"error"
        })
      ]
    }
  },
  

}
</script>

<style scoped>
  .btn-primary{
    color: #000;
    background-color: #f0c14b;
  }

</style>