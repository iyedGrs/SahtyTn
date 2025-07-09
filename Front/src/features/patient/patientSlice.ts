import { createSlice } from "@reduxjs/toolkit";

interface Patient {
  _id: string;
  name: string;
  email: string;
  // Add other patient properties as needed
}

interface PatientState {
  list: Patient[] | null;
  selectedPatient: Patient | null;
  error: string | null;
  success: boolean | null;
  loading: boolean | null;
}

const initialState: PatientState = {
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
});

export default PatientSlice.reducer;
