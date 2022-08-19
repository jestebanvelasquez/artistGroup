import { createSlice } from '@reduxjs/toolkit';

export interface LoggedState {
    status: boolean;
}

const initialState: LoggedState = {
    status: false
};

export const loggedSlice = createSlice({
    name: 'logged',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        isLogged: (state) => {
            state.status = true;
        },
        isLogout: (state) => {
            state.status = false;
        }
    }
});

export const { isLogged, isLogout } = loggedSlice.actions;

export default loggedSlice.reducer;
