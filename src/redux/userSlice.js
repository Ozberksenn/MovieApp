import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'; // local storage import.
export const userSlice = createSlice({
    name :"user",
    initialState : {
        userInfo : {}
    },
    reducers : {
        setUser : (state,action) => {
             AsyncStorage.setItem('userKey',JSON.stringify(action.payload))
            // state.userInfo = await AsyncStorage.setItem('userKey',JSON.stringify(action.payload))
            console.log("action Payload : ",action.payload)
            state.userInfo = action.payload
  
        },
        addUser : (state,action) => {
              axios.post('http://10.0.2.2:3000/users',action.payload)
             //dataya inputtan girilen değerleri gönderiyoruz.
            return {
                userInfo:action.payload
            }
        },
    },
});


export const {setUser,addUser} = userSlice.actions;

export default userSlice.reducer;