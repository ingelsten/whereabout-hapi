import { db } from "../models/db.js";
import { imageStore } from "../models/image-store.js";

export const whereaboutsController = {
  index: {
    handler: async function (request, h) {
      const employees = await db.employeeStore.getAllEmployees();
      return h.view("Donate", { title: "Make a Whereabout", employees: employees });
    },
  },
  report: {
    handler: async function (request, h) {
      const whereabouts = await db.whereaboutStore.getAllWhereabouts();
      let total = 0;
      whereabouts.forEach((whereabout) => {
        total += whereabout.jobvalue;
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
        const rawEmployee = request.payload.employee.split(",");
        const employee = await db.employeeStore.findByName(rawEmployee[0], rawEmployee[1]);
        await db.whereaboutStore.donate(request.payload.jobvalue, request.payload.jobcategory, loggedInUser._id, employee._id);
        return h.redirect("/report");
      } catch (err) {
        return h.view("main", { errors: [{ message: err.message }] });
      }
    },
  },
  uploadImage: {
    handler: async function(request, h) {
      try {
        const whereabout = await db.whereaboutStore.getWhereaboutById(request.params.id);
        const file = request.payload.imagefile;
        if (Object.keys(file).length > 0) {
          const url = await imageStore.uploadImage(request.payload.imagefile);
          whereabout.img = url;
          db.whereaboutStore.updateWhereabout(whereabout);
        }
        return h.redirect("/report");
      } catch (err) {
        console.log(err);
        return h.redirect("/report", { errors: [{ message: err.message }] });
      }
    },
    payload: {
      multipart: true,
      output: "data",
      maxBytes: 209715200,
      parse: true
    },
  },
};
