/* eslint-disable */
<template>
  <main class="my-3">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">Vue-app</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto" >
          <li class="nav-item" >
            <a class="nav-link" href="" @click.prevent="DashBoard">DashBoard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="" @click.prevent="Notes">Notes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="" @click.prevent="Tasks">Tasks</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="" @click.prevent="logout">Logout</a>
          </li>
        </ul>
      </div>
      
    </div>
  </nav>
      <div class="container">
      <router-view></router-view>
      </div>
    </main>
    
    
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import { store } from '../store'
export default {

  data() {
    return {
      user: "",
    };
  },

  // mounted() {
  //   // if ('user' in localStorage) {
  //   console.log("mounted ENTER");
  //   if (localStorage.user) {
  //     this.user = JSON.parse(localStorage.user);
  //     console.log("user",this.user);
  //  }
  //  },

  methods: {

    DashBoard() {
      this.$router.push("/dashboard");
      console.log("hello")
    },
    Tasks() {
      this.$router.push("/tasks");
    },

    Notes() {
      this.$router.push("/notes");
    },

    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("Token");
      this.user = null;
      this.Token = null;
      store.commit('SET_LAYOUT', 'login-layout')
      this.$router.push("/");
      
    },
  },
};
</script>

<style></style>
