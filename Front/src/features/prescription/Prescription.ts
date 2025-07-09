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
    name: 'Prescription',
    initialState,
    reducers :{},
    /*extraReducers:{
        [loginUser.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
            state.success = null;
        },
        [loginUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.userInfo = action.payload;
            state.userToken = action.payload.token;
            state.isAuth = true;
        },
        [loginUser.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
*/
});

export default PrescriptionSlice.reducer;
