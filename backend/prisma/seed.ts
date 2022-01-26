import imageToBase64 from 'image-to-base64';
import path from 'path';
import glob from 'glob';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const biomesList = ['amazonia', 'cerrado', 'caatinga', 'mata_atlantica', 'pampa', 'pantanal'];

const biomesImagesArr = biomesList.map(biome => {
  const files = glob.sync(`assets/biomes/${biome}/*`);
  const mapImage = files.find(file => path.basename(file).includes('map')) ?? null;
  const images = files.filter(file => !path.basename(file).includes('map'));

  return [biome, { mapImage, images }];
});

const biomesImages = Object.fromEntries(biomesImagesArr);

async function convertImage(imgPath: string) {
  try {
    return await imageToBase64(path.resolve(imgPath));
  } catch (error) {
    console.log(error);
  }
}

async function biomes() {
  const amazoniaImages = biomesImages.amazonia;
  const amazoniaMapImage = await convertImage(amazoniaImages.mapImage);

  // const amazonia = prisma.biome.upsert({
  //   where: { name: 'Amazônia' },
  //   update: {},
  //   create: {
  //     name: 'Amazônia',
  //     description:
  //       'A Amazônia ou Floresta Amazônica é a maior floresta "intacta" (sem intervenção humana moderna) do mundo. É casa de boa parte de brasileiros e mais de 180 grupos nativos diferentes, alguns, inclusive, sem contato com a sociedade até hoje. O maior número de povos nativos isolados vive na Amazônia. Esse bioma corresponde a 49% do território brasileiro e está presente em outros países: Bolívia, Colômbia, Equador, Guiana, Guiana Francesa, Peru, Suriname e Venezuela. E no Brasil está presente nos estados: Acre, Amapá, Amazonas, Pará, Roraima, Rondônia, Mato Grosso, Maranhão e Tocantins. Possui aproximadamente 6,7 milhões de km2 sendo 4,2 milhões no Brasil. A região abriga cerca de 10% de todas as espécies da fauna e flora de todo o planeta, sendo a maior região de biodiversidade da Terra. Existem cerca de 40 mil espécies de plantas e mais de 400 mamíferos.',
  //     map: {
  //       create: {
  //         data: amazoniaMapImage
  //       }
  //     },
  //   },
  // });
}

biomes()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
