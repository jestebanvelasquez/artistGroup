import artistSlice from '../reducer/artistSlice';
import users from '../reducer/usersSlice';
import loggedSlice from '../reducer/loggedSlice';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    artists: artistSlice,
    users: users,
    isLogged: loggedSlice
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
