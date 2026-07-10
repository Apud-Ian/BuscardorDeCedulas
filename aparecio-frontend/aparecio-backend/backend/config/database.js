import sqlite3 from 'sqlite3';

const db = new sqlite3.Database(
    './aparecio.sqlite',

    (err) => {
        if (err) {
            console.error(
                'Error DB:',
                err.message
            );

            return;
        }

        console.log(
            '✅ Base conectada'
        );

        inicializarDB();
    }
);

function inicializarDB() {

    db.serialize(() => {

        db.run(`
            CREATE TABLE IF NOT EXISTS hallazgos (

                id INTEGER
                PRIMARY KEY AUTOINCREMENT,

                hash_cedula TEXT
                NOT NULL,

                nombre_pila TEXT
                NOT NULL,

                email_contacto TEXT
                NOT NULL,

                lugar TEXT,

                fecha_registro DATETIME
                DEFAULT CURRENT_TIMESTAMP

            )
        `);

        db.run(`
            CREATE TABLE IF NOT EXISTS busquedas (

                id INTEGER
                PRIMARY KEY AUTOINCREMENT,

                hash_cedula TEXT
                NOT NULL,

                email_dueno TEXT
                NOT NULL,

                fecha_registro DATETIME
                DEFAULT CURRENT_TIMESTAMP

            )
        `);

        console.log(
            '✅ Tablas listas'
        );

    });

}

export default db;