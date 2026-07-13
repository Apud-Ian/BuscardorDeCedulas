# API

Este documento describe la API REST utilizada por **ApareCIó** para la comunicación entre el frontend y el backend.

La API permite registrar cédulas encontradas, solicitar la búsqueda de una cédula perdida y gestionar el proceso de coincidencia (*matching*) de forma segura.

---

# Información general

**Formato de intercambio**

* JSON

**Arquitectura**

* REST

**Codificación**

* UTF-8

**URL base (desarrollo)**

```text
http://localhost:3000/api
```

---

# Autenticación

Actualmente la API es de acceso público para las operaciones del MVP.

Los datos enviados son validados antes de ser procesados y nunca se exponen públicamente.

---

# Endpoints

## Registrar una cédula encontrada

Permite registrar el hallazgo de una cédula de identidad.

### Endpoint

```http
POST /encontre
```

### Body

```json
{
  "numero_cedula": "12345678",
  "nombre_pila": "Juan",
  "email_contacto": "juan@email.com",
  "lugar": "Montevideo"
}
```

### Respuesta exitosa

```json
{
  "success": true,
  "message": "Registro realizado correctamente."
}
```

### Posibles respuestas

| Código | Descripción                |
| ------ | -------------------------- |
| 200    | Registro exitoso           |
| 400    | Datos inválidos            |
| 500    | Error interno del servidor |

---

## Buscar una cédula perdida

Permite que el propietario consulte si existe un registro asociado a su documento.

### Endpoint

```http
POST /busco
```

### Body

```json
{
  "numero_cedula": "12345678",
  "nombre_pila": "Juan"
}
```

### Respuesta cuando existe coincidencia

```json
{
  "success": true,
  "match": true,
  "message": "Se encontró una coincidencia."
}
```

### Respuesta cuando no existe coincidencia

```json
{
  "success": true,
  "match": false,
  "message": "No se encontraron coincidencias."
}
```

### Posibles respuestas

| Código | Descripción                       |
| ------ | --------------------------------- |
| 200    | Solicitud procesada correctamente |
| 400    | Datos inválidos                   |
| 500    | Error interno del servidor        |

---

# Validaciones

Antes de procesar una solicitud, la API verifica:

* Formato correcto de la cédula.
* Campos obligatorios completos.
* Formato válido del correo electrónico.
* Longitud máxima permitida para cada campo.
* Sanitización de los datos recibidos.

Si alguna validación falla, la solicitud es rechazada.

---

# Seguridad

La API incorpora diferentes mecanismos para proteger la información procesada.

Entre ellos:

* Comparación mediante hashes criptográficos.
* Validación de entradas.
* Uso de consultas parametrizadas para evitar SQL Injection.
* Manejo centralizado de errores.
* No exposición de información sensible en las respuestas.

La implementación detallada puede consultarse en el documento **Seguridad.md**.


# Respuestas de error

Todas las respuestas de error mantienen un formato uniforme.

Ejemplo:

```json
{
  "success": false,
  "message": "Descripción del error."
}
```

---

# Versionado

Actualmente la API corresponde a la primera versión del proyecto (**v1**).

A futuro se prevé incorporar:

* Autenticación mediante JWT.
* Versionado explícito (`/api/v1`).
* Documentación interactiva con Swagger/OpenAPI.
* Limitación de solicitudes (Rate Limiting).
* Registro y monitoreo de eventos.
