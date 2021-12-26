-- CreateTable
CREATE TABLE "_AnimalToThreat" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AnimalToThreat_AB_unique" ON "_AnimalToThreat"("A", "B");

-- CreateIndex
CREATE INDEX "_AnimalToThreat_B_index" ON "_AnimalToThreat"("B");

-- AddForeignKey
ALTER TABLE "_AnimalToThreat" ADD FOREIGN KEY ("A") REFERENCES "animals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnimalToThreat" ADD FOREIGN KEY ("B") REFERENCES "threats"("id") ON DELETE CASCADE ON UPDATE CASCADE;
