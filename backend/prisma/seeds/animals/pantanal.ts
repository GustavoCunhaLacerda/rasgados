import { Prisma, PrismaClient } from '@prisma/client';
import { buildPrismaImage } from '../../seed';
import { getAnimalsImagesByBiome } from '../animals';
const prisma = new PrismaClient();

export async function pantanal() {
  const animals = getAnimalsImagesByBiome('pantanal') as any;

  const ariranhaIcon = buildPrismaImage(animals['ariranha']['icon']);
  const ariranhaImages = animals['ariranha']['images'].map((image: string) => buildPrismaImage(image));
  const ariranhaData: Prisma.AnimalCreateInput = {
    name: 'Ariranha',
    cientificName: 'Pteronura brasiliensis',
    otherNames: ['Lontra gigante', "onça-d'água"],
    conservationStatus: 'VU',
    description: '',
    biome: {
      connect: {
        name: 'Pantanal',
      },
    },
    threats: {
      connect: [{ name: 'Caça' }, { name: 'Desmatamento' }, { name: 'Lixo' }, { name: 'Hidrelétricas' }],
    },
  };
  const ariranha = await prisma.animal.upsert({
    where: { cientificName: 'Pteronura brasiliensis' },
    update: ariranhaData,
    create: {
      ...ariranhaData,
      icon: {
        create: ariranhaIcon,
      },
      images: {
        createMany: {
          data: ariranhaImages,
        },
      },
    },
  });

  const catitaIcon = buildPrismaImage(animals['catita']['icon']);
  const catitaImages = animals['catita']['images'].map((image: string) => buildPrismaImage(image));
  const catitaData: Prisma.AnimalCreateInput = {
    name: 'Catita',
    cientificName: 'Thylamys macrurus',
    otherNames: [],
    conservationStatus: 'EN',
    description: '',
    biome: {
      connect: {
        name: 'Pantanal',
      },
    },
    threats: {
      connect: [{ name: 'Agropecuária' }],
    },
  };
  const catita = await prisma.animal.upsert({
    where: { cientificName: 'Thylamys macrurus' },
    update: catitaData,
    create: {
      ...catitaData,
      icon: {
        create: catitaIcon,
      },
      images: {
        createMany: {
          data: catitaImages,
        },
      },
    },
  });

  const cervoDoPantanalIcon = buildPrismaImage(animals['cervo_do_pantanal']['icon']);
  const cervoDoPantanalImages = animals['cervo_do_pantanal']['images'].map((image: string) => buildPrismaImage(image));
  const cervoDoPantanalData: Prisma.AnimalCreateInput = {
    name: 'Cervo-do-pantanal',
    cientificName: 'Blastocerus dichotomus',
    otherNames: ['Guaçu-puçu', 'Duaçuapara'],
    conservationStatus: 'VU',
    description: '',
    biome: {
      connect: {
        name: 'Pantanal',
      },
    },
    threats: {
      connect: [{ name: 'Desmatamento' }, { name: 'Caça' }, { name: 'Hidrelétricas' }],
    },
  };
  const cervoDoPantanal = await prisma.animal.upsert({
    where: { cientificName: 'Blastocerus dichotomus' },
    update: cervoDoPantanalData,
    create: {
      ...cervoDoPantanalData,
      icon: {
        create: cervoDoPantanalIcon,
      },
      images: {
        createMany: {
          data: cervoDoPantanalImages,
        },
      },
    },
  });

  const tamanduaBandeiraIcon = buildPrismaImage(animals['tamandua_bandeira']['icon']);
  const tamanduaBandeiraImages = animals['tamandua_bandeira']['images'].map((image: string) => buildPrismaImage(image));
  const tamanduaBandeiraData: Prisma.AnimalCreateInput = {
    name: 'Tamanduá-bandeira',
    cientificName: 'Myrmecophaga tridactyla',
    otherNames: ['Papa-formigas', 'Tamanduá-açú', 'Jurumi', 'Jurumim', 'Bandeira', 'Bandurra'],
    conservationStatus: 'VU',
    description: '',
    biome: {
      connect: {
        name: 'Pantanal',
      },
    },
    threats: {
      connect: [
        { name: 'Queimada' },
        { name: 'Agropecuária' },
        { name: 'Desmatamento' },
        { name: 'Ferrovias e Rodovias' },
      ],
    },
  };
  const tamanduaBandeira = await prisma.animal.upsert({
    where: { cientificName: 'Myrmecophaga tridactyla' },
    update: tamanduaBandeiraData,
    create: {
      ...tamanduaBandeiraData,
      icon: {
        create: tamanduaBandeiraIcon,
      },
      images: {
        createMany: {
          data: tamanduaBandeiraImages,
        },
      },
    },
  });

  const tiribaDoParanaIcon = buildPrismaImage(animals['tiriba_de_pfrimer']['icon']);
  const tiribaDoParanaImages = animals['tiriba_de_pfrimer']['images'].map((image: string) => buildPrismaImage(image));
  const tiribaDoParanaData: Prisma.AnimalCreateInput = {
    name: 'Tiriba-do-paranã',
    cientificName: 'Pyrrhura pfrimeri',
    otherNames: ['Tiriba-do-pfrimer'],
    conservationStatus: 'EN',
    description: '',
    biome: {
      connect: {
        name: 'Pantanal',
      },
    },
    threats: {
      connect: [{ name: 'Desmatamento' }, { name: 'Queimada' }, { name: 'Hidrelétricas' }, { name: 'Agropecuária' }],
    },
  };
  const tiribaDoParana = await prisma.animal.upsert({
    where: { cientificName: 'Pyrrhura pfrimeri' },
    update: tiribaDoParanaData,
    create: {
      ...tiribaDoParanaData,
      icon: {
        create: tiribaDoParanaIcon,
      },
      images: {
        createMany: {
          data: tiribaDoParanaImages,
        },
      },
    },
  });

  console.log({ ariranha, catita, cervoDoPantanal, tamanduaBandeira, tiribaDoParana });
}
