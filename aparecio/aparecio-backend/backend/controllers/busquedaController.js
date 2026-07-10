import { cifrarCedula } from '../services/cryptoService.js';
import { enviarMatch } from '../services/matchService.js';

import {
    buscarHallazgo,
    eliminarHallazgo,
    guardarBusqueda
} from '../models/buscoModel.js';

import { buscoSchema } from '../schemas/buscoSchema.js';

export async function busco(req, res) {
console.log('Busco request body:', req.body); // Log the request body for debugging
    const resultado = buscoSchema.safeParse(req.body);
    console.log('Busco validation result:', resultado); // Log the validation result for debugging

    if (!resultado.success) {
        return res.status(400).json({
            errores: resultado.error.flatten().fieldErrors
        });
    }

    const {
        numero_cedula,
        mi_email
    } = resultado.data;

    try {

        const hash = cifrarCedula(numero_cedula);

        const hallazgo = await buscarHallazgo(hash);

        if (hallazgo) {

            await enviarMatch(
                hallazgo.email_contacto,
                hallazgo.nombre_pila,
                mi_email,
                hallazgo.lugar
            );

            await eliminarHallazgo(hallazgo.id);

            return res.json({
                match: true,
                mensaje: '¡Apareció!'
            });
        }

        await guardarBusqueda(
            hash,
            mi_email
        );

        return res.json({
            match: false,
            mensaje: 'Guardamos tu búsqueda'
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            error: 'Error interno'
        });
    }
}