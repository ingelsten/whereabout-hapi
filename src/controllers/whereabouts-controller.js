import { db } from "../models/db.js";

export const whereaboutsController = {
  index: {
    handler: async function (request, h) {
      const candidates = await db.candidateStore.getAllCandidates();
      return h.view("Donate", { title: "Make a Whereabout", candidates: candidates });
    },
  },
  report: {
    handler: async function (request, h) {
      const whereabouts = await db.whereaboutStore.getAllWhereabouts();
      let total = 0;
      whereabouts.forEach((whereabout) => {
        total += whereabout.amount;
      });
      return h.view("Report", {
        title: "Whereabouts to Date",
        whereabouts: whereabouts,
        total: total,
      });
    },
  },
  donate: {
    handler: async function (request, h) {
      try {
        const loggedInUser = request.auth.credentials;
        const rawCandidate = request.payload.candidate.split(",");
        const candidate = await db.candidateStore.findByName(rawCandidate[0], rawCandidate[1]);
        await db.whereaboutStore.donate(request.payload.amount, request.payload.method, loggedInUser._id, candidate._id);
        return h.redirect("/report");
      } catch (err) {
        return h.view("main", { errors: [{ message: err.message }] });
      }
    },
  },
};
