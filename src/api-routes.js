import { userApi } from "./api/users-api.js";
import { whereaboutsApi } from "./api/whereabouts-api.js";
import { candidatesApi } from "./api/candidates-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },

  { method: "GET", path: "/api/whereabouts", config: whereaboutsApi.findAll },
  { method: "GET", path: "/api/candidates/{id}/whereabouts", config: whereaboutsApi.findByCandidate },
  { method: "POST", path: "/api/candidates/{id}/whereabouts", config: whereaboutsApi.makeWhereabout },
  { method: "DELETE", path: "/api/whereabouts", config: whereaboutsApi.deleteAll },

  { method: "GET", path: "/api/candidates", config: candidatesApi.find },
  { method: "GET", path: "/api/candidates/{id}", config: candidatesApi.findOne },
  { method: "POST", path: "/api/candidates", config: candidatesApi.create },
  { method: "DELETE", path: "/api/candidates/{id}", config: candidatesApi.deleteOne },
  { method: "DELETE", path: "/api/candidates", config: candidatesApi.deleteAll },
];
