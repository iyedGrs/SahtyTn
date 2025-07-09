import { createSlice } from "@reduxjs/toolkit";

interface Notification {
  _id: string;
  userId: string;
  message: string;
  type: string;
  read: boolean;
  createdAt: string;
  // Add other notification properties as needed
}

interface NotificationState {
    list: Notification[] | null;
    error: string | null;
    success: boolean | null;
    loading: boolean | null;
}

const initialState: NotificationState = {
    list: null,
    error: null,
    success: null,
    loading: null,
};

const notificationSlice = createSlice({
    name: 'Notification',
    initialState,
    reducers :{},
    /*extraReducers:{
        [loginUser.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
            state.success = null;
        },
        [loginUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.userInfo = action.payload;
            state.userToken = action.payload.token;
            state.isAuth = true;
        },
        [loginUser.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
*/
});

export default notificationSlice.reducer;
