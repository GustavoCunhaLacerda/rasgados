-- DropForeignKey
ALTER TABLE "animals" DROP CONSTRAINT "animals_iconId_fkey";

-- DropForeignKey
ALTER TABLE "biomes" DROP CONSTRAINT "biomes_mapId_fkey";

-- DropForeignKey
ALTER TABLE "threats" DROP CONSTRAINT "threats_mapId_fkey";

-- AlterTable
ALTER TABLE "animals" ALTER COLUMN "iconId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "biomes" ALTER COLUMN "mapId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "threats" ALTER COLUMN "mapId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "animals" ADD CONSTRAINT "animals_iconId_fkey" FOREIGN KEY ("iconId") REFERENCES "images"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "threats" ADD CONSTRAINT "threats_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "images"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "biomes" ADD CONSTRAINT "biomes_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "images"("id") ON DELETE SET NULL ON UPDATE CASCADE;
