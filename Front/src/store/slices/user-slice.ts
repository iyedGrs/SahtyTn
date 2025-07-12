import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UsrInfo {
  _id: string;
  username: string;
  email: string;
  role: string;
}

interface UserState {
  isLogged: boolean;
  userInfo: UsrInfo | null;
}

const initialState: UserState = {
  isLogged: false,
  userInfo: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, actions: PayloadAction<UsrInfo>) => {
      state.isLogged = true;
      state.userInfo = actions.payload;
    },
    clearUser: (state) => {
      state.isLogged = false;
      state.userInfo = null;
    },
  },
});

export const { clearUser, setUser } = userSlice.actions;
export default userSlice.reducer;
