import Mongoose from "mongoose";

const { Schema } = Mongoose;

const whereaboutSchema = new Schema({
  jobvalue: Number,
  jobcategory: String,
  lat: String,
  long: String,
  img: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  employee: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
  },
});

export const Whereabout = Mongoose.model("Whereabout", whereaboutSchema);
