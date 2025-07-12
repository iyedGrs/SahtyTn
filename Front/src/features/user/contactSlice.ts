import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ContactInfo, submitContact } from "./contactActions";

interface ContactState {
  contactInfo: ContactInfo;
  isLoading: boolean;
  error: string | null;
  success: boolean | null;
}

const initialState: ContactState = {
  contactInfo: {
    email: "",
    subject: "",
    message: "",
  },
  isLoading: false,
  error: null,
  success: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitContact.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(submitContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contactInfo = action.payload;
        state.success = true;
      })
      .addCase(submitContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        state.success = false;
      });
  },
});

export default contactSlice.reducer;
