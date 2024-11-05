import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import HomeSeries from "./components/HomeSeries.vue";
import DetallesSerie from "./components/DetallesSerie.vue";
import BuscarPersonajes from "./components/BuscarPersonajes.vue";

const myRoutes = [
  { path: "/", component: HomeSeries },
  { path: "/detalles/:id", component: DetallesSerie },
  { path: "/buscarpers/:id", component: BuscarPersonajes },
];

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

export default router;
