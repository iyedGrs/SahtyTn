import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "";
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const data = await axios.post(
        `${backendURL}/api/user/login`,
        { email, password },
        config
      );
      //local storage if we want to
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);
