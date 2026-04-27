import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import "./App.scss";
import VeeValidate, { Validator } from "vee-validate";
import validarRut from "./utils/validateRut";

//import { RootStore } from "./store/index";
import routes from "./routers/AppRouter";
import VueRouter from "vue-router";

/*import Default from "./layout/default";
import Login from "./layout/login";
import Settings from "./layout/settings";
*/
import { BootstrapVue } from "bootstrap-vue";
import axios from "axios";
import VueAxios from "vue-axios";
import Toasted from "vue-toasted";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// import oauthValidator, { excludedRoutes } from "@/utils/oauth-guard";

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VeeValidate);
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);
Vue.use(Toasted, {
  position: "bottom-center",
  duration: 5000,
  theme: "outline",
  action: {
    text: "x",
    onClick: (e, toastObject) => {
      toastObject.goAway(0);
    },
  },
});

Vue.use(VeeValidate);
Validator.extend("rut", {
  getMessage: (field) => `El ${field} no es un RUT válido.`,
  validate: (value) => validarRut.validarRut(value),
});

Validator.localize("es", {
  messages: {
    required: "Este campo es obligatorio",
    email: "Debe ser un correo electrónico válido",
    max: (field, [length]) =>
      `El campo ${field} no debe tener más de ${length} caracteres.`,
    min: (field, [length]) =>
      `El campo ${field} debe tener al menos ${length} caracteres.`,
    regex: (field) => `El campo ${field} no es valido `,
  },
});

const router = new VueRouter({
  routes,
  mode: "history",
  
});

//const store = new Vuex.Store(RootStore);

// router.beforeEach((to, from, next) => {
//   //this evaluate only the routes there are not exclude (logins route)
//   if (!excludedRoutes.includes(to.name)) {

//     // in case the route have to be evaluate , we run the function "oauthValidator"
//     oauthValidator(to, from, next, store);
//   } else {
//     // in the case the route is exclude from evalutate of routes , the user can keep navigating
//     next();
//   }
// });

//Vue.component("default-layout", Default);
//Vue.component("login-layout", Login);
//Vue.component("settings-layout", Settings);

new Vue({
  router,
  //store,
  render: (h) => h(App),
}).$mount("#app");
