import { z } from "zod";

export const buscoSchema = z.object({
    numero_cedula: z
        .string()
        .transform(ci => ci.replace(/[^\d]/g, ""))
        .pipe(
            z.string()
                .length(8, "La cédula debe tener 8 dígitos")
        ),

    mi_email: z
        .string()
        .email("Correo inválido")
});