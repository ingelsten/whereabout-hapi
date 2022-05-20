import { Employee } from "./employee.js";

export const employeeMongoStore = {
  async getAllEmployees() {
    const employees = await Employee.find().lean();
    return employees;
  },

  async findById(id) {
    const employee = await Employee.findOne({ _id: id }).lean();
    return employee;
  },

  async findByName(lastName, firstName) {
    const employee = await Employee.findOne({
      lastName,
      firstName,
    });
    return employee;
  },
};
