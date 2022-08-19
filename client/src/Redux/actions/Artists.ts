import { AppThunk } from "../store/store";
import { getAll, getByName, getDetail, isLoading } from "../reducer/artistSlice";
import axios from 'axios';

export const getAllArtists = (): AppThunk => async (dispatch) => {
    dispatch(isLoading(true));
    const { data } = await axios.get(`http://localhost:4000/artist`);
    dispatch(getAll(data));
    dispatch(isLoading(false));
}

export const getArtistByName = (name: string): AppThunk => async (dispatch) => {
    try {
        const { data } = await axios.get(`http://localhost:4000/artist?name=${name}`);
        dispatch(getByName(data));
    } catch (error: any) {
        alert(error.response.data.message);
    }
}

export const getArtistDetail = (id: string): AppThunk => async (dispatch) => {
    dispatch(isLoading(true));
    const { data } = await axios.get(`http://localhost:4000/artist/${id}`);
    dispatch(getDetail([data]));
    dispatch(isLoading(false));
}