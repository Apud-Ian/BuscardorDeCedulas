import { z } from "zod";

export const encontreSchema = z.object({
    numero_cedula: z
        .string()
        .transform(ci => ci.replace(/[^\d]/g, ""))
        .pipe(
            z.string().length(8, "La cédula debe tener 8 dígitos")
        ),

    nombre_pila: z
        .string()
        .trim()
        .min(2, "Nombre demasiado corto")
        .max(40, "Nombre demasiado largo"),

    email_contacto: z
        .string()
        .email("Correo electrónico inválido"),

    lugar: z
        .string()
        .trim()
        .max(100)
        .optional()
});