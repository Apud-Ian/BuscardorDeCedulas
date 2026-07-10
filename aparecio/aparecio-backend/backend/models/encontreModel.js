import db from '../config/database.js';

export function buscarBusqueda(hash) {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT * FROM busquedas WHERE hash_cedula = ?`,
            [hash],
            (err, row) => {
                if (err) return reject(err);
                resolve(row);
            }
        );
    });
}

export function eliminarBusqueda(id) {
    return new Promise((resolve, reject) => {
        db.run(
            `DELETE FROM busquedas WHERE id = ?`,
            [id],
            (err) => {
                if (err) return reject(err);
                resolve();
            }
        );
    });
}

export function guardarHallazgo(
    hash,
    nombre,
    email,
    lugar
) {
    return new Promise((resolve, reject) => {
        db.run(
            `
            INSERT INTO hallazgos (
                hash_cedula,
                nombre_pila,
                email_contacto,
                lugar
            )
            VALUES (?, ?, ?, ?)
            `,
            [
                hash,
                nombre,
                email,
                lugar
            ],
            function (err) {
                if (err) return reject(err);

                resolve(this.lastID);
            }
        );
    });
}