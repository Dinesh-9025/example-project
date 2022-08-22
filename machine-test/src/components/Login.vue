/* eslint-disable */
<template>
  <div class="login">
    <div class="card-header" style="display: flex; justify-content: end">
      <input
        id="meeting"
        name="das_eng_search"
        placeholder="Search by Meeting ID"
        type="number"
        value=""
        class="form-control"
        style="width: 200px; display: flex; justify-content: end"
      />
    </div>
    <div>
      <center><form @submit="loginData">
        Email:
        <input type="email" id="userName" placeholder="Email" v-model="user.email" /><br /><br />
        Password:
        <input
          type="password"
          id="pass"
          name="password"
          placeholder="Password"
          v-model="user.password"
        /><br /><br />
         <button type="submit" loader: true>Login</button>
      </form></center>
     
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */


import HttpService from '../services/http.service'
import { store } from '.././store';

export default {
  name: "User",
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      loader: false
    };
  },
  methods:{

    setLayout (layout) {
      store.commit('SET_LAYOUT', layout)
    },

   loginData(e) {

      e.preventDefault();
      this.loader = true;

      // if(this.user.email != "araj@teamenova.com" && this.user.password != "radius123") {
      //   console.log("The username and / or password is incorrect");
      //   }

      HttpService.crud('post','/clientadminLogin',this.user)
      .then((response) => {
        //console.log("response", response);
        if(response.data.apiStatus) {
         const res = response.data;
          localStorage.setItem('user', JSON.stringify(res));
          const token = res.token;
          localStorage.setItem('Token',token);
          this.setLayout('dashboard-layout')
          this.$router.push("/logedinpage")
        }
       })
     },
   },
};

</script>

<style>
.login {
  /* display: flex; */
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: rgb(119, 118, 119);
}
</style>
