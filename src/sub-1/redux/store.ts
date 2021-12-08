import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterSlice from  './features/subCounterSlice';

export const store = configureStore({
  reducer: {
    counterSub: counterSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
