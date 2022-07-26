import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feactures/auth/authSlice";
import cardReducer from "../feactures/card/cardSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    card: cardReducer,
  },
});
