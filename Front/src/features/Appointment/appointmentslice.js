import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: null,
  selectedPatient: false,
  error: null,
  success: null,
  loading: null,
};
const AppointmentSlice = createSlice({
  name: "Appointment",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default AppointmentSlice.reducer;
