import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name :"user",
    initialState : {
        userInfo : {}
    },
    reducers : {
        addUser : (state) => {
        },
    },
});

export const {addUser} = userSlice.actions;

export default userSlice.reducer;