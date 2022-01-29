import { Image } from '..';
import axios from '../../plugins/axios';

export type Threat = {
  id: number;
  name: string;
  description: string;
  map: Image;
  images: Image[];
};

export default {
  list() {
    return axios.get('/threats/all');
  },

  get(threatId: number) {
    return axios.get(`/threats/${threatId}`);
  },
};
