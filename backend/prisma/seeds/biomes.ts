import path from 'path';
import glob from 'glob';
import { Prisma, PrismaClient } from '@prisma/client';
import { buildPrismaImage } from '../seed';
const prisma = new PrismaClient();

function getBiomesImages() {
  const biomesList = ['amazonia', 'cerrado', 'caatinga', 'mata_atlantica', 'pampa', 'pantanal'];

  const biomesImagesArr = biomesList.map(biome => {
    const files = glob.sync(`images/biomes/${biome}/*`, {
      cwd: 'public',
    });
    const map = files.find(file => path.basename(file).includes('map')) ?? null;
    const images = files.filter(file => !path.basename(file).includes('map'));

    return [biome, { map, images }];
  });

  return Object.fromEntries(biomesImagesArr);
}

export async function biomes() {
  const biomesImages = getBiomesImages();

  const amazoniaMapImage = buildPrismaImage(biomesImages['amazonia']['map']);
  const amazoniaImages = biomesImages['amazonia']['images'].map((imgPath: string) => buildPrismaImage(imgPath));
  const amazoniaData: Prisma.BiomeCreateInput = {
    name: 'Amazônia',
    description:
      'A Amazônia ou Floresta Amazônica é a mair floresta "intacta" (sem intervenção humana moderna) do mundo. É casa de boa parte de brasileiros e mais de 180 grupos nativos diferentes, alguns, inclusive, sem contato com a sociedade até hoje. O maior número de povos nativos isolados vive na Amazônia.\nEsse bioma corresponde a 49% do território brasileiro e está presente em outros países: Bolívia, Colômbia, Equador, Guiana, Guiana Francesa, Peru, Suriname e Venezuela. E no Brasil está presente nos estados: Acre, Amapá, Amazonas, Pará, Roraima, Rondônia, Mato Grosso, Maranhão e Tocantins.\nPossui aproximadamente 6,7 milhões de km2 sendo 4,2 milhões no Brasil.\nA região abriga cerca de 10% de todas as espécies da fauna e flora de todo o planeta, sendo a maior região de biodiversidade da Terra. Existem cerca de 40 mil espécies de plantas e mais de 400 mamíferos.\nAlém da biodiversidade a Amazônia é fundamental para para o controle de clima do planeta, no qual a Bacia Amazônica armazena aproximadamente 100 bilhões de toneladas métricas de carbono (essa quantidade corresponde a dez vezes as emissões globais ANUAIS de combustíveis fósseis).\nAssim, preservar a fauna e flora da Amazônia é de extrema importânia para o controle ambiental e equilibrio não só do Brasil e região, mas de todo o planeta Terra.',
  };
  const amazonia = await prisma.biome.upsert({
    where: { name: 'Amazônia' },
    update: amazoniaData,
    create: {
      ...amazoniaData,
      map: {
        create: amazoniaMapImage,
      },
      images: {
        createMany: {
          data: amazoniaImages,
        },
      },
    },
    include: {
      map: true,
      images: true,
    },
  });

  const caatingaMapImage = buildPrismaImage(biomesImages['caatinga']['map']);
  const caatingaImages = biomesImages['caatinga']['images'].map((imgPath: string) => buildPrismaImage(imgPath));
  const caatingaData: Prisma.BiomeCreateInput = {
    name: 'Caatinga',
    description:
      'A Caatinga é o único bioma exclusivamente brasileiro, o que significa que grande parte do seu patrimônio biológico não pode ser encontrado em nenhum outro lugar do planeta e, abriga uma diversidade de espécies ainda pouco conhecida por grande parte da população.\nEm relação ao tamanho da Caatinga, possui uma área entre 800 mil e 900 mil km², correspondente a cerca de 11% do território nacional.\nEngloba regiões de clima semiárido dos estados do Piauí, Ceará, Rio Grande do Norte, Paraíba, Pernambuco, Alagoas, Sergipe, Bahia e a parte norte de Minas Gerais. O nome do bioma tem origem no tupiguarani e significa "mata branca", uma referência à cor dos troncos das plantas que perdem sua folhagem nos períodos mais secos.\nAs singularidades da Caatinga resultam em uma fauna diversa composta por mais de 800 espécies animais. No entanto, a exploração humana e o manejo inadequado da terra afetam sobremaneira esta rica fauna. Inúmeras espécies se encontram ameaçadas de extinção, como o tatu-bola e o soldadinho do araripe.\nInfelizmente, a Caatinga é um dos biomas mais degradados do país, concentrando mais de 60% das áreas susceptíveis à desertificação. Historicamente, esta região vem sofrendo com a ausência de práticas de manejo do solo e com a monocultura e pecuária extensiva, além de inúmeras queimadas. Atualmente, as principais causas de desmatamento estão associadas à extração de mata nativa para a produção de lenha e carvão vegetal. Tal impacto é sentido na fertilidade do solo, na extinção de espécies da fauna e flora e, consequentemente, na piora da qualidade de vida da população. Essas práticas já levaram à devastação de 45% deste bioma.',
  };
  const caatinga = await prisma.biome.upsert({
    where: { name: 'Caatinga' },
    update: caatingaData,
    create: {
      ...caatingaData,
      map: {
        create: caatingaMapImage,
      },
      images: {
        createMany: {
          data: caatingaImages,
        },
      },
    },
  });

  const cerradoMapImage = buildPrismaImage(biomesImages['cerrado']['map']);
  const cerradoImages = biomesImages['cerrado']['images'].map((imgPath: string) => buildPrismaImage(imgPath));
  const cerradoData: Prisma.BiomeCreateInput = {
    name: 'Cerrado',
    description:
      'Situado majoritariamente na área central do Brasil, o Cerrado é o segundo maior bioma do país, ocupando mais de dois milhões de quilômetros quadrados, 24% do território nacional.\nSua localização no coração do Brasil simboliza bem a importância do bioma para o território nacional.\nAlém de ocupar grande parte dos estados de Minas Gerais, Tocantins, Goiás, Distrito Federal, Maranhão, Mato Grosso, Mato Grosso do Sul e Bahia, o Cerrado abrange ainda áreas disjuntas no extremo norte do Pará, uma pequena porção do Amapá, Roraima e Rondônia, uma faixa central do estado de São Paulo e uma porção do Paraná.\nEstima-se que existam mais de 320 mil espécies de animais. No entanto o modelo de gestão e exploração dos recursos naturais nos territórios que compõem o bioma tem resultado em sérias ameaças à sobrevivência de pelo menos 132 espécies, as quais se encontram ameaçadas de extinção. Dentre estas, o lobo-guará e o tamanduá-bandeira.\nA vastidão do Cerrado brasileiro, com sua fauna e flora, lhe conferem o título de savana mais biodiversa do mundo. No entanto, contraditoriamente, é um dos biomas mais ameaçados do país.\nOs motivos para este quadro preocupante estão relacionados à expansão do agronegócio e ao uso predatório do solo. Também se somam como fatores de risco para o bioma as queimadas e a ampla demanda de lenha para a produção de carvão vegetal. Vale ressaltar que o desmatamento e as queimadas já devastaram 100 milhões de hectares do Cerrado, ou seja, metade do bioma.',
  };
  const cerrado = await prisma.biome.upsert({
    where: { name: 'Cerrado' },
    update: cerradoData,
    create: {
      ...cerradoData,
      map: {
        create: cerradoMapImage,
      },
      images: {
        createMany: {
          data: cerradoImages,
        },
      },
    },
  });

  const mataAtlanticaMapImage = buildPrismaImage(biomesImages['mata_atlantica']['map']);
  const mataAtlanticaImages = biomesImages['mata_atlantica']['images'].map((imgPath: string) =>
    buildPrismaImage(imgPath)
  );
  const mataAtlanticaData: Prisma.BiomeCreateInput = {
    name: 'Mata Atlântica',
    description:
      'Na época do descobrimento do Brasil, a Mata Atlântica era contínua como a floresta Amazônica e constituía a segunda maior floresta tropical do Brasil. Ela abrangia uma área equivalente a 1.315.460 km².\nA Mata Atlântica se estende ao de três países: Argentina Brasil e Paraguai. No Brasil, pode ser encontrada em 17 estados: Rio Grande do Sul, Santa Catarina,  Paraná, São Paulo, Goiás, Mato Grosso do Sul, Rio de Janeiro, Minas Gerais, Espírito Santo, Bahia,  Alagoas, Sergipe, Paraíba, Pernambuco, Rio Grande do Norte, Ceará e Piauí.',
  };
  const mataAtlantica = await prisma.biome.upsert({
    where: { name: 'Mata Atlântica' },
    update: mataAtlanticaData,
    create: {
      ...mataAtlanticaData,
      map: {
        create: mataAtlanticaMapImage,
      },
      images: {
        createMany: {
          data: mataAtlanticaImages,
        },
      },
    },
  });

  const pampaMapImage = buildPrismaImage(biomesImages['pampa']['map']);
  const pampaImages = biomesImages['pampa']['images'].map((imgPath: string) => buildPrismaImage(imgPath));
  const pampaData: Prisma.BiomeCreateInput = {
    name: 'Pampa',
    description:
      'O Pampa é uma das áreas de campos temperados mais importantes do planeta. O Pampa, também chamado de Pampas, Campanha Gaúcha, Campos Sulinos ou Campos do Sul, é o único bioma brasileiro presente em apenas uma unidade federativa. Localizado no Rio Grande do Sul, o Pampa ocupa cerca de 2% do território brasileiro.\nA característica principal do Bioma Pampa é a sua vegetação, que apresenta uma composição herbácea, ou seja, formada basicamente por gramíneas e espécies vegetais de pequeno porte, não ultrapassando os 50 cm de altura. Esse tipo de paisagem apresenta dois tipos bem definidos: os chamados campos limpos e os campos sujos.\nEmbora os solos do Pampa não sejam muito férteis, há uma prática agrícola monocultora cada vez mais intensa. Apesar disso, a principal atividade econômica da região é a pecuária, facilitada pelo relevo plano levemente ondulado. Com isso, boa parte desse bioma foi devastada, restando apenas 30% da vegetação original, o que gerou profundos impactos, como o risco de extinção de algumas espécies, o aumento da erosão e a intensificação do processo de arenização dos solos.\nPor esse motivo, é preciso conter as atividades de expansão agropecuária na região, ampliar as áreas de reserva e conservar ao máximo o que ainda resta desse importante bioma, pois os seus recursos e as suas belezas naturais podem esgotar-se um dia.',
  };
  const pampa = await prisma.biome.upsert({
    where: { name: 'Pampa' },
    update: pampaData,
    create: {
      ...pampaData,
      map: {
        create: pampaMapImage,
      },
      images: {
        createMany: {
          data: pampaImages,
        },
      },
    },
  });

  const pantanalMapImage = buildPrismaImage(biomesImages['pantanal']['map']);
  const pantanalImages = biomesImages['pantanal']['images'].map((imgPath: string) => buildPrismaImage(imgPath));
  const pantanalData: Prisma.BiomeCreateInput = {
    name: 'Pantanal',
    description:
      'O Pantanal é um bioma constituído principalmente por uma savana estépica, alagada em sua maior parte, com 250 mil quilômetros quadrados de extensão e altitude média de 100 metros. Ele ocupa parte dos estados do Mato Grosso e Mato Grosso do Sul e estende-se pela Bolívia e Paraguai.\nA região considerada é pela UNESCO como Patrimônio Natural Mundial e Reserva da Biosfera.',
  };
  const pantanal = await prisma.biome.upsert({
    where: { name: 'Pantanal' },
    update: pantanalData,
    create: {
      ...pantanalData,
      map: {
        create: pantanalMapImage,
      },
      images: {
        createMany: {
          data: pantanalImages,
        },
      },
    },
  });

  console.log({ amazonia, caatinga, cerrado, mataAtlantica, pampa, pantanal });
}
