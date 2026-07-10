import { Router } from 'express';
import { busco } from '../controllers/busquedaController.js';

const router = Router();

router.post('/busco', busco);

export default router;