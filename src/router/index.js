import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../components/Landing";
import Sign from "../components/Sign";
import Search from "../components/searchPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Landing
  },
  {
    path: "/sign",
    name: "sign",
    component: Sign
  },
  {
    path: "/search",
    name: "search",
    component: Search
  }
];

const router = new VueRouter({
  routes
});

export default router;
