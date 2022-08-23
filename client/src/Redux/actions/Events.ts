import { AppThunk } from "../store/store";
import { getAll } from "../reducer/eventsSlice";
import axios from 'axios';
import { RUTA_APP } from "../..";

export const getAllEvents = (): AppThunk => async (dispatch) => {
    // dispatch(isLoading(true));
    const { data } = await axios.get(`${RUTA_APP}event`);
    dispatch(getAll(data));
    // dispatch(isLoading(false));
}