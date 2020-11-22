import express from 'express';
import { referentialController } from './ReferentialController';


const router = express.Router();
router.get('/api/referential/:name', referentialController.findReferentials);
router.get('/api/referential/:name/:id', referentialController.findOneReferential);
// router.post('/api/referential/', referentialController.createRef);
// router.put('/api/vacancy/:id', );
// router.delete('/api/vacancy/:id', );

export default router;