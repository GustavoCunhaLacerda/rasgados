/*
  Warnings:

  - A unique constraint covering the columns `[cientificName]` on the table `animals` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `biomes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `threats` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "animals_cientificName_key" ON "animals"("cientificName");

-- CreateIndex
CREATE UNIQUE INDEX "biomes_name_key" ON "biomes"("name");

-- CreateIndex
CREATE UNIQUE INDEX "threats_name_key" ON "threats"("name");
