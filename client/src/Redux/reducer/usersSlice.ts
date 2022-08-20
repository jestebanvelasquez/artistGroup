import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//import { RootState } from '../store/store';
import { isSomeAsyncActionsFulfilled, isSomeAsyncActionsPending, isSomeAsyncActionsRejected } from '../helpers';
import { RootState } from '../store/store';
//import { getAllShows } from '../thunks/show';
//import { incrementAsync, otherIncrementAsync } from '../thunks/counter';

export interface UserProps {
    email: string;
    id: string;
    isAvaliable: boolean;
    persona: Persona;
    rolesUsuarios: RolesUsuario[];
    token: string;
}

export interface Persona {
    city: string;
    country: string;
    id: string;
    lastname: string;
    name: string;
}

export interface RolesUsuario {
    roles: Roles;
}

export interface Roles {
    id: string;
    nombre: string;
}


export type UserState = {
    data: UserProps[]
}

const initialState: UserState = {
    data: []
};

export const UsersSlice = createSlice({
    name: 'users',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        getAll: (state, action) => {
            return {
                ...state,
                data: action.payload
            }
        }
    }
});

export const { getAll } = UsersSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
//export const selectArtist = (state: RootState) => state.shows;

export default UsersSlice.reducer;
