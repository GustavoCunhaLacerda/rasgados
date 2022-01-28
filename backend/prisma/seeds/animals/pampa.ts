import { Prisma, PrismaClient } from '@prisma/client';
import { buildPrismaImage } from '../../seed';
import { getAnimalsImagesByBiome } from '../animals';
const prisma = new PrismaClient();

export async function pampa() {
  const animals = getAnimalsImagesByBiome('pampa') as any;

  const cardealAmareloIcon = buildPrismaImage(animals['cardeal_amarelo']['icon']);
  const cardealAmareloImages = animals['cardeal_amarelo']['images'].map((image: string) => buildPrismaImage(image));
  const cardealAmareloData: Prisma.AnimalCreateInput = {
    name: 'Cardeal-amarelo',
    cientificName: 'Gubernatrix cristata',
    otherNames: [],
    conservationStatus: 'EN',
    description: '',
    biome: {
      connect: {
        name: 'Pampa',
      },
    },
    threats: {
      connect: [{ name: 'Desmatamento' }, { name: 'Caça' }],
    },
  };
  const cardealAmarelo = await prisma.animal.upsert({
    where: { cientificName: 'Gubernatrix cristata' },
    update: cardealAmareloData,
    create: {
      ...cardealAmareloData,
      icon: {
        create: cardealAmareloIcon,
      },
      images: {
        createMany: {
          data: cardealAmareloImages,
        },
      },
    },
  });

  const cobraEspadaDosPampasIcon = buildPrismaImage(animals['cobra_espada_dos_pampas']['icon']);
  const cobraEspadaDosPampasImages = animals['cobra_espada_dos_pampas']['images'].map((image: string) =>
    buildPrismaImage(image)
  );
  const cobraEspadaDosPampasData: Prisma.AnimalCreateInput = {
    name: 'Cobra-espada dos Pampas',
    cientificName: 'Calamodontophis paucidens',
    otherNames: [],
    conservationStatus: 'EN',
    description: '',
    biome: {
      connect: {
        name: 'Pampa',
      },
    },
    threats: {
      connect: [{ name: 'Desmatamento' }],
    },
  };
  const cobraEspadaDosPampas = await prisma.animal.upsert({
    where: { cientificName: 'Calamodontophis paucidens' },
    update: cobraEspadaDosPampasData,
    create: {
      ...cobraEspadaDosPampasData,
      icon: {
        create: cobraEspadaDosPampasIcon,
      },
      images: {
        createMany: {
          data: cobraEspadaDosPampasImages,
        },
      },
    },
  });

  const gatoDosPampasIcon = buildPrismaImage(animals['gato_dos_pampas']['icon']);
  const gatoDosPampasImages = animals['gato_dos_pampas']['images'].map((image: string) => buildPrismaImage(image));
  const gatoDosPampasData: Prisma.AnimalCreateInput = {
    name: 'Gato-dos-pampas',
    cientificName: 'Leopardus pajeros',
    otherNames: ['gato-palheiro'],
    conservationStatus: 'VU',
    description: '',
    biome: {
      connect: {
        name: 'Pampa',
      },
    },
    threats: {
      connect: [{ name: 'Caça' }, { name: 'Desmatamento' }, { name: 'Ferrovias e Rodovias' }],
    },
  };
  const gatoDosPampas = await prisma.animal.upsert({
    where: { cientificName: 'Leopardus pajeros' },
    update: gatoDosPampasData,
    create: {
      ...gatoDosPampasData,
      icon: {
        create: gatoDosPampasIcon,
      },
      images: {
        createMany: {
          data: gatoDosPampasImages,
        },
      },
    },
  });

  const lagartixaDasDunasIcon = buildPrismaImage(animals['lagartixa_das_dunas']['icon']);
  const lagartixaDasDunasImages = animals['lagartixa_das_dunas']['images'].map((image: string) =>
    buildPrismaImage(image)
  );
  const lagartixaDasDunasData: Prisma.AnimalCreateInput = {
    name: 'Lagartixa-das-dunas',
    cientificName: 'Liolaemus occipitalis',
    otherNames: [],
    conservationStatus: 'VU',
    description: '',
    biome: {
      connect: {
        name: 'Pampa',
      },
    },
    threats: {
      connect: [{ name: 'Expansão Urbana' }],
    },
  };
  const lagartixaDasDunas = await prisma.animal.upsert({
    where: { cientificName: 'Liolaemus occipitalis' },
    update: lagartixaDasDunasData,
    create: {
      ...lagartixaDasDunasData,
      icon: {
        create: lagartixaDasDunasIcon,
      },
      images: {
        createMany: {
          data: lagartixaDasDunasImages,
        },
      },
    },
  });

  const papagaioCharaoIcon = buildPrismaImage(animals['papagaio_charao']['icon']);
  const papagaioCharaoImages = animals['papagaio_charao']['images'].map((image: string) => buildPrismaImage(image));
  const papagaioCharaoData: Prisma.AnimalCreateInput = {
    name: 'Papagaio-charão',
    cientificName: 'Amazona pretrei',
    otherNames: ['Papagaio-da-serra', 'Charão'],
    conservationStatus: 'VU',
    description: '',
    biome: {
      connect: {
        name: 'Pampa',
      },
    },
    threats: {
      connect: [{ name: 'Caça' }, { name: 'Desmatamento' }],
    },
  };
  const papagaioCharao = await prisma.animal.upsert({
    where: { cientificName: 'Amazona pretrei' },
    update: papagaioCharaoData,
    create: {
      ...papagaioCharaoData,
      icon: {
        create: papagaioCharaoIcon,
      },
      images: {
        createMany: {
          data: papagaioCharaoImages,
        },
      },
    },
  });

  console.log({ cardealAmarelo, cobraEspadaDosPampas, gatoDosPampas, lagartixaDasDunas, papagaioCharao });
}
