import { Request, Response } from 'express';
import { PrismaClient, ConservationStatus } from '@prisma/client';

interface IAnimalParams {
  name?: string;
  cientificName?: string;
  conservationStatus?: ConservationStatus;
  biomes?: number[];
  theats?: number[];
}

const prisma = new PrismaClient();

export class AnimalController {
  async findAll(request: Request, response: Response) {
    const animals = await prisma.animal.findMany();

    return response.json(animals);
  }

  async findOne(request: Request, response: Response) {
    const { id } = request.params;

    const animal = await prisma.animal.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        biome: true,
        images: true,
        threats: true,
      },
    });

    return response.json(animal);
  }

  async findWithFilter(request: Request, response: Response) {
    const filter = request.body as IAnimalParams;

    const animals = await prisma.animal.findMany({
      where: {
        OR: [
          {
            name: {
              equals: filter.name,
            },
          },
          {
            otherNames: {
              has: filter.name,
            },
          },
          {
            cientificName: {
              equals: filter.name,
            },
          },
        ],

        conservationStatus: {
          equals: filter.conservationStatus,
        },
        biomeId: {
          in: filter.biomes,
        },
        threats: {
          some: {
            id: {
              in: filter.theats,
            },
          },
        },
      },
    });

    return response.json(animals);
  }
}
