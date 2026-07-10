import { Router } from 'express';
import { encontre } from '../controllers/hallazgoController.js';

const router = Router();

router.post('/encontre', encontre);

export default router;