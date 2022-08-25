import axios from 'axios';
import Swal from "sweetalert2";
import { AppThunk } from "../store/store";
import { isLoading, loadAllEvents, loadEventsArtist } from "../reducer/artistSlice";
import { RUTA_APP } from "../..";

export const createEvent = async (arr: object) => {
    const { data } = await axios.post(`${RUTA_APP}event/create`, arr);
    return data;
}

export const getAllEvents = (): AppThunk => async (dispatch) => {
    dispatch(isLoading(true));
    const { data } = await axios.get(`${RUTA_APP}event?`);
    dispatch(loadAllEvents(data));
    dispatch(isLoading(false));
}

export const getEventsByIdArtist = (id: string): AppThunk => async (dispatch) => {
    try {
        dispatch(isLoading(true));
        const { data } = await axios.get(`${RUTA_APP}event?idArtist=${id}`);
        dispatch(loadEventsArtist(data));
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

export const getEventById = async (id: string) => {
    const { data } = await axios.get(`${RUTA_APP}event?id=${id}`);
    return data;
}

export const deshabilitarEvento = async (idEvento: string, status: boolean) => {
    const { data } = await axios.post(`${RUTA_APP}event/deshabilitar`, { idEvento, status });
    return data;
}