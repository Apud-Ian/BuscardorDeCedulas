Seguridad del Sistema

La seguridad es un pilar central del proyecto. Dado que se manejan datos personales sensibles (como nombre, número de cédula o información de contacto), el sistema está diseñado bajo un enfoque de protección máxima de la información, asegurando que ni siquiera los administradores puedan acceder a los datos en texto plano.

Protección de Datos Sensibles

Todos los datos personales ingresados por los usuarios son procesados mediante técnicas de hashing criptográfico antes de ser almacenados.

Los campos como:

Nombre
Número de cédula
Teléfono u otros datos de contacto

no se guardan en texto legible, sino como representaciones hash irreversibles.

Esto implica que:
No es posible reconstruir los datos originales a partir de la base de datos.
En caso de una filtración, la información no sería utilizable.

Además, se pueden aplicar técnicas complementarias como:

Salting: agregar valores aleatorios a los datos antes de hashearlos para evitar ataques por diccionario.
Uso de algoritmos criptográficos robustos y actuales.
Principio de “Cero Conocimiento”

El sistema sigue un enfoque cercano a zero-knowledge:

Los datos sensibles no son accesibles ni siquiera para los desarrolladores o administradores.
El sistema solo compara hashes para realizar coincidencias.
La lógica está diseñada para operar sin necesidad de revelar información personal.
Validación de Datos

Antes de que cualquier dato sea procesado o almacenado, pasa por un sistema de validación en el controlador:

Verificación de formato (ej: estructura válida de cédula)
Control de tipos de datos
Sanitización de inputs para evitar inyecciones
Rechazo de datos incompletos o inconsistentes

Esto reduce significativamente el riesgo de:

Datos corruptos
Ataques de inyección
Uso indebido del sistema
Eliminación Automática de Datos

Para minimizar riesgos, el sistema implementa una política de retención limitada:

Los registros se eliminan automáticamente después de un período definido (por ejemplo, 60 días).
Esto aplica tanto a:
Reportes de cédulas encontradas
Solicitudes de verificación

Beneficios:

Reduce la exposición de datos a largo plazo
Cumple con principios de minimización de datos
Disminuye el impacto de posibles incidentes de seguridad
Protección contra Usuarios Maliciosos

El sistema incluye medidas para mitigar el uso indebido:

Limitación de envíos (rate limiting)
Validación estricta de formularios
Moderación básica de contenido subido
Posible sistema de reputación o verificación de usuarios

Esto ayuda a prevenir:

Spam
Reportes falsos
Uso abusivo de la plataforma
Seguridad ante Ataques

Se contemplan medidas para proteger el sistema frente a amenazas comunes:

Protección contra inyección de código (SQL, scripts, etc.)
Manejo seguro de sesiones y autenticación
Uso de conexiones seguras (HTTPS)
Separación entre lógica, datos y presentación
Enfoque General

La seguridad no es un agregado, sino parte del diseño del sistema:

Se prioriza la privacidad desde el inicio
Se minimiza la exposición de datos
Se limita el acceso incluso a nivel interno