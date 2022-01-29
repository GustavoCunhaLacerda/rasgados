import animals from './animals';
import biomes from './biomes';
import threats from './threats';

export type Image = {
  id: number;
  path: string;
  name: string;
};

export default {
  animals,
  biomes,
  threats,
};
