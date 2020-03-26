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
  },
  {
    path: "/lora",
    name: "Lora",
    component: () => import(/* webpackChunkName: "lora" */ "../views/Lora.vue")
  },
  {
    path: "/menu1",
    name: "Menu1",
    component: () =>
      import(/* webpackChunkName: "menu1" */ "../views/Menu1.vue")
  },
  {
    path: "/menu2",
    name: "Menu2",
    component: () =>
      import(/* webpackChunkName: "menu2" */ "../views/Menu2.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
