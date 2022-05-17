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
  findByCandidate: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const whereabouts = await db.whereaboutStore.getWhereaboutsByCandidate(request.params.id);
      return whereabouts;
    },
  },

  makeWhereabout: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const candidate = await db.candidateStore.findById(request.params.id);
      if (!candidate) {
        return Boom.notFound("No Candidate with this id");
      }
      const whereabout = await db.whereaboutStore.donate(
          request.payload.amount,
          request.payload.method,
          request.auth.credentials,
          candidate,
          request.payload.lat,
          request.payload.lng,
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
