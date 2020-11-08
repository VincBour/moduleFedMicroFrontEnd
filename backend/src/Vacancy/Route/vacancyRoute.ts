import express from 'express';
import { vacancyController } from '../Controller/vacancyController';


const router = express.Router();
router.get('/api/vacancy/', vacancyController.findAllVacancy);
router.get('/api/vacancy/:id', vacancyController.findOneVacancy);
router.post('/api/vacancy/', vacancyController.createVacancy);
router.put('/api/vacancy/:id', );
router.delete('/api/vacancy/:id', );

export default router;