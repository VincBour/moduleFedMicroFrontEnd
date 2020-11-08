import express from 'express';
import { applicantController } from '../Controller/applicantController';


const router = express.Router();
router.get('/', );
router.get('/:id', );
router.post('/', applicantController.createApplicant);
router.put('/:id', );
router.delete('/:id', );

export default router;