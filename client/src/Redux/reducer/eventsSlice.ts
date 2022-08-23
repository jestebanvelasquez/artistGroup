import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

export interface Evento {
    artistaId: string;
    description: string;
    duration: number;
    eventosCategorias: EventosCategoria[];
    id: string;
    imagesEvent: string[];
    isActive: boolean;
    lugar: string;
    name: string;
    price: number;
    tiempo: string;
}

export interface Categorias {
    id: string;
    name: string;
}

export interface EventosCategoria {
    categorias: Categorias;
    idCategoria: string;
    idEvento: string;
}

export interface EventState {
    events: Evento[],
    detail: Evento[],
    // request: 'idle' | 'loading';
}

const initialState: EventState = {
    events: [],
    detail: [],
    /* Estos estados son para validar el status de las peticiones al backend */
    // request: 'idle'
};


export const eventSlice = createSlice({
    name: 'artist',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        getAll: (state, action) => {
            state.events = action.payload;
            state.detail = [];
        },
        getByName: (state, action) => {
            state.events = action.payload;
            state.detail = [];
        },
        getDetail: (state, action) => {
            state.detail = action.payload;
        },
        // isLoading: (state, action) => {
        //     action.payload ? state.request = 'loading' : state.request = 'idle';
        // }
    },
});

export const { getAll, getByName, getDetail, } = eventSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectArtist = (state: RootState) => state.artists;

export default eventSlice.reducer;