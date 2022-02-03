import { Prisma, PrismaClient } from '@prisma/client';
import { buildPrismaImage } from '../../seed';
import { getAnimalsImagesByBiome } from '../animals';
const prisma = new PrismaClient();

export async function pantanal() {
  const animals = getAnimalsImagesByBiome('pantanal') as any;

  const ariranhaIcon = buildPrismaImage(animals['ariranha']['icon']);
  const ariranhaImages = animals['ariranha']['images'].map((image: string) => buildPrismaImage(image));
  const ariranhaData: Prisma.AnimalCreateInput = {
    name: 'Ariranha',
    scientificName: 'Pteronura brasiliensis',
    otherNames: ['Lontra gigante', "Onça-d'água"],
    conservationStatus: 'VU',
    description:
      "A ariranha é uma espécie endêmica da América so Sul e historicamente ocorria na maior parte dos países. No Brasil estava presente nos biomas da Amazõnia, Pantanal, Cerrado e Amazônia, contudo, hoje em dia, acredita-se a espécie ocorra com populações viáveis apenas na região Amazônia e no Pantanal. No quesito tamanho os machos têm entre 1,5 e 1,7m de comprimento, pesando entre 26 e 32kg, já as fêmeas costumam ter entre 1 e 1,5m de comprimento, pesando de 22 a 26kg.\nAté a década de 1980, a principal ameaça às ariranhas era a caça para comercializaçao da pele e a captura para zoológicos ou criação como animal de estimação. Atualmente, as principais ameaças à espécie são: a destruição do habitat, susperexploração da pesca, contaminação dos corpos d'água com mercúrio, agrotóxicos e outros poluentes, caça ilegal, zoonoses possivelmente transmitidas por animais domésticos e construção de hidrelétricas e PCHs (Pequenas Centrais Hidrelétricas). Além dessas, o roubo de filhotes para comercialização ilegal como animais de estimação, conflitos com pescadores, a caça por Índios Apurinã (do baixo rio Purus, Amazonas) para consumo da carne e atividades de turismo realizadas de maneira irregular também são fatores que levam a diminuição da espécie ou de seu hábitat.\nCuriosidades: Ariranhas são animais sociais e vivem em grupos de 2 a 16 integrantes.|Grupos de ariranhas constroem locas, latrinas e campsites ao longo de seus habitats. Locas são contruídas nos barrancos dos corpos d'água, protegidas por raízes ou árvores caídas. Latrina comunitárias são utilizadas para deposição de fezes e urina, exercendo um importante papel de marcação territorial. Os campsites são áreas ao longo dos barrancos, contruídos geralmente em regiões sombreadas, utilizados para marcação territorial, descanso e área de alimentação; cada grupo mantém de um a oito campsites.",
    biome: {
      connect: {
        name: 'Pantanal',
      },
    },
    threats: {
      connect: [{ name: 'Caça' }, { name: 'Desmatamento' }, { name: 'Lixo' }, { name: 'Hidrelétricas' }],
    },
  };
  const ariranha = await prisma.animal.upsert({
    where: { scientificName: 'Pteronura brasiliensis' },
    update: ariranhaData,
    create: {
      ...ariranhaData,
      icon: {
        create: ariranhaIcon,
      },
      images: {
        createMany: {
          data: ariranhaImages,
        },
      },
    },
  });

  const catitaIcon = buildPrismaImage(animals['catita']['icon']);
  const catitaImages = animals['catita']['images'].map((image: string) => buildPrismaImage(image));
  const catitaData: Prisma.AnimalCreateInput = {
    name: 'Catita',
    scientificName: 'Thylamys macrurus',
    otherNames: [],
    conservationStatus: 'EN',
    description:
      'A catita é uma espécie endêmica da América so Sul ocorrendo no Paraguai e no Brasil. No Brasil, é encontrada apenas no estado do Mato Grosso do Sul, restrito a fisionomais florestadas do Cerrado e Pantanal. Com comprimento total variando de 10,1 a 12,6cm e pesando entre 30 e 55g, é a maior espécie do gênero Thylamys.\nA maior ameaça à espécie é a conversão de seu habitat natural em pastagens e áreas agrícolas.\nCuriosidades: Apesar de ser encontrada no Pantanal, a catita não vive nas áreas inundadas, preferindo as regiões mais secas.',
    biome: {
      connect: {
        name: 'Pantanal',
      },
    },
    threats: {
      connect: [{ name: 'Agropecuária' }],
    },
  };
  const catita = await prisma.animal.upsert({
    where: { scientificName: 'Thylamys macrurus' },
    update: catitaData,
    create: {
      ...catitaData,
      icon: {
        create: catitaIcon,
      },
      images: {
        createMany: {
          data: catitaImages,
        },
      },
    },
  });

  const cervoDoPantanalIcon = buildPrismaImage(animals['cervo_do_pantanal']['icon']);
  const cervoDoPantanalImages = animals['cervo_do_pantanal']['images'].map((image: string) => buildPrismaImage(image));
  const cervoDoPantanalData: Prisma.AnimalCreateInput = {
    name: 'Cervo-do-pantanal',
    scientificName: 'Blastocerus dichotomus',
    otherNames: ['Guaçu-puçu', 'Duaçuapara'],
    conservationStatus: 'VU',
    description:
      'O cervo-do-pantanal é uma espécie endêmica da América do Sul distribuição abrangindo os países: Peru, Bolívia, Brasil, Paraguai, Uruguai e Argentina. No Brasil, a espécie era encontrada nos estados de Mato Grosso, Mato Drosso do Sul, Goiás, sudeste de Rondônia, sul do Pará, Tocantins, sul do Piauí, Maranhão, oeste da Bahia, oeste de Minas Gerais, São Paulo, extremo oeste do Paraná e sul e sudeste do Rio Grande do Sul. Atualmente, sua população encontra-se bastante reduzida e fragmentada, com a possibilidade de extinções locais em curto espaço de tempo.\nA diminuição acentuada da espécie se dá por diversos fatores: a diminuição de seu habitat devido à expansão agropecuária e urbana, doenças introduzidas por bovinos domésticos, caça e a construção de hidrelétricas. Ameaças secundárias à espécie são: queimadas e enchentes que levam à fuga dos animais a áreas de habitação humana onde podem acabar sendo mortos, ataques de cães e picadas de abelhas exóticas em áreas de produção melífera.\nCuriosidades: O cervo-do-pantanal possui hábitos solitários, contudo grupos familiares compostos por um adulto e um ou mais jovens podem ser encontrados.|O cervo-do-pantanal é o maior cervídeo da América do Sul',
    biome: {
      connect: {
        name: 'Pantanal',
      },
    },
    threats: {
      connect: [
        { name: 'Desmatamento' },
        { name: 'Caça' },
        { name: 'Hidrelétricas' },
        { name: 'Agropecuária' },
        { name: 'Expansão Urbana' },
      ],
    },
  };
  const cervoDoPantanal = await prisma.animal.upsert({
    where: { scientificName: 'Blastocerus dichotomus' },
    update: cervoDoPantanalData,
    create: {
      ...cervoDoPantanalData,
      icon: {
        create: cervoDoPantanalIcon,
      },
      images: {
        createMany: {
          data: cervoDoPantanalImages,
        },
      },
    },
  });

  const tamanduaBandeiraIcon = buildPrismaImage(animals['tamandua_bandeira']['icon']);
  const tamanduaBandeiraImages = animals['tamandua_bandeira']['images'].map((image: string) => buildPrismaImage(image));
  const tamanduaBandeiraData: Prisma.AnimalCreateInput = {
    name: 'Tamanduá-bandeira',
    scientificName: 'Myrmecophaga tridactyla',
    otherNames: ['Papa-formigas', 'Tamanduá-açú', 'Jurumi', 'Jurumim', 'Bandeira', 'Bandurra'],
    conservationStatus: 'VU',
    description:
      'O tamanduá-bandeira é uma espécie endêmica do continente americano ocorrendo em vários países des o sul de Belize e Guatemala na América Central até a América do Sul. No Brasil está presente em todos os biomas brasileiros. Com aparência bastante característica: pelagem marrom com uma faixa diagonal preta de borda brancas, o tamanduá-bandeira costuma medir de 1 a 1,2m de comprimento total e pesar em média 31,5kg.\nAs principais ameaças à espécie são as queimadas, a expansão agropecuária, o desmatamento, o aumento da matriz rodoviária e a desconexão e redução do habitat natural. Outras ameaças secundárias são: caça, perseguição e envenamento indireto por inseticidas.\nCuriosidadess: O tamanduá-bandeira é um bom nadador.',
    biome: {
      connect: {
        name: 'Pantanal',
      },
    },
    threats: {
      connect: [
        { name: 'Queimada' },
        { name: 'Agropecuária' },
        { name: 'Desmatamento' },
        { name: 'Ferrovias e Rodovias' },
      ],
    },
  };
  const tamanduaBandeira = await prisma.animal.upsert({
    where: { scientificName: 'Myrmecophaga tridactyla' },
    update: tamanduaBandeiraData,
    create: {
      ...tamanduaBandeiraData,
      icon: {
        create: tamanduaBandeiraIcon,
      },
      images: {
        createMany: {
          data: tamanduaBandeiraImages,
        },
      },
    },
  });

  const tiribaDoParanaIcon = buildPrismaImage(animals['tiriba_de_pfrimer']['icon']);
  const tiribaDoParanaImages = animals['tiriba_de_pfrimer']['images'].map((image: string) => buildPrismaImage(image));
  const tiribaDoParanaData: Prisma.AnimalCreateInput = {
    name: 'Tiriba-do-paranã',
    scientificName: 'Pyrrhura pfrimeri',
    otherNames: ['Tiriba-de-pfrimer'],
    conservationStatus: 'EN',
    description:
      'A tiriba-do-paranã é uma espécie endêmica do Brasil encontrada no sudeste do Tocantins e nordeste do Goiás, apenas em áreas associadas a afloramentos rochosos de calcário na bacia do rio Paranã.\nA principal ameaça à espécie é a perda de habitat devido ao desmatamento, a ocupação por pastagens, queimadas, destruição dos afloramentos rochosos pela indústria da mineração e inundações geradas pela construção de PCHs (Pequenas Centrais Hidrelétricas).\nCuriosidades: A tiriba-do-paranã possui alimentação diversificada com predomínio de flores, frutos e sementes. Devido à perda de habitat para pastagens e assentamentos, a espécie incorporou em sua dietas frutos cultivados como a manga e a goiaba.',
    biome: {
      connect: {
        name: 'Pantanal',
      },
    },
    threats: {
      connect: [{ name: 'Desmatamento' }, { name: 'Queimada' }, { name: 'Hidrelétricas' }, { name: 'Agropecuária' }],
    },
  };
  const tiribaDoParana = await prisma.animal.upsert({
    where: { scientificName: 'Pyrrhura pfrimeri' },
    update: tiribaDoParanaData,
    create: {
      ...tiribaDoParanaData,
      icon: {
        create: tiribaDoParanaIcon,
      },
      images: {
        createMany: {
          data: tiribaDoParanaImages,
        },
      },
    },
  });

  console.log({ ariranha, catita, cervoDoPantanal, tamanduaBandeira, tiribaDoParana });
}
