import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DriverStandings from "../views/DriverStandings.vue";
import DriverDetails from "../views/DriverDetails.vue";
import ConstructorStandings from "../views/ConstructorStandings.vue";
import ConstructorDetails from "../views/ConstructorDetails.vue";
import LastResults from "../views/LastRaceResult.vue";
import Calendar from "../views/Calendar.vue";
import RaceDetails from "../views/RaceDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/driver-standings",
    name: "Driver-Standings",
    component: DriverStandings,
  },
  {
    path: "/driver-detail/:id",
    name: "Driver-Details",
    props: true,
    component: DriverDetails,
  },
  {
    path: "/constructor-standings",
    name: "Constructor-Standings",
    component: ConstructorStandings,
  },
  {
    path: "/constructor-standings/:id",
    name: "Constructor-Details",
    props: true,
    component: ConstructorDetails,
  },
  {
    path: "/last-results",
    name: "Last-Results",
    component: LastResults,
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar,
  },
  {
    path: "/calendar/:id",
    name: "Race-Details",
    props: true,
    component: RaceDetails,
  },
];

const history = createWebHistory();

const router = new createRouter({
  history, // DEFAULT: '/'
  routes,
});

export default router;
