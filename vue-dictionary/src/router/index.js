import Vue from "vue";
import VueRouter from "vue-router";
import Dictionary from "../views/Dictionary.vue";
import Synonym from "../views/Synonym.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dictionary",
    component: Dictionary,
  },
  {
    path: "/synonym/:id",
    name: "Synonym",
    component: Synonym,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
