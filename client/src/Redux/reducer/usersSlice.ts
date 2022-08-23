import { createSlice } from '@reduxjs/toolkit';
//import { RootState } from '../store/store';

export type UserState = {
    users: string[]
}

const initialState: UserState = {
    users: []
};

export const UsersSlice = createSlice({
    name: 'users',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        getAll: (state, action) => {
            state.users = action.payload;
        }
    }
});

export const { getAll } = UsersSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
//export const selectArtist = (state: RootState) => state.shows;

export default UsersSlice.reducer;
