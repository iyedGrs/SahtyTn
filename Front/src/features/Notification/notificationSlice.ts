import { createSlice } from "@reduxjs/toolkit";

interface Notification {
  _id: string;
  userId: string;
  message: string;
  type: string;
  read: boolean;
  createdAt: string;
  // Add other notification properties as needed
}

interface NotificationState {
  list: Notification[] | null;
  error: string | null;
  success: boolean | null;
  loading: boolean | null;
}

const initialState: NotificationState = {
  list: null,
  error: null,
  success: null,
  loading: null,
};

const notificationSlice = createSlice({
  name: "Notification",
  initialState,
  reducers: {},
});

export default notificationSlice.reducer;
