import express from 'express';
import { applicationController } from '../Controller/applicationController';

const router = express.Router();
router.get('/', );
router.get('/:id', );
router.post('/', applicationController.createApplication);
router.put('/:id', );
router.delete('/:id', );

export default router;