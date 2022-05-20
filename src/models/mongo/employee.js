import Mongoose from "mongoose";

const { Schema } = Mongoose;

const employeeSchema = Schema({
  firstName: String,
  lastName: String,
  office: String,
});

export const Employee = Mongoose.model("Employee", employeeSchema);
