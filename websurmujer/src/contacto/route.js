export const ContactoRoutes = [
  {
    path: "/contacto",
    name: "contacto",
    component: () => import(/*webpackChunkName: "contacto" */ "./contacto"),
    props: true,
  },
];
