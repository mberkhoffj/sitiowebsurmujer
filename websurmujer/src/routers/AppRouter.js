import Vue from "vue";
import Router from "vue-router";

// Importa los componentes aquí
//import Nav from '../components/nav/Nav.vue';
//import Whatsapp from '../components/whatsapp/Whatsapp.vue';
import { AboutRoutes } from "../about/route.js";
import { FquestionRoutes } from "../fquestions/route.js";
import { ProyectsRoutes } from "../proyects/route.js";
import { DashboardRoutes } from "../dashboard/route.js";
import { ContactoRoutes } from "../contacto/route.js";
import { AboutUniversity } from "../aboutUniversity/route.js";
//import { ColectorSolarRoutes } from "../proyects/colector-solar/cs.vue";
//import { PdaRoutes } from "../proyects/pda/pda.vue";

Vue.use(Router);

export default [
  ...FquestionRoutes,
  ...AboutRoutes,
  ...ProyectsRoutes,
  //...PdaRoutes,
  //...ColectorSolarRoutes,
  ...ContactoRoutes,
  ...DashboardRoutes,
  ...AboutUniversity,
];
