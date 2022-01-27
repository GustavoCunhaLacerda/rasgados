import { Prisma, PrismaClient } from '@prisma/client';
import { buildPrismaImage } from '../../seed';
import { getAnimalsImagesByBiome } from '../animals';
const prisma = new PrismaClient();

export async function cerrado() {
  const animals = getAnimalsImagesByBiome('cerrado') as any;

  const antaIcon = buildPrismaImage(animals['anta']['icon']);
  const antaImages = animals['anta']['images'].map((image: string) => buildPrismaImage(image));
  const antaData: Prisma.AnimalCreateInput = {
    name: 'Anta',
    cientificName: 'Tapirus terrestris',
    otherNames: ['Anta-brasileira', 'Tapir'],
    conservationStatus: 'VU',
    description: '',
    icon: {
      create: antaIcon,
    },
    images: {
      createMany: {
        data: antaImages,
      },
    },
    biome: {
      connect: {
        name: 'Cerrado',
      },
    },
    threats: {
      connect: [{ name: 'Desmatamento' }, { name: 'Expansão Urbana' }],
    },
  };
  const anta = await prisma.animal.upsert({
    where: { cientificName: 'Tapirus terrestris' },
    update: antaData,
    create: antaData,
  });

  const cachorroVinagreIcon = buildPrismaImage(animals['cachorro_vinagre']['icon']);
  const cachorroVinagreImages = animals['cachorro_vinagre']['images'].map((image: string) => buildPrismaImage(image));
  const cachorroVinagreData: Prisma.AnimalCreateInput = {
    name: 'Cachorro-vinagre',
    cientificName: 'Speothos venaticus',
    otherNames: ['Aracambé', 'Jaguacininga', 'Jaguaracambé', 'Janauíra', 'Januaíra'],
    conservationStatus: 'VU',
    description: '',
    icon: {
      create: cachorroVinagreIcon,
    },
    images: {
      createMany: {
        data: cachorroVinagreImages,
      },
    },
    biome: {
      connect: {
        name: 'Cerrado',
      },
    },
    threats: {
      connect: [{ name: 'Desmatamento' }],
    },
  };
  const cachorroVinagre = await prisma.animal.upsert({
    where: { cientificName: 'Speothos venaticus' },
    update: cachorroVinagreData,
    create: cachorroVinagreData,
  });

  const gatoMaracajaIcon = buildPrismaImage(animals['gato_maracaja']['icon']);
  const gatoMaracajaImages = animals['gato_maracaja']['images'].map((image: string) => buildPrismaImage(image));
  const gatoMaracajaData: Prisma.AnimalCreateInput = {
    name: 'Gato-maracajá',
    cientificName: 'Leopardus wiedii',
    otherNames: ['Maracajá', 'Margay'],
    conservationStatus: 'VU',
    description: '',
    icon: {
      create: gatoMaracajaIcon,
    },
    images: {
      createMany: {
        data: gatoMaracajaImages,
      },
    },
    biome: {
      connect: {
        name: 'Cerrado',
      },
    },
    threats: {
      connect: [{ name: 'Agropecuária' }, { name: 'Caça' }],
    },
  };
  const gatoMaracaja = await prisma.animal.upsert({
    where: { cientificName: 'Leopardus wiedii' },
    update: gatoMaracajaData,
    create: gatoMaracajaData,
  });

  const loboGuaraIcon = buildPrismaImage(animals['lobo_guara']['icon']);
  const loboGuaraImages = animals['lobo_guara']['images'].map((image: string) => buildPrismaImage(image));
  const loboGuaraData: Prisma.AnimalCreateInput = {
    name: 'Lobo-guará',
    cientificName: 'Chrysocyon brachyurus',
    otherNames: ['Lobo-de-crina', 'Lobo-vermelho', 'Aguará', 'Aguaraçu'],
    conservationStatus: 'VU',
    description: '',
    icon: {
      create: loboGuaraIcon,
    },
    images: {
      createMany: {
        data: loboGuaraImages,
      },
    },
    biome: {
      connect: {
        name: 'Cerrado',
      },
    },
    threats: {
      connect: [{ name: 'Desmatamento' }, { name: 'Expansão Urbana' }],
    },
  };
  const loboGuara = await prisma.animal.upsert({
    where: { cientificName: 'Chrysocyon brachyurus' },
    update: loboGuaraData,
    create: loboGuaraData,
  });

  const morceguinhoDoCerradoIcon = buildPrismaImage(animals['morceguinho_do_cerrado']['icon']);
  const morceguinhoDoCerradoImages = animals['morceguinho_do_cerrado']['images'].map((image: string) =>
    buildPrismaImage(image)
  );
  const morceguinhoDoCerradoData: Prisma.AnimalCreateInput = {
    name: 'Morceguinho-do-cerrado',
    cientificName: 'Lonchophylla dekeyseri',
    otherNames: [],
    conservationStatus: 'EN',
    description: '',
    icon: {
      create: morceguinhoDoCerradoIcon,
    },
    images: {
      createMany: {
        data: morceguinhoDoCerradoImages,
      },
    },
    biome: {
      connect: {
        name: 'Cerrado',
      },
    },
    threats: {
      connect: [{ name: 'Desmatamento' }, { name: 'Expansão Urbana' }],
    },
  };
  const morceguinhoDoCerrado = await prisma.animal.upsert({
    where: { cientificName: 'Lonchophylla dekeyseri' },
    update: morceguinhoDoCerradoData,
    create: morceguinhoDoCerradoData,
  });

  console.log({ anta, cachorroVinagre, gatoMaracaja, loboGuara, morceguinhoDoCerrado });
}
