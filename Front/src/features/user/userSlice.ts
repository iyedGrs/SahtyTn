import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authActions";

interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  date: string;
  role: string;
  id_doctor: string | null;
  __v: number;
}

interface UserState {
  userInfo: User | null;
  userToken: string | null;
  isLoading: boolean;
  error: string | null;
  success: boolean | null;
  isAuth: boolean;
}

const initialState: UserState = {
  userInfo: null,
  userToken: null,
  isLoading: false,
  error: null,
  success: null,
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.isLoading = false;
      state.userInfo = null;
      state.userToken = null;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.success = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action.payload.user;
        state.userToken = action.payload.token;
        state.isAuth = true;
        state.success = true;
        //local storage if we want to
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        state.success = false;
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action.payload.user;
        state.userToken = action.payload.token;
        state.isAuth = true;
        state.success = true;
        //local storage if we want to
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        state.success = false;
      });
  },
});

export default userSlice.reducer;
