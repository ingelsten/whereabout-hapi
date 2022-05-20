import Boom from "@hapi/boom";
import { Employee } from "../models/mongo/employee.js";

export const employeesApi = {
  find: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const employees = await Employee.find();
      return employees;
    },
  },

  findOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const employee = await Employee.findOne({ _id: request.params.id });
        if (!employee) {
          return Boom.notFound("No Employee with this id");
        }
        return employee;
      } catch (err) {
        return Boom.notFound("No Employee with this id");
      }
    },
  },

  create: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const newEmployee = new Employee(request.payload);
      const employee = await newEmployee.save();
      if (employee) {
        return h.response(employee).code(201);
      }
      return Boom.badImplementation("error creating employee");
    },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      await Employee.remove({});
      return { success: true };
    },
  },

  deleteOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const response = await Employee.deleteOne({ _id: request.params.id });
      if (response.deletedCount == 1) {
        return { success: true };
      }
      return Boom.notFound("id not found");
    },
  },
};
