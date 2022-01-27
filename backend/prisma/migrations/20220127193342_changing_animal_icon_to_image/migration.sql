/*
  Warnings:

  - You are about to drop the column `icon` on the `animals` table. All the data in the column will be lost.
  - You are about to drop the column `animalId` on the `images` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[iconId]` on the table `animals` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `iconId` to the `animals` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_animalId_fkey";

-- AlterTable
ALTER TABLE "animals" DROP COLUMN "icon",
ADD COLUMN     "iconId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "images" DROP COLUMN "animalId",
ADD COLUMN     "animalImageId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "animals_iconId_key" ON "animals"("iconId");

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_animalImageId_fkey" FOREIGN KEY ("animalImageId") REFERENCES "animals"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animals" ADD CONSTRAINT "animals_iconId_fkey" FOREIGN KEY ("iconId") REFERENCES "images"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
