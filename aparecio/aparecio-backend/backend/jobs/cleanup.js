import cron from 'node-cron';

import db from '../config/database.js';

cron.schedule( '0 3 * * *',()=>{

db.run(
`
DELETE
FROM hallazgos

WHERE

fecha_registro
<=

datetime(
'now',
'-30 days'
)
`
);

db.run(
`
DELETE
FROM busquedas

WHERE

fecha_registro
<=

datetime(
'now',
'-30 days'
)
`
);

console.log('Limpieza ejecutada');

}
);