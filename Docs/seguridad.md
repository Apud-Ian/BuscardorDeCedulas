# Seguridad del Sistema

La seguridad constituye uno de los pilares fundamentales de **ApareCIó**. Debido a que la aplicación procesa información personal relacionada con documentos de identidad, el sistema fue diseñado siguiendo el principio de **privacidad por defecto**, minimizando la exposición de datos y reduciendo los riesgos asociados a su almacenamiento.

El objetivo principal es permitir la búsqueda y recuperación de una cédula sin publicar información personal ni revelar datos sensibles durante el proceso de coincidencia.

---

# Protección de la Información

El sistema evita utilizar directamente la información sensible para realizar las comparaciones entre registros.

Para ello, los datos necesarios para identificar una coincidencia se procesan mediante un **hash criptográfico HMAC-SHA256**, utilizando una clave secreta almacenada en variables de entorno.

Este mecanismo permite:

* Comparar registros sin utilizar los datos originales.
* Evitar la exposición de información sensible durante el proceso de matching.
* Mantener un identificador consistente para realizar las búsquedas.

La clave utilizada para generar los hashes nunca forma parte del código fuente y se almacena en un archivo `.env`.

---

# Variables de Entorno

Toda la información sensible utilizada por la aplicación se configura mediante variables de entorno.

Entre ellas:

* Clave secreta utilizada para generar hashes.
* Configuración del servidor.
* Datos necesarios para el funcionamiento interno.

De esta forma se evita incorporar información confidencial dentro del repositorio del proyecto.

---

# Validación de Datos

Antes de procesar cualquier solicitud, el backend realiza diferentes validaciones sobre la información recibida.

Entre ellas:

* Verificación de campos obligatorios.
* Validación del formato de la cédula.
* Validación del correo electrónico.
* Sanitización de datos de entrada.
* Comprobación de tipos de datos.

Si alguna validación falla, la solicitud es rechazada antes de acceder a la base de datos.

---

# Protección de la Base de Datos

La aplicación utiliza **SQLite** junto con **consultas parametrizadas**, evitando construir consultas SQL mediante concatenación de cadenas.

Esto ayuda a prevenir ataques como:

* SQL Injection.
* Manipulación de consultas.
* Inserción de datos maliciosos.

Además, el acceso a la base de datos se encuentra centralizado en la capa **Model**, manteniendo separada la lógica de negocio del acceso a los datos.

---

# Sistema de Matching Seguro

El proceso de coincidencia se realiza íntegramente en el servidor.

El flujo general es el siguiente:

1. El usuario envía la información mediante el formulario.
2. El servidor valida los datos recibidos.
3. Se genera el hash correspondiente utilizando la clave secreta.
4. El sistema compara dicho hash con los registros almacenados.
5. Si existe una coincidencia, se devuelve una respuesta al cliente.

Durante este proceso nunca es necesario exponer públicamente la información utilizada para realizar la comparación.

---

# Eliminación Automática de Registros

Para cumplir con el principio de minimización de datos, el sistema incorpora una tarea programada mediante **node-cron**.

Esta tarea elimina automáticamente los registros que superan el período de conservación definido por la aplicación.

Este mecanismo permite:

* Reducir la cantidad de información almacenada.
* Disminuir el riesgo ante una eventual filtración.
* Evitar conservar datos innecesarios durante largos períodos.

---

# Manejo de Errores

La aplicación implementa un manejo centralizado de errores para evitar revelar información interna del servidor.

En caso de producirse una excepción:

* Se registra el error en el servidor.
* Se devuelve un mensaje controlado al cliente.
* No se exponen rutas internas, consultas SQL ni información sensible.

---

# Principios de Seguridad

La implementación de ApareCIó se basa en los siguientes principios:

* **Privacidad por defecto:** la información personal nunca se publica.
* **Minimización de datos:** únicamente se procesa la información necesaria.
* **Separación de responsabilidades:** la arquitectura MVC reduce el acceso innecesario a los datos.
* **Procesamiento seguro:** las comparaciones se realizan mediante hashes criptográficos.
* **Protección de la configuración:** los secretos del sistema permanecen fuera del código fuente.

---

# Mejoras Futuras

La arquitectura del proyecto permite incorporar nuevas medidas de seguridad sin modificar significativamente la estructura existente.

Entre las mejoras previstas se encuentran:

* Autenticación mediante JWT.
* Rate Limiting para limitar solicitudes por IP.
* Implementación de HTTPS en producción.
* Registro de auditoría (logs de eventos).
* Documentación OpenAPI con mecanismos de autenticación.
* Cifrado adicional para información de contacto almacenada.

---

# Resumen

La estrategia de seguridad de **ApareCIó** busca proteger la privacidad de los usuarios desde el diseño de la aplicación. La combinación de validaciones, procesamiento mediante **HMAC-SHA256**, consultas parametrizadas, variables de entorno y eliminación automática de registros permite reducir la exposición de datos y ofrecer un mecanismo seguro para la recuperación de cédulas de identidad.
