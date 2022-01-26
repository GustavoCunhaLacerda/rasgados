import { biomes } from './seeds/biomes';
import { threats } from './seeds/threats';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

biomes()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

threats()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
