import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export type RootState = {
  cart: ReturnType<typeof cartReducer>;
};

function loadState(): RootState | undefined {
  try {
    const serializedState = localStorage.getItem('cartState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState) as RootState;
  } catch (err) {
    console.error('Error loading state from local storage:', err);
    return undefined;
  }
}

function saveState(state: RootState) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cartState', serializedState);
  } catch (err) {
    console.error('Error saving state to local storage:', err);
  }
}

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
  });
});

export type AppDispatch = typeof store.dispatch;
