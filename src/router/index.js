import Vue from "vue";
import VueRouter from "vue-router";
import CountryGrid from "../views/CountryGrid.vue";
import AppNotFound from "../components/app/AppNotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "country-grid",
    component: CountryGrid
  },
  {
    path: "/country/:country",
    name: "country-detail",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "country" */ "../views/CountryDetail.vue")
  },
  {
    path: "*",
    name: "AppNotFound",
    component: AppNotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
