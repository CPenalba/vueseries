import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import HomeSeries from "./components/HomeSeries.vue";
import DetallesSerie from "./components/DetallesSerie.vue";
import BuscarPersonajes from "./components/BuscarPersonajes.vue";
import CrearPersonaje from "./components/CrearPersonaje.vue";
import ModificarPersonaje from "./components/ModificarPersonaje.vue";

const myRoutes = [
  { path: "/", component: HomeSeries },
  { path: "/detalles/:id", component: DetallesSerie },
  { path: "/buscarpers/:id", component: BuscarPersonajes },
  { path: "/crear", component: CrearPersonaje },
  { path: "/modificar", component: ModificarPersonaje },
];

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

export default router;
