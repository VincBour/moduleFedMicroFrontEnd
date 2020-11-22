import express from 'express';
import { authenticationController } from '../Controller/authenticationController';

const router = express.Router();
router.get('/', );
router.get('/:id', );
router.post('/api/authentication/signup', authenticationController.signUp);
router.post('/api/authentication/signin', authenticationController.signIn);
router.put('/:id', );
router.delete('/:id', );

export default router;