import axios from "../../plugins/axios";

export default {
  list() {
    return axios.get("/animals/all");
  },

  get(animalId: string) {
    return axios.get("/animals/" + animalId);
  },
};
