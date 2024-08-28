import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  innovice: null,
  error: null,
  success: null,
  loading: null,
};
const BilingSlice = createSlice({
  name: "Biling",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default BilingSlice.reducer;
