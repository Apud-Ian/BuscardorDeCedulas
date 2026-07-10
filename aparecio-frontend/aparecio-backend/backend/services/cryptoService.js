import crypto from 'crypto';

function limpiarCI(ci){

return ci
.toString()
.replace(/\D/g,'');

}

export function cifrarCedula(ci){

return crypto

.createHmac(
'sha256',
process.env.CLAVE_SECRETA
)

.update(
limpiarCI(ci)
)

.digest('hex');

}