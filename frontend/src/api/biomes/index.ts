import { Image } from '..';
import axios from '../../plugins/axios';

export type Biome = {
  id: number;
  name: string;
  description: string;
  map: Image;
  images: Image[];
};

export default {
  list() {
    return axios.get('/biomes/all');
  },

  get(biomeId: number) {
    return axios.get(`/biomes/${biomeId}`);
  },
};
