import { AppThunk } from "../store/store";
import axios from 'axios';
import { RUTA_APP } from "../..";
import { isLoading, loadEventsArtist } from "../reducer/artistSlice";

export const getEventsByIdArtist = (id: string): AppThunk => async (dispatch) => {
    dispatch(isLoading(true));
    const { data } = await axios.get(`${RUTA_APP}event?idArtist=${id}`);
    dispatch(loadEventsArtist(data));
    dispatch(isLoading(false));
}