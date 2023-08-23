import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import gotReducer from '../redux/slice';

export const appStore = configureStore({
  reducer: {
    gotChars: gotReducer,
  },
});

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
