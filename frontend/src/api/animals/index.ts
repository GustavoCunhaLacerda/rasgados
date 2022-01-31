import { Image } from '..';
import { axios } from '../../plugins/axios';
import { Biome } from '../biomes';
import { Threat } from '../threats';

export enum ConservationStatus {
  EX,
  EW,
  CR,
  EN,
  VU,
  NT,
  LC,
}

export type Animal = {
  id: number;
  name: string;
  cientificName: string;
  otherNames: string[];
  conservationStatus: ConservationStatus;
  description: string;
  icon: Image;
  images: Image[];
  biome: Biome;
  threats: Threat[];
};

export const animals = {
  list() {
    return axios.get<Animal[]>('/animals/all');
  },

  getOne(animalId: number) {
    return axios.get<Animal>(`/animals/${animalId}`);
  },

  getByBiome(biomeId: number) {
    return axios.get<Animal[]>(`/animals/biome/${biomeId}`);
  },
};
