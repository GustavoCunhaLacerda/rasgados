import path from 'path';
import glob from 'glob';
import { Prisma, PrismaClient } from '@prisma/client';
import { buildPrismaImage } from '../seed';
const prisma = new PrismaClient();

function getThreatsImages() {
  const threatsList = [
    'agropecuaria',
    'caca',
    'desmatamento',
    'ferrovias_rodovias',
    'hidreletrica',
    'lixo',
    'queimada',
    'expansao_urbana',
  ];

  const threatsImagesArr = threatsList.map(threat => {
    const files = glob.sync(`images/threats/${threat}/*`, {
      cwd: 'public',
    });
    const map = files.find(file => path.basename(file).includes('map')) ?? null;
    const images = files.filter(file => !path.basename(file).includes('map'));

    return [threat, { map, images }];
  });

  return Object.fromEntries(threatsImagesArr);
}

export async function threats() {
  const threatsImages = getThreatsImages();
  console.log(threatsImages);

  const agropecuariaMapImage = buildPrismaImage(threatsImages['agropecuaria']['map']);
  const agropecuariaImages = threatsImages['agropecuaria']['images'].map((imgPath: string) =>
    buildPrismaImage(imgPath)
  );
  const agropecuariaData: Prisma.ThreatCreateInput = {
    name: 'Agropecuária',
    description: '',
    map: {
      create: agropecuariaMapImage,
    },
    images: {
      createMany: {
        data: agropecuariaImages,
      },
    },
  };
  const agropecuaria = await prisma.threat.upsert({
    where: { name: 'Agropecuária' },
    update: agropecuariaData,
    create: agropecuariaData,
  });

  const cacaMapImage = buildPrismaImage(threatsImages['caca']['map']);
  const cacaImages = threatsImages['caca']['images'].map((imgPath: string) => buildPrismaImage(imgPath));
  const cacaData: Prisma.ThreatCreateInput = {
    name: 'Caça',
    description: '',
    map: {
      create: cacaMapImage,
    },
    images: {
      createMany: {
        data: cacaImages,
      },
    },
  };
  const caca = await prisma.threat.upsert({
    where: { name: 'Caça' },
    update: cacaData,
    create: cacaData,
  });

  const desmatamentoMapImage = buildPrismaImage(threatsImages['desmatamento']['map']);
  const desmatamentoImages = threatsImages['desmatamento']['images'].map((imgPath: string) =>
    buildPrismaImage(imgPath)
  );
  const desmatamentoData: Prisma.ThreatCreateInput = {
    name: 'Desmatamento',
    description: '',
    map: {
      create: desmatamentoMapImage,
    },
    images: {
      createMany: {
        data: desmatamentoImages,
      },
    },
  };
  const desmatamento = await prisma.threat.upsert({
    where: { name: 'Desmatamento' },
    update: desmatamentoData,
    create: desmatamentoData,
  });

  const expansaoUrbanaMapImage = buildPrismaImage(threatsImages['expansao_urbana']['map']);
  const expansaoUrbanaImages = threatsImages['expansao_urbana']['images'].map((imgPath: string) =>
    buildPrismaImage(imgPath)
  );
  const expansaoUrbanaData: Prisma.ThreatCreateInput = {
    name: 'Expansão Urbana',
    description: '',
    map: {
      create: expansaoUrbanaMapImage,
    },
    images: {
      createMany: {
        data: expansaoUrbanaImages,
      },
    },
  };
  const expansaoUrbana = await prisma.threat.upsert({
    where: { name: 'Expansão Urbana' },
    update: expansaoUrbanaData,
    create: expansaoUrbanaData,
  });

  const ferroviasRodoviasMapImage = buildPrismaImage(threatsImages['ferrovias_rodovias']['map']);
  const ferroviasRodoviasImages = threatsImages['ferrovias_rodovias']['images'].map((imgPath: string) =>
    buildPrismaImage(imgPath)
  );
  const ferroviasRodoviasData: Prisma.ThreatCreateInput = {
    name: 'Ferrovias e Rodovias',
    description: '',
    map: {
      create: ferroviasRodoviasMapImage,
    },
    images: {
      createMany: {
        data: ferroviasRodoviasImages,
      },
    },
  };
  const ferroviasRodovias = await prisma.threat.upsert({
    where: { name: 'Ferrovias e Rodovias' },
    update: ferroviasRodoviasData,
    create: ferroviasRodoviasData,
  });

  const hidreletricaMapImage = buildPrismaImage(threatsImages['hidreletrica']['map']);
  const hidreletricaImages = threatsImages['hidreletrica']['images'].map((imgPath: string) =>
    buildPrismaImage(imgPath)
  );
  const hidreletricaData: Prisma.ThreatCreateInput = {
    name: 'Hidrelétricas',
    description: '',
    map: {
      create: hidreletricaMapImage,
    },
    images: {
      createMany: {
        data: hidreletricaImages,
      },
    },
  };
  const hidreletrica = await prisma.threat.upsert({
    where: { name: 'Hidrelétricas' },
    update: hidreletricaData,
    create: hidreletricaData,
  });

  const lixoMapImage = buildPrismaImage(threatsImages['lixo']['map']);
  const lixoImages = threatsImages['lixo']['images'].map((imgPath: string) => buildPrismaImage(imgPath));
  const lixoData: Prisma.ThreatCreateInput = {
    name: 'Lixo',
    description: '',
    map: {
      create: lixoMapImage,
    },
    images: {
      createMany: {
        data: lixoImages,
      },
    },
  };
  const lixo = await prisma.threat.upsert({
    where: { name: 'Lixo' },
    update: lixoData,
    create: lixoData,
  });

  const queimadaMapImage = buildPrismaImage(threatsImages['queimada']['map']);
  const queimadaImages = threatsImages['queimada']['images'].map((imgPath: string) => buildPrismaImage(imgPath));
  const queimadaData: Prisma.ThreatCreateInput = {
    name: 'Queimada',
    description: '',
    map: {
      create: queimadaMapImage,
    },
    images: {
      createMany: {
        data: queimadaImages,
      },
    },
  };
  const queimada = await prisma.threat.upsert({
    where: { name: 'Queimada' },
    update: queimadaData,
    create: queimadaData,
  });

  console.log({ agropecuaria, caca, desmatamento, expansaoUrbana, ferroviasRodovias, hidreletrica, lixo, queimada });
}
