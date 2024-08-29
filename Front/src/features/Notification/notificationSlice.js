import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: null,
  error: null,
  success: null,
  loading: null,
};
const notificationSlice = createSlice({
  name: "Notification",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default notificationSlice.reducer;
