export const DashboardRoutes = [
    {
      path: "/",
      component: () =>
        import(/*webpackChunkName: "dashboard" */ "./dashboard"),
    },
  ];