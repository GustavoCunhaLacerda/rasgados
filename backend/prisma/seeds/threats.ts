import path from 'path';
import glob from 'glob';
import { PrismaClient } from '@prisma/client';
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

function buildPrismaImage(imgPath: string) {
  return {
    name: path.basename(imgPath),
    path: imgPath,
  };
}

export async function threats() {
  const threatsImages = getThreatsImages();
  console.log(threatsImages);

  const agropecuariaMapImage = buildPrismaImage(threatsImages['agropecuaria']['map']);
  const agropecuariaImages = threatsImages['agropecuaria']['images'].map((imgPath: string) =>
    buildPrismaImage(imgPath)
  );
  const agropecuaria = await prisma.threat.upsert({
    where: { name: 'Agropecuária' },
    update: {},
    create: {
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
    },
  });

  const cacaMapImage = buildPrismaImage(threatsImages['caca']['map']);
  const cacaImages = threatsImages['caca']['images'].map((imgPath: string) => buildPrismaImage(imgPath));
  const caca = await prisma.threat.upsert({
    where: { name: 'Caça' },
    update: {},
    create: {
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
    },
  });

  const desmatamentoMapImage = buildPrismaImage(threatsImages['desmatamento']['map']);
  const desmatamentoImages = threatsImages['desmatamento']['images'].map((imgPath: string) =>
    buildPrismaImage(imgPath)
  );
  const desmatamento = await prisma.threat.upsert({
    where: { name: 'Desmatamento' },
    update: {},
    create: {
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
    },
  });

  const expansaoUrbanaMapImage = buildPrismaImage(threatsImages['expansao_urbana']['map']);
  const expansaoUrbanaImages = threatsImages['expansao_urbana']['images'].map((imgPath: string) =>
    buildPrismaImage(imgPath)
  );
  const expansaoUrbana = await prisma.threat.upsert({
    where: { name: 'Expansão Urbana' },
    update: {},
    create: {
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
    },
  });

  const ferroviasRodoviasMapImage = buildPrismaImage(threatsImages['ferrovias_rodovias']['map']);
  const ferroviasRodoviasImages = threatsImages['ferrovias_rodovias']['images'].map((imgPath: string) =>
    buildPrismaImage(imgPath)
  );
  const ferroviasRodovias = await prisma.threat.upsert({
    where: { name: 'Ferrovias e Rodovias' },
    update: {},
    create: {
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
    },
  });

  const hidreletricaMapImage = buildPrismaImage(threatsImages['hidreletrica']['map']);
  const hidreletricaImages = threatsImages['hidreletrica']['images'].map((imgPath: string) =>
    buildPrismaImage(imgPath)
  );
  const hidreletrica = await prisma.threat.upsert({
    where: { name: 'Hidrelétricas' },
    update: {},
    create: {
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
    },
  });

  const lixoMapImage = buildPrismaImage(threatsImages['lixo']['map']);
  const lixoImages = threatsImages['lixo']['images'].map((imgPath: string) => buildPrismaImage(imgPath));
  const lixo = await prisma.threat.upsert({
    where: { name: 'Lixo' },
    update: {},
    create: {
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
    },
  });

  const queimadaMapImage = buildPrismaImage(threatsImages['queimada']['map']);
  const queimadaImages = threatsImages['queimada']['images'].map((imgPath: string) => buildPrismaImage(imgPath));
  const queimada = await prisma.threat.upsert({
    where: { name: 'Queimada' },
    update: {},
    create: {
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
    },
  });

  console.log({ agropecuaria, caca, desmatamento, expansaoUrbana, ferroviasRodovias, hidreletrica, lixo, queimada });
}
