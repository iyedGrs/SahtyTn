import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  records: [],
  isLoading: false,
  error: null,
};
const recordSlice = createSlice({
  name: "record",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default recordSlice.reducer;
