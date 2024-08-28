import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: null,
  error: null,
  success: null,
  loading: null,
};
const PrescriptionSlice = createSlice({
  name: "Prescription",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default PrescriptionSlice.reducer;
