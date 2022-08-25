import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

export interface Categories {
    id: string;
    name: string;
}

export interface ArtistState {
    data: Categories[];
    request: 'idle' | 'loading';
}

const initialState: ArtistState = {
    data: [],
    /* Estos estados son para validar el status de las peticiones al backend */
    request: 'idle'
};

export const artistSlice = createSlice({
    name: 'category',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        getAll: (state, action) => {
            state.data = action.payload;
        },
        isLoading: (state, action) => {
            action.payload ? state.request = 'loading' : state.request = 'idle';
        }
    }
});

export const { getAll, isLoading } = artistSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectArtist = (state: RootState) => state.artists;

export default artistSlice.reducer;
