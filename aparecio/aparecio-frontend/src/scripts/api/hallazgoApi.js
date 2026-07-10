import api from './api';

export async function registrarHallazgo(datos) {

    const { data } = await api.post('/encontre', datos);

    return data;

}