// eslint-disable-next-line
/* eslint-disable */

import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import LogedinPage from "../views/LogedinPage.vue";
import Tasks from "../views/Tasks.vue";
import Notes from "../views/Notes.vue";
import { store } from '../store'

Vue.use(VueRouter);

function guest(to, from, next) {
  if (localStorage.user) {
    next({ name: "LogedinPage" });
  } else next();
}

function guard(to, from, next) {
  if (localStorage.user) {
    next();
  } else next({ name: "login" });
}

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    beforeEnter: guest,
  },
  {
    path: "/logedinpage",
    name: "LogedinPage",
    component: LogedinPage,
    beforeEnter: guard,
    meta: {
      layout: 'dashboard-layout'
    }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: guard,
    meta: {
      layout: 'dashboard-layout'
    }
  },
  {
    path: "/tasks",
    name: "Tasks",
    component: Tasks,
    beforeEnter: guard,
    meta: {
      layout: 'dashboard-layout'
    }
  },
  {
    path: "/notes",
    name: "Notes",
    component: Notes,
    beforeEnter: guard,
    meta: {
      layout: 'dashboard-layout'
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
