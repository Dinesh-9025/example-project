<template>
  <div id="app">
    <component v-bind:is="$route.meta.layout ? $route.meta.layout : 'login-layout'"></component>
    <!-- <main class="my-3">
      <div class="container">
      <router-view></router-view>
      </div>
    </main> -->
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */

import AppLayout from './layouts/AppLayout'
import SimpleLayout from './layouts/SimpleLayout'
import { store } from './store';
export default {
  computed: {
    layout () {
      return store.getters.layout
    }
  },
  components: {
    'dashboard-layout': AppLayout,
    'login-layout': SimpleLayout
  }
};

</script>

<style></style>
