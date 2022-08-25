import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

export interface AllArtistProps {
    id: string;
    img: string;
    name: string;
}

export interface ArtistDetailProps {
    descripcion: string;
    id: string;
    img: string;
    name: string;
    usuario: Usuario;
}

export interface EventsArtist {
    artistaId: string;
    description: string;
    duration: number;
    id: string;
    imagesEvent: string[];
    isActive: boolean;
    lugar: string;
    name: string;
    price: number;
    tiempo: string;
    eventosCategorias: EventosCategoria[];
}

export interface ContractEvent {
    artista: Artista;
    description: string;
    duration: number;
    id: string;
    imagesEvent: string[];
    isActive: boolean;
    lugar: string;
    name: string;
    price: number;
    tiempo: string;
}

export interface Artista {
    descripcion: string;
    id: string;
    img: string;
    name: string;
    usuario: Usuario;
}

export interface Usuario {
    email: string;
    id: string;
    isAvaliable: boolean;
    persona: Persona;
}

export interface Persona {
    city: string;
    country: string;
    id: string;
    lastname: string;
    name: string;
}

export interface EventosCategoria {
    categorias: Categorias;
}

export interface Categorias {
    id: string;
    name: string;
}

export interface ArtistState {
    data: AllArtistProps[];
    events: EventsArtist[]
    detail: ArtistDetailProps[],
    request: 'idle' | 'loading';
}

const initialState: ArtistState = {
    data: [],
    events: [],
    detail: [],
    /* Estos estados son para validar el status de las peticiones al backend */
    request: 'idle'
};

export const artistSlice = createSlice({
    name: 'artist',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        getAll: (state, action: PayloadAction<AllArtistProps[]>) => {
            state.data = action.payload;
            state.detail = [];
            state.events = [];
        },
        getByName: (state, action: PayloadAction<AllArtistProps[]>) => {
            state.data = action.payload;
            state.detail = [];
            state.events = [];
        },
        getByIdCategory: (state, action: PayloadAction<AllArtistProps[]>) => {
            state.data = action.payload;
            state.detail = [];
            state.events = [];
        },
        getDetail: (state, action: PayloadAction<ArtistDetailProps[]>) => {
            state.detail = action.payload;
        },
        loadAllEvents: (state, action) => {
            state.events = action.payload;
        },
        loadEventsArtist: (state, action: PayloadAction<EventsArtist[]>) => {
            state.events = action.payload;
        },
        isLoading: (state, action) => {
            action.payload ? state.request = 'loading' : state.request = 'idle';
        }
    }
});

export const { getAll, getByName, getByIdCategory, getDetail, loadAllEvents, loadEventsArtist, isLoading } = artistSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectArtist = (state: RootState) => state.artists;

export default artistSlice.reducer;
