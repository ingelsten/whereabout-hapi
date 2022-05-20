import { userApi } from "./api/users-api.js";
import { whereaboutsApi } from "./api/whereabouts-api.js";
import { employeesApi } from "./api/employees-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },

  { method: "GET", path: "/api/whereabouts", config: whereaboutsApi.findAll },
  { method: "GET", path: "/api/employees/{id}/whereabouts", config: whereaboutsApi.findByEmployee },
  { method: "POST", path: "/api/employees/{id}/whereabouts", config: whereaboutsApi.makeWhereabout },
  { method: "DELETE", path: "/api/whereabouts", config: whereaboutsApi.deleteAll },

  { method: "GET", path: "/api/employees", config: employeesApi.find },
  { method: "GET", path: "/api/employees/{id}", config: employeesApi.findOne },
  { method: "POST", path: "/api/employees", config: employeesApi.create },
  { method: "DELETE", path: "/api/employees/{id}", config: employeesApi.deleteOne },
  { method: "DELETE", path: "/api/employees", config: employeesApi.deleteAll },
];
