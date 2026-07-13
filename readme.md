# ApareCIó – Recuperación de Cédulas

<p align="center">
  <img src="/Docs/images/apareCIó_logo.jpeg" width="700px" alt="Logo ApareCIó">
</p>

## Descripción

**ApareCIó** es una plataforma web desarrollada para facilitar la recuperación de cédulas de identidad perdidas en Uruguay mediante un sistema seguro y privado.

El objetivo del proyecto es conectar a la persona que encontró una cédula con su propietario sin publicar información sensible, reduciendo el riesgo de exposición de datos personales y simplificando el proceso de devolución.

---

## El problema

Cuando una persona pierde su cédula de identidad, normalmente enfrenta inconvenientes como:

* Demoras en trámites importantes.
* Riesgo de uso indebido de información personal.
* Falta de un mecanismo simple para recuperar el documento.

Al mismo tiempo, quienes encuentran una cédula generalmente no disponen de un medio seguro para contactar a su dueño, recurriendo muchas veces a publicaciones en redes sociales donde se exponen datos personales.

---

## Nuestra solución

ApareCIó implementa un sistema de coincidencia privada (*Secure Matching*) que permite verificar internamente si una cédula encontrada pertenece a una persona que la está buscando.

El funcionamiento general es el siguiente:

1. Una persona registra el hallazgo de una cédula.
2. El propietario ingresa sus datos mediante un formulario privado.
3. El sistema compara la información utilizando identificadores protegidos.
4. Cuando existe una coincidencia válida, se habilita un medio de contacto entre ambas partes.

En ningún momento la información personal queda expuesta públicamente.

---
<p align="center">
  <img src="/Docs/images/image.png" width="700px" alt="Logo ApareCIó">
</p>
## Características principales

* Registro de cédulas encontradas.
* Consulta privada por parte del propietario.
* Sistema de coincidencia mediante hash criptográfico.
* Protección de la información personal.
* Eliminación automática de registros antiguos.
* Interfaz sencilla y responsiva.

---

## Tecnologías utilizadas

### Frontend

* React
* Vite
* Tailwind CSS
* JavaScript (ES Modules)

### Backend

* Node.js
* Express.js

### Base de datos

* SQLite

### Librerías principales

* bcrypt
* crypto
* cors
* dotenv
* node-cron
* nodemailer

---

## Principios del proyecto

El desarrollo de ApareCIó se basa en cinco principios fundamentales:

* **Privacidad por defecto:** los datos personales nunca son públicos.
* **Seguridad:** la información sensible se procesa mediante mecanismos criptográficos.
* **Minimización de datos:** únicamente se almacenan los datos necesarios para el funcionamiento del sistema.
* **Temporalidad:** los registros se eliminan automáticamente luego de un período determinado.
* **Consentimiento:** el usuario acepta explícitamente el tratamiento de sus datos antes de enviar cualquier información.

---

## Estructura de la documentación

La documentación técnica completa se encuentra dentro de la carpeta `Docs`.

Incluye:

* Arquitectura del sistema.
* Flujo completo de funcionamiento.
* Documentación de la API.
* Modelo de seguridad.
* Diagramas e imágenes del proyecto.

---

## Estado del proyecto

Actualmente el proyecto se encuentra funcional e incluye:

* Registro de cédulas encontradas.
* Solicitud privada de recuperación.
* Sistema de matching seguro.
* Backend con arquitectura MVC.
* Base de datos SQLite.
* Comunicación mediante API REST.
* Eliminación automática de registros mediante tareas programadas.

---

## Objetivo

ApareCIó busca ofrecer una alternativa moderna, segura y respetuosa con la privacidad para facilitar la recuperación de documentos de identidad perdidos, evitando la exposición innecesaria de información personal y simplificando el proceso tanto para quien encuentra una cédula como para su propietario.
