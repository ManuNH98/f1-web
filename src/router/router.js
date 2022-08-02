import { createRouter, createWebHistory } from "vue-router";
import DriverStandings from "../views/DriverStandings.vue";
import ConstructorStandings from "../views/ConstructorStandings.vue";
import LastResults from "../views/LastRaceResult.vue";

const routes = [
  {
    path: "/",
    name: "Clasificación-Pilotos",
    component: DriverStandings,
  },
  {
    path: "/constructor-standings",
    name: "Clasificación-Constructores",
    component: ConstructorStandings,
  },
  {
    path: "/last-results",
    name: "Resultados-Última-Carrera",
    component: LastResults,
  },
];

const history = createWebHistory();

const router = new createRouter({
  history, // DEFAULT: '/'
  routes,
});

export default router;
