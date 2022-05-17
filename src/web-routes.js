import { accountsController } from "./controllers/accounts-controller.js";
import { whereaboutsController } from "./controllers/whereabouts-controller.js";

export const webRoutes = [
  { method: "GET", path: "/", config: accountsController.index },
  { method: "GET", path: "/signup", config: accountsController.showSignup },
  { method: "GET", path: "/login", config: accountsController.showLogin },
  { method: "GET", path: "/logout", config: accountsController.logout },
  { method: "POST", path: "/register", config: accountsController.signup },
  { method: "POST", path: "/authenticate", config: accountsController.login },

  { method: "GET", path: "/whereabout", config: whereaboutsController.index },
  { method: "POST", path: "/whereabout", config: whereaboutsController.whereabout },
  { method: "GET", path: "/report", config: whereaboutsController.report },

  {
    method: "GET",
    path: "/{param*}",
    handler: {
      directory: {
        path: "./public",
      },
    },
    options: { auth: false },
  },
];
