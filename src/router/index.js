import Vue from "vue";
import VueRouter from "vue-router";
import Cats from "../views/Cats.vue";
import Dogs from "../views/Dogs.vue";
import Home from "../views/Home.vue";
import Pet from "../views/Pets.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cats",
    name: "Cats",
    component: Cats,
  },
  {
    path: "/pets/:species/:id",
    name: "Pet",
    component: Pet,
  },
  {
    path: "/dogs",
    name: "Dogs",
    component: Dogs,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
