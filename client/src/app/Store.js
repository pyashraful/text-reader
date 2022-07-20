import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feactures/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
