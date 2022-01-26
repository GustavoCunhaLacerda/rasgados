/*
  Warnings:

  - You are about to drop the column `type` on the `threats` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "threats" DROP COLUMN "type";

-- DropEnum
DROP TYPE "ThreatType";
