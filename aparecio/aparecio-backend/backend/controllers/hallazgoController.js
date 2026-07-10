import { cifrarCedula } from '../services/cryptoService.js';
import { enviarMatch } from '../services/matchService.js';

import {
    buscarBusqueda,
    eliminarBusqueda,
    guardarHallazgo
} from '../models/encontreModel.js';

import { encontreSchema } from '../schemas/encontreSchema.js';

export async function encontre(req, res) {
    console.log('Encontre request body:', req.body); // Log the request body for debuggings
    const resultado = encontreSchema.safeParse(req.body);
    console.log('Encontre validation result:', resultado); // Log the validation result for debugging
    if (!resultado.success) {
        return res.status(400).json({
            errores: resultado.error.flatten().fieldErrors
        });
    }

    const {
        numero_cedula,
        nombre_pila,
        email_contacto,
        lugar
    } = resultado.data;

    try {

        const hash = cifrarCedula(numero_cedula);
        const lugarFinal = lugar || 'No especificado';

        const busqueda = await buscarBusqueda(hash);

        if (busqueda) {

            await enviarMatch(
                email_contacto,
                nombre_pila,
                busqueda.email_dueno,
                lugarFinal
            );

            await eliminarBusqueda(busqueda.id);

            return res.json({
                match: true,
                mensaje: 'Se encontró al dueño'
            });
        }

        const id = await guardarHallazgo(
            hash,
            nombre_pila,
            email_contacto,
            lugarFinal
        );

        return res.json({
            match: false,
            mensaje: 'Hallazgo registrado',
            id
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            error: 'Error interno'
        });
    }
}