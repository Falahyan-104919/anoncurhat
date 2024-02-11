import { configureStore } from '@reduxjs/toolkit';
import authSlice from '@/features/authentication/hooks/authSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  preloadedState: { auth: JSON.parse(localStorage.getItem('authState')) || {} },
});

export default store;
