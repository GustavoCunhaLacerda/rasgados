import axios from "../../plugins/axios";

export default {
  list() {
    return axios.get("/biomes/all");
  },

  get(biomeId: string) {
    return axios.get("/biomes/" + biomeId);
  },
};
