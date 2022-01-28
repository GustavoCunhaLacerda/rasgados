import { Prisma, PrismaClient } from '@prisma/client';
import { buildPrismaImage } from '../../seed';
import { getAnimalsImagesByBiome } from '../animals';
const prisma = new PrismaClient();

export async function mataAtlantica() {
  const animals = getAnimalsImagesByBiome('mata_atlantica') as any;

  const cagadoDeHogeiIcon = buildPrismaImage(animals['cagado_de_hogei']['icon']);
  const cagadoDeHogeiImages = animals['cagado_de_hogei']['images'].map((image: string) => buildPrismaImage(image));
  const cagadoDeHogeiData: Prisma.AnimalCreateInput = {
    name: 'Cágado-de-hogei',
    cientificName: 'Mesoclemmys hogei',
    otherNames: ['Cágado-do-paraíba', 'Cágado', 'Cágado-de-hoge', 'Cágado-do-paraíba-do-sul'],
    conservationStatus: 'CR',
    description: '',
    biome: {
      connect: {
        name: 'Mata Atlântica',
      },
    },
    threats: {
      connect: [{ name: 'Desmatamento' }, { name: 'Expansão Urbana' }, { name: 'Hidrelétricas' }],
    },
  };
  const cagadoDeHogei = await prisma.animal.upsert({
    where: { cientificName: 'Mesoclemmys hogei' },
    update: cagadoDeHogeiData,
    create: {
      ...cagadoDeHogeiData,
      icon: {
        create: cagadoDeHogeiIcon,
      },
      images: {
        createMany: {
          data: cagadoDeHogeiImages,
        },
      },
    },
  });

  const micoLeaoDouradoIcon = buildPrismaImage(animals['mico_leao_dourado']['icon']);
  const micoLeaoDouradoImages = animals['mico_leao_dourado']['images'].map((image: string) => buildPrismaImage(image));
  const micoLeaoDouradoData: Prisma.AnimalCreateInput = {
    name: 'Mico-leão-dourado',
    cientificName: 'Leontopithecus rosalia',
    otherNames: ['Sauim-piranga'],
    conservationStatus: 'EN',
    description: '',
    biome: {
      connect: {
        name: 'Mata Atlântica',
      },
    },
    threats: {
      connect: [{ name: 'Queimada' }, { name: 'Expansão Urbana' }, { name: 'Ferrovias e Rodovias' }],
    },
  };
  const micoLeaoDourado = await prisma.animal.upsert({
    where: { cientificName: 'Leontopithecus rosalia' },
    update: micoLeaoDouradoData,
    create: {
      ...micoLeaoDouradoData,
      icon: {
        create: micoLeaoDouradoIcon,
      },
      images: {
        createMany: {
          data: micoLeaoDouradoImages,
        },
      },
    },
  });

  const preguicaDeColeiraIcon = buildPrismaImage(animals['preguica_de_coleira']['icon']);
  const preguicaDeColeiraImages = animals['preguica_de_coleira']['images'].map((image: string) =>
    buildPrismaImage(image)
  );
  const preguicaDeColeiraData: Prisma.AnimalCreateInput = {
    name: 'Preguiça-de-coleira',
    cientificName: 'Bradypus torquatus',
    otherNames: ['Aí-pixuna', 'preguiça-preta'],
    conservationStatus: 'VU',
    description: '',
    biome: {
      connect: {
        name: 'Mata Atlântica',
      },
    },
    threats: {
      connect: [
        { name: 'Agropecuária' },
        { name: 'Expansão Urbana' },
        { name: 'Ferrovias e Rodovias' },
        { name: 'Queimada' },
      ],
    },
  };
  const preguicaDeColeira = await prisma.animal.upsert({
    where: { cientificName: 'Bradypus torquatus' },
    update: preguicaDeColeiraData,
    create: {
      ...preguicaDeColeiraData,
      icon: {
        create: preguicaDeColeiraIcon,
      },
      images: {
        createMany: {
          data: preguicaDeColeiraImages,
        },
      },
    },
  });

  const sairaMilitarIcon = buildPrismaImage(animals['saira_militar']['icon']);
  const sairaMilitarImages = animals['saira_militar']['images'].map((image: string) => buildPrismaImage(image));
  const sairaMilitarData: Prisma.AnimalCreateInput = {
    name: 'Saíra-militar',
    cientificName: 'Tangara cyanocephala cearensis',
    otherNames: [],
    conservationStatus: 'VU',
    description: '',
    biome: {
      connect: {
        name: 'Mata Atlântica',
      },
    },
    threats: {
      connect: [{ name: 'Caça' }, { name: 'Desmatamento' }],
    },
  };
  const sairaMilitar = await prisma.animal.upsert({
    where: { cientificName: 'Tangara cyanocephala cearensis' },
    update: sairaMilitarData,
    create: {
      ...sairaMilitarData,
      icon: {
        create: sairaMilitarIcon,
      },
      images: {
        createMany: {
          data: sairaMilitarImages,
        },
      },
    },
  });

  const sapinhoAdimiravelDaBarrigaVermelhaIcon = buildPrismaImage(
    animals['sapinho_admiravel_da_barriga_vermelha']['icon']
  );
  const sapinhoAdimiravelDaBarrigaVermelhaImages = animals['sapinho_admiravel_da_barriga_vermelha']['images'].map(
    (image: string) => buildPrismaImage(image)
  );
  const sapinhoAdimiravelDaBarrigaVermelhaData: Prisma.AnimalCreateInput = {
    name: 'Sapinho-admirável-da-barriga-vermelha',
    cientificName: 'Melanophryniscus admirabilis',
    otherNames: [],
    conservationStatus: 'CR',
    description: '',
    biome: {
      connect: {
        name: 'Mata Atlântica',
      },
    },
    threats: {
      connect: [{ name: 'Lixo' }],
    },
  };
  const sapinhoAdimiravelDaBarrigaVermelha = await prisma.animal.upsert({
    where: { cientificName: 'Melanophryniscus admirabilis' },
    update: sapinhoAdimiravelDaBarrigaVermelhaData,
    create: {
      ...sapinhoAdimiravelDaBarrigaVermelhaData,
      icon: {
        create: sapinhoAdimiravelDaBarrigaVermelhaIcon,
      },
      images: {
        createMany: {
          data: sapinhoAdimiravelDaBarrigaVermelhaImages,
        },
      },
    },
  });

  console.log({ cagadoDeHogei, micoLeaoDourado, preguicaDeColeira, sairaMilitar, sapinhoAdimiravelDaBarrigaVermelha });
}
