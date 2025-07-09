import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "http://localhost:5000/api";

interface ContactInfo {
  email: string;
  subject: string;
  message: string;
}

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

export const submitContact = createAsyncThunk<
  ContactInfo,
  ContactInfo,
  { rejectValue: string }
>(
  "contact/submitContact",
  async (contactData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${backendURL}/contact`, contactData);
      const { data } = response;
      return data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

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
