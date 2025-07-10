import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/userSlice";
import contactReducer from "../features/user/contactSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    contact: contactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
