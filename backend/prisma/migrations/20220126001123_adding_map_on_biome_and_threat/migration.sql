/*
  Warnings:

  - You are about to drop the column `svgIcon` on the `animals` table. All the data in the column will be lost.
  - You are about to drop the column `svgIcon` on the `biomes` table. All the data in the column will be lost.
  - You are about to drop the column `biomeId` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `threatId` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `svgIcon` on the `threats` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[mapId]` on the table `biomes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[mapId]` on the table `threats` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `icon` to the `animals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mapId` to the `biomes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mapId` to the `threats` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_biomeId_fkey";

-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_threatId_fkey";

-- AlterTable
ALTER TABLE "animals" DROP COLUMN "svgIcon",
ADD COLUMN     "icon" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "biomes" DROP COLUMN "svgIcon",
ADD COLUMN     "mapId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "images" DROP COLUMN "biomeId",
DROP COLUMN "threatId",
ADD COLUMN     "biomeImageId" INTEGER,
ADD COLUMN     "threatImageId" INTEGER;

-- AlterTable
ALTER TABLE "threats" DROP COLUMN "svgIcon",
ADD COLUMN     "mapId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "biomes_mapId_key" ON "biomes"("mapId");

-- CreateIndex
CREATE UNIQUE INDEX "threats_mapId_key" ON "threats"("mapId");

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_threatImageId_fkey" FOREIGN KEY ("threatImageId") REFERENCES "threats"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_biomeImageId_fkey" FOREIGN KEY ("biomeImageId") REFERENCES "biomes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "threats" ADD CONSTRAINT "threats_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "images"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "biomes" ADD CONSTRAINT "biomes_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "images"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
