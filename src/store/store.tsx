import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slice/userSlice';

export const store = configureStore({
  reducer: {
    app:userSlice,
    },
})
export default store;
