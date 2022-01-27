import path from 'path';
import { PrismaClient } from '@prisma/client';
import { biomes } from './seeds/biomes';
import { threats } from './seeds/threats';
import { animals } from './seeds/animals';
const prisma = new PrismaClient();

export function buildPrismaImage(imgPath: string) {
  return {
    name: path.basename(imgPath),
    path: imgPath,
  };
}

async function seed() {
  await biomes();
  await threats();
  await animals();
}

seed()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
