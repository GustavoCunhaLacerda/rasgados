-- CreateEnum
CREATE TYPE "ConservationStatus" AS ENUM ('EX', 'EW', 'CR', 'EN', 'VU', 'NT', 'LC');

-- CreateEnum
CREATE TYPE "ThreatType" AS ENUM ('ARTIFICAL', 'NATURAL');

-- CreateTable
CREATE TABLE "images" (
    "id" SERIAL NOT NULL,
    "data" BYTEA NOT NULL,
    "name" TEXT NOT NULL,
    "animalId" INTEGER,
    "threatId" INTEGER,
    "biomeId" INTEGER,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "animals" (
    "id" SERIAL NOT NULL,
    "svgIcon" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cientificName" TEXT NOT NULL,
    "otherNames" TEXT[],
    "conservationStatus" "ConservationStatus" NOT NULL,
    "description" TEXT NOT NULL,
    "biomeId" INTEGER NOT NULL,

    CONSTRAINT "animals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "threats" (
    "id" SERIAL NOT NULL,
    "svgIcon" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "ThreatType" NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "threats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "biomes" (
    "id" SERIAL NOT NULL,
    "svgIcon" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "biomes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "animals"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_threatId_fkey" FOREIGN KEY ("threatId") REFERENCES "threats"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_biomeId_fkey" FOREIGN KEY ("biomeId") REFERENCES "biomes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animals" ADD CONSTRAINT "animals_biomeId_fkey" FOREIGN KEY ("biomeId") REFERENCES "biomes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
