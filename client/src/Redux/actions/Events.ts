import { AppThunk } from "../store/store";
import { getAll } from "../reducer/eventsSlice";
import axios from 'axios';

export const getAllEvents = (): AppThunk => async (dispatch) => {
    // dispatch(isLoading(true));
    const { data } = await axios.get(`http://localhost:4000/event`);
    dispatch(getAll(data));
    // dispatch(isLoading(false));
}