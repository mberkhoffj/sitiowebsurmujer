export const AboutRoutes = [
    {
      path: "/sobre-nosotros",
      component: () =>
        import(/*webpackChunkName: "about" */ "./about"),
    },
  ];