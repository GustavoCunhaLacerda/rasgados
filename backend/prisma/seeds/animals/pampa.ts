import { Prisma, PrismaClient } from "@prisma/client";
import { buildPrismaImage } from "../../seed";
import { getAnimalsImagesByBiome } from "../animals";
const prisma = new PrismaClient();

export async function pampa() {
  const animals = getAnimalsImagesByBiome("pampa") as any;

  const cardealAmareloIcon = buildPrismaImage(
    animals["cardeal_amarelo"]["icon"],
  );
  const cardealAmareloImages = animals["cardeal_amarelo"]["images"].map((
    image: string,
  ) => buildPrismaImage(image));
  const cardealAmareloData: Prisma.AnimalCreateInput = {
    name: "Cardeal-amarelo",
    cientificName: "Gubernatrix cristata",
    otherNames: [],
    conservationStatus: "EN",
    description:
      "O cardeal-amarelo ocorre na Argentina e Uruguai ao sul do Rio Grande do Sul.\nEssa ave está perdendo sua população por consequência de perda de habitat e caça para tráfico e comércio ilegal.\nCuriosidades: Essa ave vive em campos sujos, mas tambem nos campos de morros pequenos, com poucas rochas no solo, na beira de córregos. Na época da muda, forma bandos muito pequenos, geralmente de um casal e seus filhotes da temporada; às vezes aparece junto a eles uma fêmea adulta isolada, muito poucas dois machos adultos, provavelmente pai e filho de temporadas anteriores; se algum estranho chega perto, rechaçam prontamente. Seu nome científico significa: do (latim) gubernatrix = governante, comandante; e do (latim) cristata, cristatus, crista = com crista, com topete, crista, pluma. ⇒ Governante com crista.",
    biome: {
      connect: {
        name: "Pampa",
      },
    },
    threats: {
      connect: [{ name: "Desmatamento" }, { name: "Caça" }],
    },
  };
  const cardealAmarelo = await prisma.animal.upsert({
    where: { cientificName: "Gubernatrix cristata" },
    update: cardealAmareloData,
    create: {
      ...cardealAmareloData,
      icon: {
        create: cardealAmareloIcon,
      },
      images: {
        createMany: {
          data: cardealAmareloImages,
        },
      },
    },
  });

  const cobraEspadaDosPampasIcon = buildPrismaImage(
    animals["cobra_espada_dos_pampas"]["icon"],
  );
  const cobraEspadaDosPampasImages =
    animals["cobra_espada_dos_pampas"]["images"].map((image: string) =>
      buildPrismaImage(image)
    );
  const cobraEspadaDosPampasData: Prisma.AnimalCreateInput = {
    name: "Cobra-espada dos Pampas",
    cientificName: "Calamodontophis paucidens",
    otherNames: [],
    conservationStatus: "EN",
    description:
      "A cobra-espada-dos-pampas é um animal que ocorre no Uruguai e Brasil, é endêmica do bioma Pampa, ocorrendo em áreas baixas da ecorregião Savana Uruguaia e na Depressão Periférica no centro do estado do Rio Grande do Sul.\nEstá ameaçada pelo declínio contínuo da área e qualidade do hábitat, causando perda e degradação dos hábitats campestres no Sul do Brasil.\nCuriosidades: Essa espécie de cobra foi descrita em 1936 e até o momento foram coletados apenas 13 exemplares. É uma serpente vivípera que prefere ambientes não antopizados. Vive tanto no chão quanto em troncos e galhos de árvores. Se alimenta de moluscos. (Espécimes em cativeiro aceitaram alimentação de lesmas).",
    biome: {
      connect: {
        name: "Pampa",
      },
    },
    threats: {
      connect: [{ name: "Desmatamento" }],
    },
  };
  const cobraEspadaDosPampas = await prisma.animal.upsert({
    where: { cientificName: "Calamodontophis paucidens" },
    update: cobraEspadaDosPampasData,
    create: {
      ...cobraEspadaDosPampasData,
      icon: {
        create: cobraEspadaDosPampasIcon,
      },
      images: {
        createMany: {
          data: cobraEspadaDosPampasImages,
        },
      },
    },
  });

  const gatoDosPampasIcon = buildPrismaImage(
    animals["gato_dos_pampas"]["icon"],
  );
  const gatoDosPampasImages = animals["gato_dos_pampas"]["images"].map((
    image: string,
  ) => buildPrismaImage(image));
  const gatoDosPampasData: Prisma.AnimalCreateInput = {
    name: "Gato-dos-pampas",
    cientificName: "Leopardus pajeros",
    otherNames: ["gato-palheiro"],
    conservationStatus: "VU",
    description:
      "O gato-dos-pampas é uma espécie que está restrita ao sul do Brasil, na porção sul do estado do Rio Grande do Sul, estendendo-se por todo o Uruguai e nordeste da Argentina. No Brasil, sua distribuição está restrita ao bioma Pampa.\nEsse felino está vulnerável na narureza por destruição de seu habitat, tráfico de animais, caça e por ser atropelado em rodovias.\nCuriosidades: Este é seguramente o felino mais desconhecido e o mais ameaçado em todo o país, tendendo a ser extremamente raro no Pampa. Possui uma dieta mais generalista que outras espécies de pequenos felinos de ocorrência no Pampa, consumindo principalmente roedores terrestres de pequeno porte.",
    biome: {
      connect: {
        name: "Pampa",
      },
    },
    threats: {
      connect: [{ name: "Caça" }, { name: "Desmatamento" }, {
        name: "Ferrovias e Rodovias",
      }],
    },
  };
  const gatoDosPampas = await prisma.animal.upsert({
    where: { cientificName: "Leopardus pajeros" },
    update: gatoDosPampasData,
    create: {
      ...gatoDosPampasData,
      icon: {
        create: gatoDosPampasIcon,
      },
      images: {
        createMany: {
          data: gatoDosPampasImages,
        },
      },
    },
  });

  const lagartixaDasDunasIcon = buildPrismaImage(
    animals["lagartixa_das_dunas"]["icon"],
  );
  const lagartixaDasDunasImages = animals["lagartixa_das_dunas"]["images"].map((
    image: string,
  ) => buildPrismaImage(image));
  const lagartixaDasDunasData: Prisma.AnimalCreateInput = {
    name: "Lagartixa-das-dunas",
    cientificName: "Liolaemus occipitalis",
    otherNames: [],
    conservationStatus: "VU",
    description:
      "A lagartixa-das-dunas é um réptil microendêmico, ocorrendo apenas no Rio Grande do Sul/Brasil em restingas arenosas no Bioma Pampa.\nA destruição de seu habitat para, principalmente, construções de residências e empreeendimentos urbanos estão contribuindo para a diminuição de sua espécie.\nCuriosidades: Fisicamente é parecido com outra espécie de lagarto,Liolaemus arambarensis, que ocorre apenas em certas dunas e praias do Rio Grande do Sul. Pode cavar uma toca com até 1m de profundidade. É muito ágil e quando percebido por possíveis predadores facilmente consegue fugir, correndo, se escondendo entre a vegetação ou se enterrando na areia. É ovíparo, podendo depositar até 2 ovos. A dieta é exclusivamente carnívora, alimentando-se de insetos e aracnídeos.",
    biome: {
      connect: {
        name: "Pampa",
      },
    },
    threats: {
      connect: [{ name: "Expansão Urbana" }],
    },
  };
  const lagartixaDasDunas = await prisma.animal.upsert({
    where: { cientificName: "Liolaemus occipitalis" },
    update: lagartixaDasDunasData,
    create: {
      ...lagartixaDasDunasData,
      icon: {
        create: lagartixaDasDunasIcon,
      },
      images: {
        createMany: {
          data: lagartixaDasDunasImages,
        },
      },
    },
  });

  const papagaioCharaoIcon = buildPrismaImage(
    animals["papagaio_charao"]["icon"],
  );
  const papagaioCharaoImages = animals["papagaio_charao"]["images"].map((
    image: string,
  ) => buildPrismaImage(image));
  const papagaioCharaoData: Prisma.AnimalCreateInput = {
    name: "Papagaio-charão",
    cientificName: "Amazona pretrei",
    otherNames: ["Papagaio-da-serra", "Charão"],
    conservationStatus: "VU",
    description:
      "O papagraio-charão é uma ave típica do sul do Brasil, com ocorrência atual nos estados de Santa Catarina e Rio Grande do Sul.\nA captura de filhotes do papagaio-charão para ser comercializado como animal de estimação, é hoje o principal fator responsável pela ameaça de extinção da espécie. A redução das matas de araucárias, durante as décadas de 20 a 60, diminuiu drasticamente a oferta do principal item alimentar da espécie. E a errubada das matas nativas e o manejo inadequado dos “capões de mato” têm diminuido a oferta de locais de nidificação para os papagaios.\nCuriosidades: É uma das únicas espécies de papagaios do gênero Amazona que apresenta dimorfismo sexual. Os dois sexos tem cor predominante verde, e são diferenciados pela máscara vermelha e espelhos vermelhos da asa mais evidentes no macho, sendo que indivíduos jovens apresentam pouco vermelho. As secundárias e parte das primárias são azuis, sendo que as retrizes são verdes com a extremidade amarela.",
    biome: {
      connect: {
        name: "Pampa",
      },
    },
    threats: {
      connect: [{ name: "Caça" }, { name: "Desmatamento" }],
    },
  };
  const papagaioCharao = await prisma.animal.upsert({
    where: { cientificName: "Amazona pretrei" },
    update: papagaioCharaoData,
    create: {
      ...papagaioCharaoData,
      icon: {
        create: papagaioCharaoIcon,
      },
      images: {
        createMany: {
          data: papagaioCharaoImages,
        },
      },
    },
  });

  console.log({
    cardealAmarelo,
    cobraEspadaDosPampas,
    gatoDosPampas,
    lagartixaDasDunas,
    papagaioCharao,
  });
}
