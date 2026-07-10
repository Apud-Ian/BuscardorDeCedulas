import {
enviarCorreo
}
from './emailService.js';

export async function enviarMatch(

emailFinder,

nombre,

emailOwner,

lugar

){

await enviarCorreo({

to:
emailFinder,

subject:
'Alguien busca la cédula',

text:
`
Dueño:
${emailOwner}
`

});

await enviarCorreo({

to:
emailOwner,

subject:
'Tu cédula apareció',

text:
`
Lugar:
${lugar}

Contacto:
${emailFinder}
`

});

}