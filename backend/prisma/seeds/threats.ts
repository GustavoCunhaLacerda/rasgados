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
    description: 'A agropecuária é o conjunto das atividades relacionada à agricultura e à pecuária. Apresenta grande importância para a humanidade e para a economia, visto que seus produtos são destinados para consumo e venda. Contudo, a expansão da agropecuária e os métodos para cultivo e criação de animais vêm desencadeando vários problemas ambientais.\nO desmatamento, as queimadas, o uso de agrotóxicos e a compactação do solo e a liberação de gás metano por rebanhos são todos problemas ligados a agropecuária que influênciam na intensificação do aquecimento global e colocam outras espécies animais em risco.',
  };
  const agropecuaria = await prisma.threat.upsert({
    where: { name: 'Agropecuária' },
    update: agropecuariaData,
    create: {
      ...agropecuariaData,
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
  const cacaData: Prisma.ThreatCreateInput = {
    name: 'Caça',
    description: 'A caça é a prática de utilizar, perseguir, matar ou capturar animais silvestres para entretenimento, consumo, venda de partes do animal ou tráfico de animais vivos. A partir da definição fica bastante óbvio o porquê de esta ser uma ameaça frequente à fauna. No Brasil, a caça é uma prática ilegal regida pela Lei de Proteção à Fauna (Lei 5.197/67) com punição que pode chegar a 5 anos de prisão.',
  };
  const caca = await prisma.threat.upsert({
    where: { name: 'Caça' },
    update: cacaData,
    create: {
      ...cacaData,
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
  const desmatamentoData: Prisma.ThreatCreateInput = {
    name: 'Desmatamento',
    description: 'O desmatamento é um grande problema no Brasil. São aproximadamente 20.000km^2 de vegetação nativa desmatada todos os anos como consequência de derrubada de árvores e incêndios. No Brasil, o desmatamento ocorre principalmente para a prática agropecuária, aumentando áreas de plantio e de pastagem. Contudom a construção de estradas, rodovias e ferrovias, a instalação de hidrelétricas, a mineração e a expansão urbana também são fatores que ocasionam a redução das matas. A Mata Atlântica, por exemplo, já perdeu aproximadamente 93% da sua cobertura vegetal; o Cerrado e a Caatinga perderam 67% e 50% de sua vegetação nativa devido ao desmatamento.',
  };
  const desmatamento = await prisma.threat.upsert({
    where: { name: 'Desmatamento' },
    update: desmatamentoData,
    create: {
      ...desmatamentoData,
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
  const expansaoUrbanaData: Prisma.ThreatCreateInput = {
    name: 'Expansão Urbana',
    description: 'A expansão urbana diz respeito ao crescimento acelerado e desorganizado de áreas habitadas por seres humanos. Esse aumento de áreas urbanas acarreta na destruição da natureza ao redor e, por consequência, na destruição do habitat de espécies nativas, por meio do desmatamento, da contaminação de corpos d\'água e da poluição; e na fragmentação de áreas habitadas por animais silvestres, o que implica em diminuição de espaço de locomoção da espécies locais e diminuição de interação entre membros da mesma espécie, levando a pouca variabilidade genética e maior frequência de filhotes com deformidades e doenças genéticas.',
  };
  const expansaoUrbana = await prisma.threat.upsert({
    where: { name: 'Expansão Urbana' },
    update: expansaoUrbanaData,
    create: {
      ...expansaoUrbanaData,
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
  const ferroviasRodoviasData: Prisma.ThreatCreateInput = {
    name: 'Ferrovias e Rodovias',
    description: 'O aumento da malha rodoviária está ligada à construção de rodovias e estradas para passagem de carros, motos, caminhões etc. Apesar de serem de grande importância para a locomoção humana e para o comércio, à criação de novas rodovias implica no desmatamento da área onde a rodovia será construída, na alteração do relevo local (no caso de construção de túneis, por exemplo) e na fragmentação de habitats. Além disso, a contrução de rodovias também aumentará o número de animais silvestres que sofrerão atropelamentos.\nJá o aumento da malha ferroviária está relacionada a construção de trilhos e estações para trens que, no Brasil, são majoritariamente utilizados para transporte de cargas muito pesadas. A construção de ferrovias e estações de trem trazem consigo os mesmo problemas que o aumento da malha rodoviária: desmatamento, fragmentação de habitats, alteração do relevo local e atropelamento de animais silvestres.',
  };
  const ferroviasRodovias = await prisma.threat.upsert({
    where: { name: 'Ferrovias e Rodovias' },
    update: ferroviasRodoviasData,
    create: {
      ...ferroviasRodoviasData,
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
  const hidreletricaData: Prisma.ThreatCreateInput = {
    name: 'Hidrelétricas',
    description: 'A usinas hidrelétricas e as pequenas centrais hidrelétricas (PCH) são muito utilizadas no Brasil para a produção de energia elétrica. Contudo, elas podem causar grandes problemas ao meio ambiente e por em risco espécies animais.\nPara a construção de uma usina hidrelétrica ou de uma PCH, é necessário desmatar a área da construção e alagar a área anterior formando um açude. Nesse processo vários animais silvestres perderão seu lar, tanto aqueles que viviam na área quanto aqueles que dependiam do fluxo do rio e não são capazes de se adaptar a mudança.',
  };
  const hidreletrica = await prisma.threat.upsert({
    where: { name: 'Hidrelétricas' },
    update: hidreletricaData,
    create: {
      ...hidreletricaData,
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
  const lixoData: Prisma.ThreatCreateInput = {
    name: 'Lixo',
    description: 'Lixo e susbtâncias tóxicas que acabam indo parar na natureza põe em risco diversas espécies animais e vegetais. O lixo jogado na natureza caso seja ingerido por um animal pode levar a morte deste e o lixo que não for ingerido por ninguém ficará no solo, sendo degradado pelo tempo e liberando chorume, contaminando o solo.\nDas substância tóxicas mencionadas anteriormente podem ser citadas: o mercúrio, utilizado para mineração, que contamina corpos d\'água matando peixes e os animais que se alimentaram deles ou beberem dessa água; agrotóxicos, levados das plantações pela chuva até rios e riachos próximos, onde contaminam a água e acabam por matar peixes e outros animais que vivem nela ou bem dela; e inseticidas, utilizados no controle de pragas, que por sua vez podem ser comidas por outros animais, envenenado-os.',
  };
  const lixo = await prisma.threat.upsert({
    where: { name: 'Lixo' },
    update: lixoData,
    create: {
      ...lixoData,
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
  const queimadaData: Prisma.ThreatCreateInput = {
    name: 'Queimada',
    description: 'A queimada é uma prática primitiva da agricultura que tem como objetivo limpar o terreno para o cultivo de plantações ou formação de pastagens com uso de fogo de forma controlada. Quando o fogo sai do controle, ele passa a ser chamado de incêndio florestal. As queimadas atingem diretamente a vegetação nativa, que é consumida pelo fogo e pode ou não sobreviver a ele, e os animais silvestres, que acabam morrendo devido ao fogo, ao calor, a ingestão des gases tóxicos e fumaça ou, quando acabam fugindo para áreas habitadas por humanos, na mãos de humanos.\nNo Brasil, uma prática comum para evitar que incêndios se iniciem ou que queimadas se alastrem é criação de aceiros: faixas ao onde a vegetação é completamente eliminada do solo, o que impede que o fogo encontre mais combustível para queimar e continue se alastrando.',
  };
  const queimada = await prisma.threat.upsert({
    where: { name: 'Queimada' },
    update: queimadaData,
    create: {
      ...queimadaData,
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
