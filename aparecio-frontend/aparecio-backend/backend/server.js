import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import cors from 'cors';

import hallazgoRoutes from './routes/hallazgoRoutes.js';
import busquedaRoutes from './routes/busquedaRoutes.js';

import './jobs/cleanup.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', hallazgoRoutes);
app.use('/api', busquedaRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado en ${PORT}`);
});