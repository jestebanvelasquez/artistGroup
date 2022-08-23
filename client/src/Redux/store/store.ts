import artistSlice from '../reducer/artistSlice';
import usersSlice from '../reducer/usersSlice';
import categorySlice from '../reducer/categorySlice';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    artists: artistSlice,
    categories: categorySlice,
    dashboard: usersSlice
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
