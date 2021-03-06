import Boom from "@hapi/boom";
import {db} from "../models/db.js";

export const whereaboutsApi = {
  findAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const whereabouts = db.whereaboutStore.getAllWhereabouts();
      return whereabouts;
    },
  },
  findByEmployee: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const whereabouts = await db.whereaboutStore.getWhereaboutsByEmployee(request.params.id);
      return whereabouts;
    },
  },

  makeWhereabout: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const employee = await db.employeeStore.findById(request.params.id);
      if (!employee) {
        return Boom.notFound("No Employee with this id");
      }
      const whereabout = await db.whereaboutStore.addjob(
          request.payload.jobvalue,
          request.payload.jobcategory,
          request.auth.credentials,
          employee,
          request.payload.lat,
          request.payload.long,
      );
      return whereabout;
    },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      await db.whereaboutStore.deleteAll();
      return {success: true};
    },
  },
};
