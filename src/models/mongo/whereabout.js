import Mongoose from "mongoose";

const { Schema } = Mongoose;

const whereaboutSchema = new Schema({
  amount: Number,
  method: String,
  lat: String,
  lng: String,
  img: String,
  donor: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  candidate: {
    type: Schema.Types.ObjectId,
    ref: "Candidate",
  },
});

export const Whereabout = Mongoose.model("Whereabout", whereaboutSchema);
