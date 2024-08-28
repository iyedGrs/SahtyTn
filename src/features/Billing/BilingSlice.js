import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    innovice: null,
    error: null,
    success: null,
    loading: null,
};
const BilingSlice = createSlice({
    name: 'Biling',
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
})

export default BilingSlice.reducer;
