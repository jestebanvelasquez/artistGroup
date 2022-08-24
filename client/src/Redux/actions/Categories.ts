import axios from 'axios';
import { getAll, isLoading } from '../reducer/categorySlice';
import { AppThunk } from '../store/store';
import { RUTA_APP } from '../..';
import Swal from 'sweetalert2';

export const getAllCategories = (): AppThunk => async (dispatch) => {
    try {
        dispatch(isLoading(true));
        const { data } = await axios.get(`${RUTA_APP}categories`);
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

export const asignarCategoriaEvento = async (arr: object) => {
    const { data } = await axios.post(`${RUTA_APP}categories/assignEvent`, arr);
    return data;
}

export const createCategory = async (arr: any) => {
    const { data } = await axios.post(`${RUTA_APP}categories/create`, arr);
    return data;
}