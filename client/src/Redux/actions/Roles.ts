import axios from 'axios';
import { RUTA_APP } from '../..';

export interface RoleCreateProps {
    id: string;
    nombre: string;
}

type Roles = 'ADMINISTRADOR' | 'USUARIO' | 'ARTISTA';

export const getAllRoles = async () => {
    const { data } = await axios.get(`${RUTA_APP}roles`);
    return data;
}

export const getRoleByName = async (name: Roles) => {
    const { data } = await axios.get(`${RUTA_APP}roles?name=${name}`);
    return data;
}

export const asignarRol = async (arr: object) => {
    const { data } = await axios.post(`${RUTA_APP}roles/assign`, arr);
    return data;
}

export const createRole = async (arr: RoleCreateProps) => {
    const { data } = await axios.post(`${RUTA_APP}people/create`, arr);
    return data;
}