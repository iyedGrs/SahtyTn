import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: null,
  selectedPatient: null,
  error: null,
  success: null,
  loading: null,
};
const PatientSlice = createSlice({
  name: "Patient",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default PatientSlice.reducer;
