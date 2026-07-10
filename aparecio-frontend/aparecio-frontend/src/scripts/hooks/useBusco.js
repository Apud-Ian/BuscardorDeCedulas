import { useState } from 'react';
import { buscarCedula } from '../api/buscoApi.js';

export default function useBusco() {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const enviarBusqueda = async (formData) => {

        try {

            setIsSubmitting(true);

            const respuesta = await buscarCedula({

                numero_cedula: formData.cedula,

                mi_email: formData.email

            });

            return {

                ok: true,

                data: respuesta

            };

        } catch (error) {

            return {

                ok: false,

                error:
                    error.response?.data?.error ||
                    'Error al buscar la cédula.'

            };

        } finally {

            setIsSubmitting(false);

        }

    };

    return {

        enviarBusqueda,

        isSubmitting

    };

}