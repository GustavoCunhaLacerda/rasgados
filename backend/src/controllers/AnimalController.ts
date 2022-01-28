import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class AnimalController {
  async findAll(request: Request, response: Response) {
    const animals = await prisma.animal.findMany({
      include: {
        icon: true,
        images: true,
        biome: true,
        threats: true,
      },
      orderBy: {
        id: 'asc',
      },
    });

    return response.json(animals);
  }

  async findOne(request: Request, response: Response) {
    const { id } = request.params;

    const animal = await prisma.animal.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        icon: true,
        images: true,
        biome: true,
        threats: true,
      },
    });

    return response.json(animal);
  }

  async findByBiome(request: Request, response: Response) {
    const { biomeId } = request.params;

    const animals = await prisma.animal.findMany({
      where: {
        biome: {
          id: Number(biomeId),
        },
      },
      include: {
        icon: true,
        images: true,
        biome: true,
        threats: true,
      },
      orderBy: {
        id: 'asc',
      },
    });

    return response.json(animals);
  }
}
