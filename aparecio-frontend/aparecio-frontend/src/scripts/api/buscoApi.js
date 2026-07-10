import api from './api.js';

export async function buscarCedula(datos) {

    const { data } = await api.post('/busco', datos);

    return data;

}