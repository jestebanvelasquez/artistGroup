import { AppThunk } from "../store/store";
import { getAll, getByIdCategory, getByName, getDetail, isLoading } from "../reducer/artistSlice";
import axios from 'axios';
import { RUTA_APP } from "../..";
import Swal from "sweetalert2";

export interface ArtistCreateProps {
    name: string;
    img: string;
    descripcion?: string | null;
    [key: string]: any;
}

export const createArtist = async (arr: ArtistCreateProps) => {
    const { data } = await axios.post(`${RUTA_APP}artist/create`, arr)
    return data;
}

export const getAllArtists = (): AppThunk => async (dispatch) => {
    try {
        dispatch(isLoading(true));
        const { data } = await axios.get(`${RUTA_APP}artist`);
        dispatch(getAll(data));
        dispatch(isLoading(false));
    } catch (error: any) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: error.response.data.message,
            showConfirmButton: true,
            timer: 5000
        });
    }
}

export const getArtistByIdCategory = (id: string): AppThunk => async (dispatch) => {
    try {
        dispatch(isLoading(true));
        const { data } = await axios.get(`${RUTA_APP}artist?category=${id}`);
        const artists = data.reduce((previusValue: any, currentValue: any) => {
            previusValue.length > 0 ? previusValue.map((prev: any) => (prev.id !== currentValue.eventos.artista.id) ? previusValue.push(currentValue.eventos.artista) : '') : previusValue.push(currentValue.eventos.artista);
            return previusValue;
        }, []);
        dispatch(getByIdCategory(artists));
        dispatch(isLoading(false));
    } catch (error: any) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: error.response.data.message,
            showConfirmButton: true,
            timer: 5000
        });
    }
}

export const getArtistByName = (name: string): AppThunk => async (dispatch) => {
    try {
        const { data } = await axios.get(`${RUTA_APP}artist?name=${name}`);
        dispatch(getByName(data));
    } catch (error: any) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: error.response.data.message,
            showConfirmButton: true,
            timer: 5000
        });
    }
}

export const getIdArtistByToken = async () => {
    const { data } = await axios.get(`${RUTA_APP}artist?token=${localStorage.getItem('auth-token')}`);
    return data;
}

export const getArtistDetail = (id: string): AppThunk => async (dispatch) => {
    dispatch(isLoading(true));
    const { data } = await axios.get(`${RUTA_APP}artist/${id}`);
    dispatch(getDetail([data]));
    dispatch(isLoading(false));
}