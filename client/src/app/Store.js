import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feactures/auth/authSlice";
import cardReducer from "../feactures/card/cardSlice";
import speakReducer from "../feactures/speak/speakSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    card: cardReducer,
    speak: speakReducer,
  },
});
