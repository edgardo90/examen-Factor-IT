import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer, //reducer de ejemplo
  },
  // Habilito Redux DevTools solamente si estoy en desarrollo
  devTools: process.env.NODE_ENV !== 'production'
});

// Tipos para TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;