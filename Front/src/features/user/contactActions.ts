import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../config/api";

export interface ContactInfo {
  email: string;
  subject: string;
  message: string;
}

const backendURL = `${API_BASE_URL}/message`;

export const submitContact = createAsyncThunk<
  ContactInfo,
  ContactInfo,
  { rejectValue: string }
>("contact/submitContact", async (contactData, { rejectWithValue }) => {
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
});
