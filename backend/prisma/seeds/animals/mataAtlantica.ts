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
    description: 'O cágado-de-hogei é uma espécie endêmica do Brasil encontrada na bacia do rio Paraíba do Sul, nos estados do Rio de Janeiro e sul de Minas Gerais, até o rio Itapemirim, nas regiões costeiras do estado do Espírito Santo. A espécie tem tamanho máximo de 38cm de comprimento de casco e peso médio de 2,75kg, para machos, e 38,4cm de comprimento de casco e peso médio de 3kg, para fêmeas.\nA diminuição da espécie está ligada, principalmente, a diminuição de seu habitat devido ao desmatamento, expansão urbana e empreendimentos hidrelétricos.\nCuriosidades: Apesar de não haver muitas pesquisas acerca do cágado-de-hogei, notou-se que eles gostam de comer figo, fruta comum no local.|O maior cágado-de-hogei encontrado foi uma fêmea que pesava surprendentes 4,55kg!',
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
    description: 'O mico-leão-dourado é uma espécie endêmica do Brasil, encontrada no estado do Rio de Janeiro. Conhecido pela pelagem alaranjada, o mico-leão-dourado vaira de 22 a 30,2 cm de comprimento e pesa em média 620g, para machos, e 535g, para fêmeas.\nA ameaça a espécie se dá por fatores humanos: queimadas, expansão urbana, aumento da matriz rodoviária, desconexão de hábitat; e naturais: competição com espécies exóticas e hibridação com o mico-leão-de-cara-dourada.\nCuriosidades: Dos cerca de 1600 micos-leões-dourados encontrados na natureza hoje, aproximadamente 60% são provenientes de exemplares reintroduzidos, translocados e de seus descendentes.',
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
    otherNames: ['Aí-pixuna', 'Preguiça-preta'],
    conservationStatus: 'VU',
    description: 'A preguiça-de-coleira é uma espécie endêmica do Brasil, habitando apenas na Mata Atlântica costeira do Nordeste e Sudeste do país, nos estados de Bahia, Espírito Santo, Rio de Janeiro, Sergipe e extremo nordeste de Minas Gerais. Há certa discrepância quanto aos tamanhos da preguiça-de-coleira medidos até hoje, contudo pode-se dizer que machos possuem em média 64,4 cm de comprimento e pesam até 9kg e fêmes possuem em média 68 cm e pesam até 10kg.\nA diminuição da espécie se dá principalmente pelo desmatamento decorrente da expansão agropecuária, pela expansão urbana, pelo aumento da matriz rodoviária e por queimadas.\nCuriosidades: Preguiças-de-coleira possuem hábitos solitários e o filhote, assim que atinge a idade adulta, sai em busca de um novo local para viver.|Preguiças-de-coleira têm uma dieta estritamente folívora, ou seja, se alimentam de folhas e cipós e, raramente, de flores e frutos.',
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
    description: 'A saíra-militar é uma espécie endêmica do Brasil, encontrada apenas no estado do Ceará exclusivamente nas serras de Baturité, Aratanha e Maranguape, somando cerca de 260km^2 de florestas.\nA diminuição da espécie de dá principalmente ao tráfico de animais silvestres e a destruição e fragmentação de seu habitat.\nCuriosidades: A saíra-militar é encontrada sozinha ou com seu par.',
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
    description: 'O sapinho-admirável-da-barriga-vermelha é uma espécie endêmica do Brasi, com distribuição muito restrita nas margens do rio Forqueta, no município de Arvorezinha no estado do Rio Grande do Sul. Como sua área de ocupação é muito pequena, o que sujere que a população seja pequena, apesar de não ser difícil entrar exemplares no local.\nA principal ameaça a espécie é a intalação da PCH (Pequena Central Hidrelétrica) Perau de Janeiro que, se implantada, afetará diretamente o único local conhecido de ocorrência da espécie. Outra ameaça potencial é a contaminação da água por agrotóxicos provenientes das plantações de fumo adjacentes às encostas do vale do rio Forquata.\nCuriosidades: Diferente de outros sapinhos do gênero Melanophryniscus, o sapinho-admirável-da-barriga-vermelha não possui tumefação frontal, glândula frontal que armazena substância defensiva.',
    biome: {
      connect: {
        name: 'Mata Atlântica',
      },
    },
    threats: {
      connect: [{ name: 'Lixo' }, { name: 'Hidrelétricas' }],
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
