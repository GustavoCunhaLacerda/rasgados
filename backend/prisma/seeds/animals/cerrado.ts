import { Prisma, PrismaClient } from "@prisma/client";
import { buildPrismaImage } from "../../seed";
import { getAnimalsImagesByBiome } from "../animals";
const prisma = new PrismaClient();

export async function cerrado() {
  const animals = getAnimalsImagesByBiome("cerrado") as any;

  const antaIcon = buildPrismaImage(animals["anta"]["icon"]);
  const antaImages = animals["anta"]["images"].map((image: string) =>
    buildPrismaImage(image)
  );
  const antaData: Prisma.AnimalCreateInput = {
    name: "Anta",
    cientificName: "Tapirus terrestris",
    otherNames: ["Anta-brasileira", "Tapir"],
    conservationStatus: "VU",
    description:
      "A anta é um mamífero que se distribui geograficamente do Leste da Colômbia até o Norte da Argentina e Paraguai.\nSua população tem diminuído com o passar do tempo por causa da perda de habitat por desmatamento e ocupação urbana.\nCuriosidades é o maior mamífero terrestre brasileiro. São conhecidas como as “jardineiras da floresta”, pela sua importância ecológica de espalhar sementes.",
    biome: {
      connect: {
        name: "Cerrado",
      },
    },
    threats: {
      connect: [{ name: "Desmatamento" }, { name: "Expansão Urbana" }],
    },
  };
  const anta = await prisma.animal.upsert({
    where: { cientificName: "Tapirus terrestris" },
    update: antaData,
    create: {
      ...antaData,
      icon: {
        create: antaIcon,
      },
      images: {
        createMany: {
          data: antaImages,
        },
      },
    },
  });

  const cachorroVinagreIcon = buildPrismaImage(
    animals["cachorro_vinagre"]["icon"],
  );
  const cachorroVinagreImages = animals["cachorro_vinagre"]["images"].map((
    image: string,
  ) => buildPrismaImage(image));
  const cachorroVinagreData: Prisma.AnimalCreateInput = {
    name: "Cachorro-vinagre",
    cientificName: "Speothos venaticus",
    otherNames: [
      "Aracambé",
      "Jaguacininga",
      "Jaguaracambé",
      "Janauíra",
      "Januaíra",
    ],
    conservationStatus: "VU",
    description:
      "O cachorro-vinagre é um animal no qual existem registros de ocorrência do Panamá, Equador, Colombia, leste do Peru, Brasil, Venezuela, Guiana, Paraguai, nordeste da Argentina e leste da Bolívia. E, embora amplamente distribuída, essa espécie nunca é abundante.\nEssa espécie está sendo ameaçada por consequência da perda de habitat e escassez de presas.\nCuriosidades:Aparerenta ser natualmente raro. Vive e caça na companhia de outras espécies.",
    biome: {
      connect: {
        name: "Cerrado",
      },
    },
    threats: {
      connect: [{ name: "Desmatamento" }],
    },
  };
  const cachorroVinagre = await prisma.animal.upsert({
    where: { cientificName: "Speothos venaticus" },
    update: cachorroVinagreData,
    create: {
      ...cachorroVinagreData,
      icon: {
        create: cachorroVinagreIcon,
      },
      images: {
        createMany: {
          data: cachorroVinagreImages,
        },
      },
    },
  });

  const gatoMaracajaIcon = buildPrismaImage(animals["gato_maracaja"]["icon"]);
  const gatoMaracajaImages = animals["gato_maracaja"]["images"].map((
    image: string,
  ) => buildPrismaImage(image));
  const gatoMaracajaData: Prisma.AnimalCreateInput = {
    name: "Gato-maracajá",
    cientificName: "Leopardus wiedii",
    otherNames: ["Maracajá", "Margay"],
    conservationStatus: "VU",
    description:
      "O gato-maracajá é um felino que possui uma distribuição ampla no Brasil, só não está presente no Ceará e no sul do Rio Grande do Sul.A perda de habitat por expansão agrícola e a caça estão afetando a população dessa espécie.\nCuriosidades: Possui hábitos noturno e solitário. Imita o som de um filhote para atrair as presas.",
    biome: {
      connect: {
        name: "Cerrado",
      },
    },
    threats: {
      connect: [{ name: "Agropecuária" }, { name: "Caça" }],
    },
  };
  const gatoMaracaja = await prisma.animal.upsert({
    where: { cientificName: "Leopardus wiedii" },
    update: gatoMaracajaData,
    create: {
      ...gatoMaracajaData,
      icon: {
        create: gatoMaracajaIcon,
      },
      images: {
        createMany: {
          data: gatoMaracajaImages,
        },
      },
    },
  });

  const loboGuaraIcon = buildPrismaImage(animals["lobo_guara"]["icon"]);
  const loboGuaraImages = animals["lobo_guara"]["images"].map((image: string) =>
    buildPrismaImage(image)
  );
  const loboGuaraData: Prisma.AnimalCreateInput = {
    name: "Lobo-guará",
    cientificName: "Chrysocyon brachyurus",
    otherNames: ["Lobo-de-crina", "Lobo-vermelho", "Aguará", "Aguaraçu"],
    conservationStatus: "VU",
    description:
      "O lobo-guará é uma espécie que, originalmente, se distribuía amplamente pelas áreas de vegetação aberta do Cerrado, Chaco e Pampas. ... Na região do Pantanal a espécie é comum nas partes altas da bacia do alto Paraguai, mas raro na planície Pantaneira. Países de ocorrência: Argentina, Bolívia, Brasil, Paraguai, Peru, Uruguai.\nA perda de habitat por desmantamento e a ocupação urbana são as principais causas da diminuição de sua população.\n",
    biome: {
      connect: {
        name: "Cerrado",
      },
    },
    threats: {
      connect: [{ name: "Desmatamento" }, { name: "Expansão Urbana" }],
    },
  };
  const loboGuara = await prisma.animal.upsert({
    where: { cientificName: "Chrysocyon brachyurus" },
    update: loboGuaraData,
    create: {
      ...loboGuaraData,
      icon: {
        create: loboGuaraIcon,
      },
      images: {
        createMany: {
          data: loboGuaraImages,
        },
      },
    },
  });

  const morceguinhoDoCerradoIcon = buildPrismaImage(
    animals["morceguinho_do_cerrado"]["icon"],
  );
  const morceguinhoDoCerradoImages = animals["morceguinho_do_cerrado"]["images"]
    .map((image: string) => buildPrismaImage(image));
  const morceguinhoDoCerradoData: Prisma.AnimalCreateInput = {
    name: "Morceguinho-do-cerrado",
    cientificName: "Lonchophylla dekeyseri",
    otherNames: [],
    conservationStatus: "EN",
    description:
      "O morceguinho-do-cerrado é um mamífero que ocorre em baixíssima densidade nos estados de Goiás, Minas Gerais, Mato Grosso, Mato Grosso do Sul, Piauí e Distrito Federal.\nA população desse animal está diminuindo por perda de habitat devido ao desmatamento e ocupação urbana.\nCuriosidades: É uma espécie endêmica do cerrado. É responsável pela polinização de plantas a árvores típicas do cerrado",
    biome: {
      connect: {
        name: "Cerrado",
      },
    },
    threats: {
      connect: [{ name: "Desmatamento" }, { name: "Expansão Urbana" }],
    },
  };
  const morceguinhoDoCerrado = await prisma.animal.upsert({
    where: { cientificName: "Lonchophylla dekeyseri" },
    update: morceguinhoDoCerradoData,
    create: {
      ...morceguinhoDoCerradoData,
      icon: {
        create: morceguinhoDoCerradoIcon,
      },
      images: {
        createMany: {
          data: morceguinhoDoCerradoImages,
        },
      },
    },
  });

  console.log({
    anta,
    cachorroVinagre,
    gatoMaracaja,
    loboGuara,
    morceguinhoDoCerrado,
  });
}
