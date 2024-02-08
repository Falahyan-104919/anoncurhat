import { configureStore } from '@reduxjs/toolkit';
import authSlice from '@/features/authentication/hooks/authSlice';

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
