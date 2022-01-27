import { Prisma, PrismaClient } from '@prisma/client';
import { buildPrismaImage } from '../../seed';
import { getAnimalsImagesByBiome } from '../animals';
const prisma = new PrismaClient();

export async function caatinga() {
  const animals = getAnimalsImagesByBiome('caatinga') as any;

  const araraAzulDeLearIcon = buildPrismaImage(animals['arara_azul_de_lear']['icon']);
  const araraAzulDeLearImages = animals['arara_azul_de_lear']['images'].map((image: string) => buildPrismaImage(image));
  const araraAzulDeLearData: Prisma.AnimalCreateInput = {
    name: 'Arara-azul-de-lear',
    cientificName: 'Anodorhynchus leari',
    otherNames: ['Arara', 'Arara-azul-menor'],
    conservationStatus: 'EN',
    description: '',
    icon: {
      create: araraAzulDeLearIcon,
    },
    images: {
      createMany: {
        data: araraAzulDeLearImages,
      },
    },
    biome: {
      connect: {
        name: 'Caatinga',
      },
    },
    threats: {
      connect: [{ name: 'Desmatamento' }, { name: 'Caça' }],
    },
  };
  const araraAzulDeLear = await prisma.animal.upsert({
    where: { cientificName: 'Anodorhynchus leari' },
    update: araraAzulDeLearData,
    create: araraAzulDeLearData,
  });

  const guigoDaCaatingaIcon = buildPrismaImage(animals['guigo_da_caatinga']['icon']);
  const guigoDaCaatingaImages = animals['guigo_da_caatinga']['images'].map((image: string) => buildPrismaImage(image));
  const guigoDaCaatingaData: Prisma.AnimalCreateInput = {
    name: 'Guigó-da-caatinga',
    cientificName: 'Callicebus barbarabrownae',
    otherNames: ['Guigó', 'Sauá-loiro', 'Pangola'],
    conservationStatus: 'CR',
    description: '',
    icon: {
      create: guigoDaCaatingaIcon,
    },
    images: {
      createMany: {
        data: guigoDaCaatingaImages,
      },
    },
    biome: {
      connect: {
        name: 'Caatinga',
      },
    },
    threats: {
      connect: [{ name: 'Agropecuária' }],
    },
  };
  const guigoDaCaatinga = await prisma.animal.upsert({
    where: { cientificName: 'Callicebus barbarabrownae' },
    update: guigoDaCaatingaData,
    create: guigoDaCaatingaData,
  });

  const queixadaIcon = buildPrismaImage(animals['queixada']['icon']);
  const queixadaImages = animals['queixada']['images'].map((image: string) => buildPrismaImage(image));
  const queixadaData: Prisma.AnimalCreateInput = {
    name: 'Queixada',
    cientificName: 'Tayassu pecari',
    otherNames: ['Porco-do-mato', 'Queixo-ruivo', 'Taiaçu', 'Cariblanco', 'Chancho do monte'],
    conservationStatus: 'VU',
    description: '',
    icon: {
      create: queixadaIcon,
    },
    images: {
      createMany: {
        data: queixadaImages,
      },
    },
    biome: {
      connect: {
        name: 'Caatinga',
      },
    },
    threats: {
      connect: [{ name: 'Desmatamento' }, { name: 'Caça' }],
    },
  };
  const queixada = await prisma.animal.upsert({
    where: { cientificName: 'Tayassu pecari' },
    update: queixadaData,
    create: queixadaData,
  });

  const soldadinhoDoAraripeIcon = buildPrismaImage(animals['soldadinho_do_araripe']['icon']);
  const soldadinhoDoAraripeImages = animals['soldadinho_do_araripe']['images'].map((image: string) =>
    buildPrismaImage(image)
  );
  const soldadinhoDoAraripeData: Prisma.AnimalCreateInput = {
    name: 'Soldadinho-do-araripe',
    cientificName: 'Antilophia bokermann',
    otherNames: [
      'Galo-da-mata',
      'Língua-de-tamanduá',
      'Lavadeira-da-mata',
      'Uirapuru-matreiro',
      'Cabeça-vermelha-da-mata',
    ],
    conservationStatus: 'VU',
    description: '',
    icon: {
      create: soldadinhoDoAraripeIcon,
    },
    images: {
      createMany: {
        data: soldadinhoDoAraripeImages,
      },
    },
    biome: {
      connect: {
        name: 'Caatinga',
      },
    },
    threats: {
      connect: [{ name: 'Expansão Urbana' }],
    },
  };
  const soldadinhoDoAraripe = await prisma.animal.upsert({
    where: { cientificName: 'Antilophia bokermann' },
    update: soldadinhoDoAraripeData,
    create: soldadinhoDoAraripeData,
  });

  const tatuBolaIcon = buildPrismaImage(animals['tatu_bola']['icon']);
  const tatuBolaImages = animals['tatu_bola']['images'].map((image: string) => buildPrismaImage(image));
  const tatuBolaData: Prisma.AnimalCreateInput = {
    name: 'Tatu Bola',
    cientificName: 'Tolypeutes tricinctus',
    otherNames: ['tatu-apara', 'bola', 'bolinha', 'tranquinha', 'tatu-bola-do-nordeste'],
    conservationStatus: 'EN',
    description: '',
    icon: {
      create: tatuBolaIcon,
    },
    images: {
      createMany: {
        data: tatuBolaImages,
      },
    },
    biome: {
      connect: {
        name: 'Caatinga',
      },
    },
    threats: {
      connect: [{ name: 'Desmatamento' }, { name: 'Caça' }],
    },
  };
  const tatuBola = await prisma.animal.upsert({
    where: { cientificName: 'Tolypeutes tricinctus' },
    update: tatuBolaData,
    create: tatuBolaData,
  });

  console.log({ araraAzulDeLear, guigoDaCaatinga, queixada, soldadinhoDoAraripe, tatuBola });
}
