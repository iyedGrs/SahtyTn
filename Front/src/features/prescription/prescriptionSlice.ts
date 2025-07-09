import { createSlice } from "@reduxjs/toolkit";

interface Prescription {
  _id: string;
  patientId: string;
  doctorId: string;
  medications: string[];
  instructions: string;
  date: string;
  // Add other prescription properties as needed
}

interface PrescriptionState {
  list: Prescription[] | null;
  error: string | null;
  success: boolean | null;
  loading: boolean | null;
}

const initialState: PrescriptionState = {
  list: null,
  error: null,
  success: null,
  loading: null,
};

const PrescriptionSlice = createSlice({
  name: "Prescription",
  initialState,
  reducers: {},
});

export default PrescriptionSlice.reducer;
