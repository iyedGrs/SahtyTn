import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authActions";

const initialState = {
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
        state.error = action.payload;
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
        state.error = action.payload;
        state.success = false;
      });
  },
});

export default userSlice.reducer;
