import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../pages/home.vue";
import About from "../pages/about.vue";

let routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
