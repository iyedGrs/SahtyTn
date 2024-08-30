import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/userSlice";
import contactReducer from "../features/user/contactSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    contact: contactReducer,
  },
});

export default store;
