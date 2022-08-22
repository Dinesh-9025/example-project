/* eslint-disable */
<template>
  <div class="dashboard">
    <!-- <Navbar /> -->
    <h1>Welcome</h1>
    <div class="table-responsive">
      <table class="table table-dark table-hover">
        <thead>
          <tr>
            <th>Adminstatus</th>
            <th>Login Status</th>
            <!-- <th>Token</th> -->
          </tr>
        </thead>
        <tbody>
          <tr >
            <td> {{ users.adminstatus }}</td>
            <td>{{ users.message }}</td>
            <!-- <td>{{ users.token }}</td> -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */

// import Navbar from '../components/Navbar.vue';

export default {
  //    components: {
  //   Navbar,
  // },
  data() {
    return {
      user: "",
      users: [],
    };
  },
  mounted() {
    if (localStorage.user) {
      let lsUsers = localStorage.user;
      this.users = JSON.parse(lsUsers);

    }
 },
};
</script>

<style></style>