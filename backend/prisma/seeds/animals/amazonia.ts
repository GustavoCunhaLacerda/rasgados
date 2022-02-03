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
    scientificName: 'Inia geoffrensis',
    otherNames: ['Boto-rosa'],
    conservationStatus: 'EN',
    description:
      'O boto-cor-de-rosa é uma espécie de golfinho de água doce endêmica do Brasil, vivendo especialmente nos rios da bacia Amazônica.\nA população desta espécie vem diminuindo com o passar do tempo, principalmente devido à construção de hidrelétricas.\nDe todas as espécies de golfinhos de rio, o boto-cor-de-rosa é a maior. Os machos podem chegar a 2,5 metros de comprimento e pesar até 200 quilos; as fêmeas, um pouco menores, chegam a medir 2,2 metros e a pesar 150 quilos, em média. Os olhos dos botos-cor-de-rosa são pequenos, mas sua visão é boa. O “bico” que eles têm se chama rostro. O rostro contém dentes, que os botos usam para capturar e triturar suas presas. A cor característica do boto-cor-de-rosa varia de acordo com fatores como a idade e o sexo do animal. Os recém-nascidos e jovens são cinzentos, e os adultos são rosados; a cor dos machos é mais viva que a das fêmeas.',
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
    where: { scientificName: 'Inia geoffrensis' },
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
    scientificName: 'Harpia harpyja',
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
    description:
      'O Gavião Real é uma ave de rapina presente no Brasil em regiões florestais remotas, sobretudo na Amazônia, ou em áreas protegidas, como reservas de Mata Atlântica. Existem registros também para o cerrado e pantanal. Encontrado também do México à Argentina.\nOs principais fatores que contribuem para a diminuição dessa especie são: perda de habitat por desmatamento, caça e captura para criação em cativeiro.\nCuriosidades: Essa ave habita florestas primárias densas e florestas de galeria. Vive solitário ou aos pares na copa das árvores. Apesar do seu tamanho, é bastante ágil e difícil de ser visto. Ela é frequentemente chamada à águia mais poderosa do mundo, pesando até 9 quilos e medindo 105 cm de comprimento. Suas garras são mais longas do que as garras de um urso, e poderosa, que podem quebrar o braço de um homem ou até mesmo perfurar o crânio. Se alimenta de animais grandes como preguiças, iguanas, filhotes de veados e cobras.',
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
    where: { scientificName: 'Harpia harpyja' },
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
    scientificName: 'Ateles chamek',
    otherNames: ['Macaco-aranha', 'Coatá', 'Coatá-preto'],
    conservationStatus: 'VU',
    description:
      'O Macaco-aranha-de-cara-preta é um animal que ocorre predominantemente na região da Amazônia Ocidental, nos estados de Rondônia, Acre, Amazonas e em parte do Pará e Mato Grosso, onde é residente e nativo.\nA diminuição de sua espécie está ligada, principalmente a perda de habitat por desmatamento e construção de hidrelétricas e maturação sexual tardia\nCuriosidades: É uma das maiores espécies de macaco-aranha, com o corpo medindo aproximadamente 70 cm e uma cauda longa que pode atingir 1 m. Pesam em média 8 kg, sendo os machos maiores do que as fêmeas. A face e a pelagem do corpo são totalmente negras, com pelos curtos. Vivem em grandes grupos que podem ter mais de 30 indivíduos, dividindo-se em grupos menores no período de alimentação.',
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
    where: { scientificName: 'Ateles chamek' },
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
    scientificName: 'Panthera onca',
    otherNames: [],
    conservationStatus: 'VU',
    description:
      'A onça-pintada ocorre em quase todos os biomas brasileiros, com exceção do Pampa, sendo que 50% da área do país ainda é considerada adequada à ocorrência da espécie. Apesar desta ampla distribuição, o tamanho populacional efetivo estimado é menor do que 10.000 indivíduos.\nEsse felino tem sido ameaçado pela perda e fragmentação de habitat associadas principalmente à expansão agrícola, mineração, implantação de hidrelétricas, ampliação da malha viária. E pela Caça e retaliação por predação de animais domésticos.\nCuriosidades: A onça-pintada (Panthera onca) é o maior felino das Américas, o terceiro maior felino do mundo, atrás apenas do tigre (Panthera tigris) e do leão (Panthera leo). É conhecida por diversos nomes nas diferentes regiões onde ocorre: onça-preta, jaguar, jaguaretê, yaguareté, tigre, canguçu, pintada, pinima, pinima-malha-larga e pixuna. Considerada um predador do topo da cadeia, a onça-pintada reina absoluta nos ambientes onde vive, alimentando-se de pequenos tatus e cutias a jacarés e antas. Elas controlam populações de presas e são de extrema importância no equilíbrio dos ecossistemas onde estão inseridas.',
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
    where: { scientificName: 'Panthera onca' },
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
    scientificName: 'Trichechus inunguis',
    otherNames: [],
    conservationStatus: 'VU',
    description:
      'O peixe-boi-da-amazônia é um mamífero aquático endêmico da Amazônia, ou seja, essa espécie é exclusiva dos rios da Bacia Amazônica.\nSua população tem diminuídoi com o passar do tempo devido a caça, perda de habitat e captura acidental em redes de pesca.\nÉ a menor espécie de peixe-boi do mundo, chegando a até 3 metros de comprimento e 450 kg de peso. Sua coloração varia de cinza à preto, com uma mancha específica de cor branca ou rosada na barriga que pode ser comparada à uma impressão digital. Diferentemente das outras espécies de peixes-bois, não apresenta unhas nas nadadeiras peitorais. A nadadeira caudal é grande, arredondada e achatada dorso-ventralmente, ligada ao corpo por um pedúnculo caudal grosso e possante. O peixe-boi não possui nadadeira dorsal.',
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
    where: { scientificName: 'Trichechus inunguis' },
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

  console.log({
    botoCorDeRosa,
    harpia,
    macacoAranhaDaCaraPreta,
    oncaPintada,
    peixeBoiDaAmazonia,
  });
}
