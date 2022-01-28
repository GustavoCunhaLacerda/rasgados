import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ThreatController {
  async findAll(request: Request, response: Response) {
    const threats = await prisma.threat.findMany({
      include: {
        map: true,
        images: true,
      },
      orderBy: {
        id: 'asc',
      },
    });

    return response.json(threats);
  }

  async findOne(request: Request, response: Response) {
    const { id } = request.params;

    const threat = await prisma.threat.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        map: true,
        images: true,
        animals: true,
      },
    });

    return response.json(threat);
  }
}
