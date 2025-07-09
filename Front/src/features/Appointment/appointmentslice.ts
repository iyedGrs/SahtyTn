import { createSlice } from "@reduxjs/toolkit";

interface Appointment {
  _id: string;
  patientId: string;
  doctorId: string;
  date: string;
  time: string;
  status: string;
  // Add other appointment properties as needed
}

interface AppointmentState {
  list: Appointment[] | null;
  selectedPatient: boolean;
  error: string | null;
  success: boolean | null;
  loading: boolean | null;
}

const initialState: AppointmentState = {
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
});

export default AppointmentSlice.reducer;
