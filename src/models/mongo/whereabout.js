import Mongoose from "mongoose";

const { Schema } = Mongoose;

const whereaboutSchema = new Schema({
  amount: Number,
  method: String,
  lat: String,
  long: String,
  img: String,
  donor: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  employee: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
  },
});

export const Whereabout = Mongoose.model("Whereabout", whereaboutSchema);
