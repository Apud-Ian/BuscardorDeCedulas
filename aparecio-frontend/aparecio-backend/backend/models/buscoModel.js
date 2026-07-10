import db from '../config/database.js';

export function buscarHallazgo(hash) {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT * FROM hallazgos WHERE hash_cedula = ?`,
            [hash],
            (err, row) => {
                if (err) return reject(err);
                resolve(row);
            }
        );
    });
}

export function eliminarHallazgo(id) {
    return new Promise((resolve, reject) => {
        db.run(
            `DELETE FROM hallazgos WHERE id = ?`,
            [id],
            (err) => {
                if (err) return reject(err);
                resolve();
            }
        );
    });
}

export function guardarBusqueda(hash, email) {
    return new Promise((resolve, reject) => {
        db.run(
            `
            INSERT INTO busquedas (
                hash_cedula,
                email_dueno
            )
            VALUES (?, ?)
            `,
            [hash, email],
            function (err) {
                if (err) return reject(err);
                resolve(this.lastID);
            }
        );
    });
}