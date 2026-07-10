import { useState } from 'react';
import { registrarHallazgo } from '../api/hallazgoApi.js';

export default function useEncontre() {

    const [isSubmitting, setIsSubmitting] = useState(false);

    async function enviarHallazgo(formData) {

        try {

            setIsSubmitting(true);

            const respuesta = await registrarHallazgo({
                numero_cedula: formData.cedula,
                nombre_pila: formData.nombre,
                email_contacto: formData.email,
                lugar: formData.lugar
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
                    error.message ||
                    'Error al registrar el hallazgo'
            };

        } finally {

            setIsSubmitting(false);

        }

    }

    return {
        enviarHallazgo,
        isSubmitting
    };

}