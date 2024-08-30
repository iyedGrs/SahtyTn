import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "http://localhost:5000/api";
const initialState = {
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
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const submitContact = createAsyncThunk(
  "contact/submitContact",
  async (contactData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${backendURL}/contact`, contactData);
      const { data } = response;
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

export default contactSlice.reducer;
