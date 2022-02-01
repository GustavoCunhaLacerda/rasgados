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
    description:
      'A arara-azul-de-lear é uma ave endêmica de uma região da Caatinga Nordeste da Bahia, na região conhecida como Raso da Catarina.\nA diminuição da população desse animal está ligada ao tráfico de animais silvestres para criação doméstica e a perda de habitat por desmatamento.',
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
    create: {
      ...araraAzulDeLearData,
      icon: {
        create: araraAzulDeLearIcon,
      },
      images: {
        createMany: {
          data: araraAzulDeLearImages,
        },
      },
    },
  });

  const guigoDaCaatingaIcon = buildPrismaImage(animals['guigo_da_caatinga']['icon']);
  const guigoDaCaatingaImages = animals['guigo_da_caatinga']['images'].map((image: string) => buildPrismaImage(image));
  const guigoDaCaatingaData: Prisma.AnimalCreateInput = {
    name: 'Guigó-da-caatinga',
    cientificName: 'Callicebus barbarabrownae',
    otherNames: ['Guigó', 'Sauá-loiro', 'Pangola'],
    conservationStatus: 'CR',
    description:
      'O Guigó-da-caatinga é endêmico do Brasil e está presente nos estados de Bahia e oeste de Sergipe, onde é residente e nativo.\nO desmatamento associado à agricultura é o principal causador da ameaça de extição desse animal.\nÉ um macaquinho do tamanho de um coelho. Já foi considerado extinto e não foi visto por mais de 70 anos. Constitui de uma população pequena, em que a maioria vive em reservas naturais. É comumente confundido com o macaco-prego-do-peito-amarelo.',
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
    create: {
      ...guigoDaCaatingaData,
      icon: {
        create: guigoDaCaatingaIcon,
      },
      images: {
        createMany: {
          data: guigoDaCaatingaImages,
        },
      },
    },
  });

  const queixadaIcon = buildPrismaImage(animals['queixada']['icon']);
  const queixadaImages = animals['queixada']['images'].map((image: string) => buildPrismaImage(image));
  const queixadaData: Prisma.AnimalCreateInput = {
    name: 'Queixada',
    cientificName: 'Tayassu pecari',
    otherNames: ['Porco-do-mato', 'Queixo-ruivo', 'Taiaçu', 'Cariblanco', 'Chancho do monte'],
    conservationStatus: 'VU',
    description:
      'As qeuixadas são animais que ocorrem em uma larga distribuição, desde o sul do México até o nordeste da Argentina e em praticamente todo o território brasileiro, menos em alguns estados do Nordeste.\nEsse mamífero está vulnerável devido à perda de habitat por desmatamento, introdução de espécies invasoras e caça.\nCuriosidades: Ocupam grandes territórios, pois necessitam de diversidade de habitat.',
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
    create: {
      ...queixadaData,
      icon: {
        create: queixadaIcon,
      },
      images: {
        createMany: {
          data: queixadaImages,
        },
      },
    },
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
    conservationStatus: 'CR',
    description:
      'O soldadinho-do-araripe é uma ave que possui distribuição restrita à Chapada do Araripe no Ceará.\nA perda e degradação do habitat por ocupação urbana estão diminuindo a população desse animal.\nCuriosidades: É a única ave endêmica (exclusiva) do Ceará. Uma das principais características desta ave é a diferença de cor entre machos e fêmeas. Os machos adultos são coloridos (preto, branco e vermelho na cabeça), enquanto as fêmeas são verdes. Os machos jovens possuem a mesma cor de plumagem das fêmeas adultas.',
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
    create: {
      ...soldadinhoDoAraripeData,
      icon: {
        create: soldadinhoDoAraripeIcon,
      },
      images: {
        createMany: {
          data: soldadinhoDoAraripeImages,
        },
      },
    },
  });

  const tatuBolaIcon = buildPrismaImage(animals['tatu_bola']['icon']);
  const tatuBolaImages = animals['tatu_bola']['images'].map((image: string) => buildPrismaImage(image));
  const tatuBolaData: Prisma.AnimalCreateInput = {
    name: 'Tatu Bola',
    cientificName: 'Tolypeutes tricinctus',
    otherNames: ['tatu-apara', 'bola', 'bolinha', 'tranquinha', 'tatu-bola-do-nordeste'],
    conservationStatus: 'EN',
    description:
      "O tatu-bola possui distribuição geográfica muito restrita, ocorrendo somente na Caatinga e no Cerrado. A espécie já foi registrada em 12 estados brasileiros diferentes - Bahia, Ceará, Pernambuco, Alagoas, Sergipe, Piauí, Mato Grosso, Goiás, Minas Gerais, Tocantins, Paraíba e Rio Grande do Norte.\nEsse animal está em risco de extinção devido à perda de habitat por desmatamento.\nCuriosidades: É a única espécie endêmica de tatu do Brasil. Uma das suas principais caracteristicas é a de se fechar na forma de uma bola ao se sentir ameaçado. Possui hábitos noturnos e se alimenta principalmente de formigas e cupins, consumindo também grande quantidade de areia, cascas e raízes junto ao alimento. Foi o mascote da Copa do Mundo em 2014, tendo o nome de 'Fuleco'",
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
    create: {
      ...tatuBolaData,
      icon: {
        create: tatuBolaIcon,
      },
      images: {
        createMany: {
          data: tatuBolaImages,
        },
      },
    },
  });

  console.log({
    araraAzulDeLear,
    guigoDaCaatinga,
    queixada,
    soldadinhoDoAraripe,
    tatuBola,
  });
}
