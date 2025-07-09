import { createSlice } from "@reduxjs/toolkit";

interface Invoice {
  _id: string;
  patientId: string;
  amount: number;
  date: string;
  status: string;
  // Add other invoice properties as needed
}

interface BillingState {
  innovice: Invoice | null;
  error: string | null;
  success: boolean | null;
  loading: boolean | null;
}

const initialState: BillingState = {
  innovice: null,
  error: null,
  success: null,
  loading: null,
};

const BilingSlice = createSlice({
  name: "Biling",
  initialState,
  reducers: {},
});

export default BilingSlice.reducer;
