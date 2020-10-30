import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Galery from "../views/Galery.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {title: "Eduplas.Bio - Home"}
  },
  {
    path: "/galery",
    name: "Galery",
    component: Galery,
    meta: {title: "Eduplas.Bio - Galery"},
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {title: "Eduplas.Bio - About"}
  },
];

const router = new VueRouter({
  routes,
});

export default router;
