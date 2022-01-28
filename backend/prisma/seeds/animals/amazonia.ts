import { Prisma, PrismaClient } from '@prisma/client';
import { buildPrismaImage } from '../../seed';
import { getAnimalsImagesByBiome } from '../animals';
const prisma = new PrismaClient();

export async function amazonia() {
  const animals = getAnimalsImagesByBiome('amazonia') as any;

  const botoCorDeRosaIcon = buildPrismaImage(animals['boto_cor_de_rosa']['icon']);
  const botoCorDeRosaImages = animals['boto_cor_de_rosa']['images'].map((image: string) => buildPrismaImage(image));
  const botoCorDeRosaData: Prisma.AnimalCreateInput = {
    name: 'Boto-cor-de-rosa',
    cientificName: 'Inia geoffrensis',
    otherNames: ['Boto-rosa'],
    conservationStatus: 'EN',
    description: '',
    biome: {
      connect: {
        name: 'Amazônia',
      },
    },
    threats: {
      connect: [{ name: 'Hidrelétricas' }],
    },
  };
  const botoCorDeRosa = await prisma.animal.upsert({
    where: { cientificName: 'Inia geoffrensis' },
    update: botoCorDeRosaData,
    create: {
      ...botoCorDeRosaData,
      icon: {
        create: botoCorDeRosaIcon,
      },
      images: {
        createMany: {
          data: botoCorDeRosaImages,
        },
      },
    },
  });

  const harpiaIcon = buildPrismaImage(animals['harpia']['icon']);
  const harpiaImages = animals['harpia']['images'].map((image: string) => buildPrismaImage(image));
  const harpiaData: Prisma.AnimalCreateInput = {
    name: 'Gavião Real',
    cientificName: 'Harpia harpyja',
    otherNames: [
      'Harpia',
      'gavião-de-penacho',
      'sdsdsd',
      'uiraçu',
      'uraçu',
      'uiracuir',
      'uiraquer',
      'cutucurim',
      'uiraçu-verdadeiro',
    ],
    conservationStatus: 'VU',
    description: '',
    biome: {
      connect: {
        name: 'Amazônia',
      },
    },
    threats: {
      connect: [{ name: 'Desmatamento' }, { name: 'Caça' }],
    },
  };
  const harpia = await prisma.animal.upsert({
    where: { cientificName: 'Harpia harpyja' },
    update: harpiaData,
    create: {
      ...harpiaData,
      icon: {
        create: harpiaIcon,
      },
      images: {
        createMany: {
          data: harpiaImages,
        },
      },
    },
  });

  const macacoAranhaDaCaraPretaIcon = buildPrismaImage(animals['macaco_aranha_da_cara_preta']['icon']);
  const macacoAranhaDaCaraPretaImages = animals['macaco_aranha_da_cara_preta']['images'].map((image: string) =>
    buildPrismaImage(image)
  );
  const macacoAranhaDaCaraPretaData: Prisma.AnimalCreateInput = {
    name: 'Macaco-aranha-da-cara-preta',
    cientificName: 'Ateles chamek',
    otherNames: ['Macaco-aranha', 'Coatá', 'Coatá-preto'],
    conservationStatus: 'VU',
    description: '',
    biome: {
      connect: {
        name: 'Amazônia',
      },
    },
    threats: {
      connect: [{ name: 'Desmatamento' }, { name: 'Hidrelétricas' }],
    },
  };
  const macacoAranhaDaCaraPreta = await prisma.animal.upsert({
    where: { cientificName: 'Ateles chamek' },
    update: macacoAranhaDaCaraPretaData,
    create: {
      ...macacoAranhaDaCaraPretaData,
      icon: {
        create: macacoAranhaDaCaraPretaIcon,
      },
      images: {
        createMany: {
          data: macacoAranhaDaCaraPretaImages,
        },
      },
    },
  });

  const oncaPintadaIcon = buildPrismaImage(animals['onca_pintada']['icon']);
  const oncaPintadaImages = animals['onca_pintada']['images'].map((image: string) => buildPrismaImage(image));
  const oncaPintadaData: Prisma.AnimalCreateInput = {
    name: 'Onça Pintada',
    cientificName: 'Panthera onca',
    otherNames: [],
    conservationStatus: 'VU',
    description: '',
    biome: {
      connect: {
        name: 'Amazônia',
      },
    },
    threats: {
      connect: [{ name: 'Desmatamento' }, { name: 'Hidrelétricas' }],
    },
  };
  const oncaPintada = await prisma.animal.upsert({
    where: { cientificName: 'Panthera onca' },
    update: oncaPintadaData,
    create: {
      ...oncaPintadaData,
      icon: {
        create: oncaPintadaIcon,
      },
      images: {
        createMany: {
          data: oncaPintadaImages,
        },
      },
    },
  });

  const peixeBoiDaAmazoniaIcon = buildPrismaImage(animals['peixe_boi_da_amazonia']['icon']);
  const peixeBoiDaAmazoniaImages = animals['peixe_boi_da_amazonia']['images'].map((image: string) =>
    buildPrismaImage(image)
  );
  const peixeBoiDaAmazoniaData: Prisma.AnimalCreateInput = {
    name: 'Peixe-boi-da-amazonia',
    cientificName: 'Trichechus inunguis',
    otherNames: [],
    conservationStatus: 'VU',
    description: '',
    biome: {
      connect: {
        name: 'Amazônia',
      },
    },
    threats: {
      connect: [{ name: 'Desmatamento' }, { name: 'Hidrelétricas' }],
    },
  };
  const peixeBoiDaAmazonia = await prisma.animal.upsert({
    where: { cientificName: 'Trichechus inunguis' },
    update: peixeBoiDaAmazoniaData,
    create: {
      ...peixeBoiDaAmazoniaData,
      icon: {
        create: peixeBoiDaAmazoniaIcon,
      },
      images: {
        createMany: {
          data: peixeBoiDaAmazoniaImages,
        },
      },
    },
  });

  console.log({ botoCorDeRosa, harpia, macacoAranhaDaCaraPreta, oncaPintada, peixeBoiDaAmazonia });
}
