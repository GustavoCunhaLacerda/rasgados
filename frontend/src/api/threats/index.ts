import { Image } from '..';
import { axios } from '../../plugins/axios';

export type Threat = {
  id: number;
  name: string;
  description: string;
  map: Image;
  images: Image[];
};

export const threats = {
  list() {
    return axios.get<Threat[]>('/threats/all');
  },

  get(threatId: number) {
    return axios.get(`/threats/${threatId}`);
  },
};
