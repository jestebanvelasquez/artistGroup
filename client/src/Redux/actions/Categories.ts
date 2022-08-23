import axios from 'axios';
import { getAll, isLoading } from '../reducer/categorySlice';
import { AppThunk } from '../store/store';
import { RUTA_APP } from '../..';

export const getAllCategories = (): AppThunk => async (dispatch) => {
    dispatch(isLoading(true));
    const { data } = await axios.get(`${RUTA_APP}categories`);
    dispatch(getAll(data));
    dispatch(isLoading(false));
}

export const asignarCategoriaEvento = async (arr: object) => {
    const { data } = await axios.post(`${RUTA_APP}categories/assignEvent`, arr);
    return data;
}

export const createCategory = async (arr: any) => {
    const { data } = await axios.post(`${RUTA_APP}categories/create`, arr);
    return data;
}