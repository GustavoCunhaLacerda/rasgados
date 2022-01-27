import path from 'path';
import glob from 'glob';
import { amazonia } from './animals/amazonia';
import { caatinga } from './animals/caatinga';
import { cerrado } from './animals/cerrado';
import { mataAtlantica } from './animals/mataAtlantica';
import { pampa } from './animals/pampa';
import { pantanal } from './animals/pantanal';

export function getAnimalsImagesByBiome(biome: string) {
  const animals = glob.sync(`images/animals/${biome}/*`, {
    cwd: 'public',
  });

  const animalsLoaded = animals.reduce((acc, animal) => {
    const files = glob.sync(`${animal}/*`, {
      cwd: 'public',
    });

    const icon = files.find(file => path.extname(file) === '.svg') ?? null;
    const images = files.filter(file => path.extname(file) !== '.svg');

    return { ...acc, [path.basename(animal)]: { icon, images } };
  }, {});

  return animalsLoaded;
}

export async function animals() {
  await amazonia();
  await caatinga();
  await cerrado();
  await mataAtlantica();
  await pampa();
  await pantanal();
}
