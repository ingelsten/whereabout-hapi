import { Whereabout } from "./whereabout.js";

export const whereaboutMongoStore = {
  async getAllWhereabouts() {
    const whereabouts = await Whereabout.find().populate("donor").populate("employee").lean();
    return whereabouts;
  },

  async getWhereaboutsByEmployee(id) {
    const whereabouts = await Whereabout.find({ employee: id });
    return whereabouts;
  },

  async donate(amount, method, donor, employee, lat, lng) {
    const newWhereabout = new Whereabout({
      amount,
      method,
      donor: donor._id,
      employee: employee._id,
      lat,
      lng,
    });
    await newWhereabout.save();
    return newWhereabout;
  },

  async deleteAll() {
    await Whereabout.deleteMany({});
  },
  async updateWhereabout(updatedWhereabout) {
    const whereabout = await Whereabout.findOne({ _id: updatedWhereabout._id });
    whereabout.title = updatedWhereabout.title;
    whereabout.img = updatedWhereabout.img;
    await whereabout.save();
  },

};
