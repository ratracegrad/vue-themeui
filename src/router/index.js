import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/fonts",
    name: "Fonts",
    component: () =>
      import(/* webpackChunkName: "fonts" */ "../views/Fonts.vue")
  },
  {
    path: "/categories",
    name: "Categories",
    component: () =>
      import(/* webpackChunkName: "categories" */ "../views/Categories.vue")
  },
  {
    path: "/typography",
    name: "Typography",
    component: () =>
      import(/* webpackChunkName: "typography" */ "../views/Typography.vue")
  },
  {
    path: "/sizing",
    name: "Sizing",
    component: () =>
      import(/* webpackChunkName: "sizing" */ "../views/Sizing.vue")
  },
  {
    path: "/spacing",
    name: "Spacing",
    component: () =>
      import(/* webpackChunkName: "spacing" */ "../views/Spacing.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
