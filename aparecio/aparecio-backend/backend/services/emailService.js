import nodemailer from 'nodemailer';

console.log('EMAIL:', process.env.EMAIL);
console.log('PASS:', process.env.PASS ? 'CARGADA' : 'VACIA');

const transporter = nodemailer.createTransport({
    service: 'gmail',

    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
});

export async function enviarCorreo(config) {
    return transporter.sendMail({
        from: `"Equipo ApareCIó" <${process.env.EMAIL}>`,
        ...config
    });
}