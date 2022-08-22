import axios from 'axios';
import { RUTA_APP } from '../..';

export interface PersonCreateProps {
    name: string;
    lastname: string;
    city: string;
    country: string;
}

export const createPerson = async (arr: PersonCreateProps) => {
    const { data } = await axios.post(`${RUTA_APP}people/create`, arr);
    return data;
}