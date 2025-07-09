import { createSlice } from "@reduxjs/toolkit";

interface MedicalRecord {
  _id: string;
  patientId: string;
  doctorId: string;
  diagnosis: string;
  treatment: string;
  date: string;
  // Add other medical record properties as needed
}

interface RecordState {
  records: MedicalRecord[];
  isLoading: boolean;
  error: string | null;
}

const initialState: RecordState = {
  records: [],
  isLoading: false,
  error: null,
};

const recordSlice = createSlice({
  name: "record",
  initialState,
  reducers: {},
});

export default recordSlice.reducer;
