/* eslint-disable no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../config/api";

const backendURL = `${API_BASE_URL}/user`;

interface LoginCredentials {
  email: string;
  password: string;
}

interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  date: string;
  role: string;
  id_doctor: string | null;
  __v: number;
}

interface AuthResponse {
  user: User;
  token: string;
}

interface RegisterUserData {
  username: string;
  email: string;
  password: string;
  role?: string;
}

export const loginUser = createAsyncThunk<
  AuthResponse,
  LoginCredentials,
  { rejectValue: string }
>("auth/loginUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    const response = await axios.post(
      `${backendURL}/auth/login`,
      { email, password },
      config
    );
    const { data } = response;
    // local storage if we want to
    return data;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    }
    return rejectWithValue(error.message);
  }
});

export const registerUser = createAsyncThunk<
  AuthResponse,
  RegisterUserData,
  { rejectValue: string }
>("auth/registerUser", async (user, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    const response = await axios.post(
      `${backendURL}/auth/register`,
      user,
      config
    );
    const { data } = response;
    return data;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    }
    return rejectWithValue(error.message);
  }
});
