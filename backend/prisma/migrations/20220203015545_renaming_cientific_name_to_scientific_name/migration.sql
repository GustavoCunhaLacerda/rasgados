/*
  Warnings:

  - You are about to drop the column `cientificName` on the `animals` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[scientificName]` on the table `animals` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `scientificName` to the `animals` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "animals_cientificName_key";

-- AlterTable
ALTER TABLE "animals" DROP COLUMN "cientificName",
ADD COLUMN     "scientificName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "animals_scientificName_key" ON "animals"("scientificName");
