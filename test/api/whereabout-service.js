import axios from "axios";
import { serviceUrl } from "../fixtures.js";

export const whereaboutService = {
  whereaboutUrl: serviceUrl,

  async createUser(user) {
    const res = await axios.post(`${this.whereaboutUrl}/api/users`, user);
    return res.data;
  },

  async getUser(id) {
    const res = await axios.get(`${this.whereaboutUrl}/api/users/${id}`);
    return res.data;
  },

  async getAllUsers() {
    try {
      const res = await axios.get(`${this.whereaboutUrl}/api/users`);
      return res.data;
    } catch (e) {
      return null;
    }
  },

  async deleteAllUsers() {
    const res = await axios.delete(`${this.whereaboutUrl}/api/users`);
    return res.data;
  },

  async authenticate(user) {
    const response = await axios.post(`${this.whereaboutUrl}/api/users/authenticate`, user);
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    return response.data;
  },

  async clearAuth() {
    axios.defaults.headers.common.Authorization = "";
  },

  async makeWhereabout(id, whereabout) {
    const response = await axios.post(`${this.whereaboutUrl}/api/candidates/${id}/whereabouts`, whereabout);
    return response.data;
  },

  async getWhereabouts(id) {
    const response = await axios.get(`${this.whereaboutUrl}/api/candidates/${id}/whereabouts`);
    return response.data;
  },

  async createCandidate(newCandidate) {
    const response = await axios.post(`${this.whereaboutUrl}/api/candidates`, newCandidate);
    return response.data;
  },
};
