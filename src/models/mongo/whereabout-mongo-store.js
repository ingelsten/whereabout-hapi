import { Whereabout } from "./whereabout.js";

export const whereaboutMongoStore = {
  async getAllWhereabouts() {
    const whereabouts = await Whereabout.find().populate("donor").populate("candidate").lean();
    return whereabouts;
  },

  async getWhereaboutsByCandidate(id) {
    const whereabouts = await Whereabout.find({ candidate: id });
    return whereabouts;
  },

  async donate(amount, method, donor, candidate, lat, lng) {
    const newWhereabout = new Whereabout({
      amount,
      method,
      donor: donor._id,
      candidate: candidate._id,
      lat,
      lng,
    });
    await newWhereabout.save();
    return newWhereabout;
  },

  async deleteAll() {
    await Whereabout.deleteMany({});
  },
};
