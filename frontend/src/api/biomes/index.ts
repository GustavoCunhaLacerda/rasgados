import { Image } from '..';
import { axios } from '../../plugins/axios';

export type Biome = {
  id: number;
  name: string;
  description: string;
  map: Image;
  images: Image[];
};

export const biomes = {
  list() {
    return axios.get<Biome[]>('/biomes/all');
  },

  get(biomeId: number) {
    return axios.get<Biome>(`/biomes/${biomeId}`);
  },
};
