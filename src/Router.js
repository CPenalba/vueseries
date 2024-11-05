import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import HomeSeries from "./components/HomeSeries.vue";

const myRoutes = [
  { path: "/", component: HomeSeries }
];

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

export default router;
