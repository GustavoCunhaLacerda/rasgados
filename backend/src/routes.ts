import { Router } from 'express';
import { AnimalController } from './controllers/AnimalController';
import { BiomeController } from './controllers/BiomeController';
import { ThreatController } from './controllers/ThreatController';

const router = Router();

const animalController = new AnimalController();
const biomeController = new BiomeController();
const threatController = new ThreatController();

router.get('/animals/all', animalController.findAll);
router.get('/animals/:id', animalController.findOne);
router.get('/animals/biome/:biomeId', animalController.findByBiome);

router.get('/biomes/all', biomeController.findAll);
router.get('/biomes/:id', biomeController.findOne);

router.get('/threats/all', threatController.findAll);
router.get('/threats/:id', threatController.findOne);

export { router };
