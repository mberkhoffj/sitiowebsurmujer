export const FquestionRoutes = [
    {
      path: "/preguntas-frecuentes",
      component: () =>
        import(/*webpackChunkName: "fquestion" */ "./fquestion"),
    },
  ];