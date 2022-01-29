import axios from "../../plugins/axios";

export default {
  list() {
    return axios.get("/threats/all");
  },

  get(threatId: string) {
    return axios.get("/threats/" + threatId);
  },
};
