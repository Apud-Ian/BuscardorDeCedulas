Arquitectura del Sistema

El sistema se basa en una arquitectura MVC (Modelo - Vista - Controlador), lo que permite organizar el código de forma clara, escalable y mantenible a medida que el proyecto crece.

Estructura General

La aplicación se divide en tres componentes principales:

Modelo (Model)

Encargado de la gestión de datos.

Define la estructura de la información (cédulas encontradas, reportes, usuarios, etc.)
Maneja la interacción con la base de datos
Contiene la lógica relacionada con el almacenamiento y recuperación de datos
Vista (View)

Encargada de la presentación al usuario.

Muestra la información de forma clara y segura
Solo expone datos no sensibles
Permite la interacción del usuario (formularios, consultas, etc.)
Controlador (Controller)

Actúa como intermediario entre la Vista y el Modelo.

Recibe las solicitudes del usuario
Procesa la lógica de la aplicación
Valida los datos antes de enviarlos al modelo
Devuelve la respuesta adecuada a la vista
Flujo de Funcionamiento
El usuario interactúa con la interfaz (Vista)
La solicitud se envía al servidor
El Controlador recibe la petición
Se validan los datos de entrada
El Controlador consulta o modifica el Modelo
Se obtiene una respuesta
Se devuelve a la Vista
Validación de Datos

El sistema incluirá un mecanismo de validación dentro del Controlador para:

Verificar que los datos ingresados sean correctos
Evitar entradas maliciosas o inconsistentes
Garantizar la integridad de la información antes de almacenarla

Esto es especialmente importante en un sistema que maneja información sensible, incluso si esta no se expone públicamente.

¿Por qué usar MVC?

Se eligió este patrón por varias razones clave:

Separación de responsabilidades: cada componente tiene una función clara, lo que facilita el desarrollo y mantenimiento.
Escalabilidad: permite agregar nuevas funcionalidades sin afectar todo el sistema.
Reutilización de código: los modelos y controladores pueden reutilizarse en distintas partes del sistema.
Organización del proyecto: hace que el código sea más legible y estructurado.
Control de Peticiones

MVC permite un mejor control de las peticiones al servidor porque:

Todas las solicitudes pasan por los Controladores
Se puede centralizar la lógica de validación y seguridad
Facilita la implementación de reglas de negocio (como el sistema de matching)
Permite gestionar errores y respuestas de forma consistente
Escalabilidad Futura

La arquitectura está pensada para evolucionar, permitiendo:

Incorporar nuevas vistas (por ejemplo, aplicación móvil)
Ampliar la lógica del sistema de coincidencias
Mejorar la seguridad y validaciones
Integrar nuevos módulos sin romper la estructura existente