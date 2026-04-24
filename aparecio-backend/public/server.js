const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const crypto = require('crypto');
const cors = require('cors');
const nodemailer = require('nodemailer');
const cron = require('node-cron'); 

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const CLAVE_SECRETA = 'ApareCIo_SuperSecreta_Uruguay_2026_xYzA';

// Función para limpiar la CI (quita puntos, guiones y espacios)
function limpiarCI(ci) {
    return ci.toString().replace(/[^0-9]/g, '');
}

function cifrarCedula(cedula) {
    const ciLimpia = limpiarCI(cedula);
    return crypto.createHmac('sha256', CLAVE_SECRETA).update(ciLimpia).digest('hex');
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'apareciotucedula@gmail.com', 
        pass: 'omtfwustlvewwgqv'
    }
});

// Base de Datos con dos tablas
const db = new sqlite3.Database('./aparecio.sqlite', (err) => {
    if (err) console.error('Error:', err.message);
    else {
        console.log('✅ Base de datos conectada.');
        // Tabla de hallazgos (alguien la tiene)
        db.run(`CREATE TABLE IF NOT EXISTS hallazgos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            hash_cedula TEXT NOT NULL,
            nombre_pila TEXT NOT NULL,
            email_contacto TEXT NOT NULL,
            lugar TEXT,
            fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);
        // Tabla de búsquedas (alguien la espera)
        db.run(`CREATE TABLE IF NOT EXISTS busquedas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            hash_cedula TEXT NOT NULL,
            email_dueno TEXT NOT NULL,
            fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);
    }
});

async function enviarCorreosMatch(emailFinder, nombreEnElPlastico, emailOwner, lugar) {
    
    // Correo para el que ENCONTRÓ la cédula (Saludo genérico)
    const mailEncontro = {
        from: '"Equipo ApareCIó" <apareciotucedula@gmail.com>',
        to: emailFinder,
        subject: '¡Alguien busca la cédula que encontraste! 🇺🇾',
        text: `¡Hola!\n\nTe escribimos porque la persona dueña de la cédula a nombre de "${nombreEnElPlastico}" que reportaste como encontrada, acaba de buscarla en nuestra plataforma.\n\nPor favor, comunícate con esta persona para coordinar la devolución escribiendo a: ${emailOwner}\n\n¡Muchas gracias por tu buena acción!`
    };

    // Correo para el DUEÑO de la cédula (Saludo personalizado)
    const mailPerdio = {
        from: '"Equipo ApareCIó" <apareciotucedula@gmail.com>',
        to: emailOwner,
        subject: '¡Tu cédula ApareCIó! 🎉',
        text: `¡Hola ${nombreEnElPlastico}!\n\nTenemos excelentes noticias: alguien reportó haber encontrado tu documento.\n\nLugar de hallazgo informado: ${lugar}\n\nPara recuperarla, puedes contactar directamente a la persona que la tiene escribiendo a este correo: ${emailFinder}\n\n¡Qué alivio!`
    };

    try {
        await transporter.sendMail(mailEncontro);
        await transporter.sendMail(mailPerdio);
        console.log(`✨ Match exitoso: Correos enviados a ${emailFinder} y ${emailOwner}`);
    } catch (e) {
        console.error("❌ Error enviando correos:", e);
    }
}
// RUTA: ENCONTRÉ (Ahora también busca si alguien la esperaba)
app.post('/api/encontre', async (req, res) => {
    const { numero_cedula, nombre_pila, email_contacto, lugar } = req.body; 
    const hash = cifrarCedula(numero_cedula);
    const lugarFinal = lugar || 'No especificado';

    // 1. Ver si alguien ya la estaba buscando
    db.get(`SELECT * FROM busquedas WHERE hash_cedula = ?`, [hash], async (err, searchRow) => {
        if (searchRow) {
            // ¡MATCH INMEDIATO!
            await enviarCorreosMatch(email_contacto, nombre_pila, searchRow.email_dueno, lugarFinal);
            db.run(`DELETE FROM busquedas WHERE id = ?`, [searchRow.id]);
            return res.json({ mensaje: '¡Increíble! Alguien ya la estaba buscando. Correos enviados.' });
        } else {
            // No hay nadie buscando, la guardamos
            db.run(`INSERT INTO hallazgos (hash_cedula, nombre_pila, email_contacto, lugar) VALUES (?, ?, ?, ?)`, 
                [hash, nombre_pila, email_contacto, lugarFinal]);
            res.json({ mensaje: 'Hallazgo registrado. Te avisaremos si el dueño la busca.' });
        }
    });
});

// RUTA: BUSCO (Ahora también guarda la búsqueda si no aparece)
app.post('/api/busco', (req, res) => {
    const { numero_cedula, mi_email } = req.body;
    const hash = cifrarCedula(numero_cedula);

    db.get(`SELECT * FROM hallazgos WHERE hash_cedula = ?`, [hash], async (err, foundRow) => {
        if (foundRow) {
            // ¡MATCH!
            await enviarCorreosMatch(foundRow.email_contacto, foundRow.nombre_pila, mi_email, foundRow.lugar);
            db.run(`DELETE FROM hallazgos WHERE id = ?`, [foundRow.id]);
            res.json({ match: true, mensaje: '¡ApareCIó! Revisa tu correo.', datos_contacto: foundRow.email_contacto });
        } else {
            // No está, guardamos la búsqueda para el futuro
            db.run(`INSERT INTO busquedas (hash_cedula, email_dueno) VALUES (?, ?)`, [hash, mi_email]);
            res.json({ match: false, mensaje: 'Aún no reportada. Guardamos tu búsqueda y te avisaremos apenas alguien la encuentre.' });
        }
    });
});

// Limpieza automática (30 días)
cron.schedule('0 3 * * *', () => {
    const sql = "DELETE FROM hallazgos WHERE fecha_registro <= datetime('now', '-30 days')";
    const sql2 = "DELETE FROM busquedas WHERE fecha_registro <= datetime('now', '-30 days')";
    db.run(sql);
    db.run(sql2);
    console.log('🧹 Limpieza de 30 días ejecutada.');
});

app.listen(PORT, () => console.log(`🚀 Motor Bilateral listo en http://localhost:${PORT}`));