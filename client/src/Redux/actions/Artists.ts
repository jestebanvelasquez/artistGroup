import { AppThunk } from "../store/store";
import { getAll, getByName, getDetail, isLoading } from "../reducer/artistSlice";
import axios from 'axios';
import { RUTA_APP } from "../..";

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
    dispatch(isLoading(true));
    const { data } = await axios.get(`${RUTA_APP}artist`);
    dispatch(getAll(data));
    dispatch(isLoading(false));
}

export const getArtistByName = (name: string): AppThunk => async (dispatch) => {
    try {
        const { data } = await axios.get(`${RUTA_APP}artist?name=${name}`);
        dispatch(getByName(data));
    } catch (error: any) {
        alert(error.response.data.message);
    }
}

export const getArtistDetail = (id: string): AppThunk => async (dispatch) => {
    dispatch(isLoading(true));
    const { data } = await axios.get(`${RUTA_APP}artist/${id}`);
    dispatch(getDetail([data]));
    dispatch(isLoading(false));
}