import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class BiomeController {
  async findAll(request: Request, response: Response) {
    const biomes = await prisma.biome.findMany();

    return response.json(biomes);
  }

  async findOne(request: Request, response: Response) {
    const { id } = request.params;

    const biome = await prisma.biome.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        images: true,
      },
    });

    return response.json(biome);
  }
}
