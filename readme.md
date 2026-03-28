Recuperación de Cédulas 

<img src="images/apareCIó_logo.jpeg" width="700px">
Problema

En Uruguay, perder la cédula de identidad es una situación frecuente que genera múltiples inconvenientes: trámites detenidos, riesgo de uso indebido de datos personales y dificultades para que el documento regrese a su dueño.

Por otro lado, las personas que encuentran una cédula suelen no tener un canal claro, seguro y efectivo para devolverla. Las soluciones actuales (redes sociales, grupos, etc.) implican exponer datos sensibles públicamente, lo cual representa un riesgo de privacidad.

Solución Propuesta

Este proyecto plantea una plataforma web que facilita el reencuentro entre quien pierde una cédula y quien la encuentra, sin exponer información personal de forma pública.

El enfoque central es un sistema de coincidencia privada (matching seguro):

La persona que encuentra una cédula registra el hallazgo con datos no sensibles.
La persona que la perdió ingresa sus datos de forma privada.
El sistema compara la información internamente.
Si hay coincidencia, se habilita un canal de contacto entre ambas partes.

De esta forma, se resuelve el problema sin comprometer la privacidad de los usuarios.

Principios de Diseño
Privacidad por defecto: nunca se exponen datos personales públicamente.
Minimización de datos: solo se almacena lo estrictamente necesario.
Seguridad: uso de encriptación y procesamiento seguro.
Temporalidad: eliminación automática de registros antiguos.
Consentimiento: el usuario acepta explícitamente el uso de sus datos.

Tecnologías a Utilizar

Frontend
h
Por definir...

Backend / Base de Datos

Por definir...

Extras técnicos

Script para difuminar automáticamente imágenes subidas
Sistema de comparación de datos mediante hash
API REST para comunicación cliente-servidor (futuro)




MVP (Producto Mínimo Viable)

El MVP incluirá:

Registro de cédulas encontradas con:
Ubicación aproximada
Fecha
Imagen (difuminada automáticamente)
ID del caso
Formulario para que el dueño:
Ingrese datos de su cédula (privado)
Solicite verificación
Sistema básico de matching:
Comparación de datos clave
Notificación en caso de coincidencia
Visualización pública:
Lista de cédulas encontradas (sin datos personales)
Estado del caso (pendiente / resuelto)
