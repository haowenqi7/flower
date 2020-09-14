import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home";

import First from "../views/home/first/First";
import List from "../views/home/first/list/List";
import Search from "../views/home/search/Search";
import Carts from "../views/home/carts/Carts";
import My from "../views/home/my/My";

import New from "../views/newflower/New";
import FloList from "../views/newflower/flolist/FloList";
import Details from "../views/details/Details";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home/first",
  },
  {
    path: "/details",
    component: Details,
  },
  {
    path: "/newflower",
    component: New,
    children: [
      {
        path: "/newflower/flolist",
        component: FloList,
      },
    ],
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "/home/first",
        component: First,
        children: [
          {
            path: "/home/first/list",
            component: List,
          },
        ],
      },
      {
        path: "/home/search",
        component: Search,
      },
      {
        path: "/home/carts",
        component: Carts,
      },
      {
        path: "/home/my",
        component: My,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
