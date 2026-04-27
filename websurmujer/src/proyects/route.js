export const ProyectsRoutes = [
  {
    path: "/proyectos",
    component: () => import(/*webpackChunkName: "proyects" */ "./proyects.vue"),
  },
  {
    path: "/proyectos/colector-solar",
    name: "colector-solar",
    component: () =>
      import(/*webpackChunkName: "cs" */ "./colector-solar/cs2.vue"),
  },
  {
    path: "/proyectos/pda",
    name: "pda",
    component: () => import(/*webpackChunkName: "pda" */ "./pda/pda.vue"),
  },
  {
    path: "/proyectos/banco-materiales",
    name: "banco-materiales",
    component: () =>
      import(/*webpackChunkName: "bm" */ "./banco-materiales/bm.vue"),
  },
  {
    path: "/proyectos/mejoramiento-vivienda",
    name: "mejoramiento-vivienda",
    component: () =>
      import(/*webpackChunkName: "mv" */ "./mejoramiento-vivienda/mv.vue"),
  },
];
