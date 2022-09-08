import { createSlice } from "@reduxjs/toolkit";
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
            console.log("SignIn state içerisinde ki değerler: ",action.payload)
            state.userInfo = action.payload
  
        },
        addUser : (state,action) => {
              axios.post('http://10.0.2.2:3000/users',action.payload)
             //dataya inputtan girilen değerleri gönderiyoruz.
            return {
                userInfo:action.payload
            }
        },
        updateUser : (state,action) => {
            axios.put('http://10.0.2.2:3000/users',action.payload)
            return {
                userInfo:action.payload
            }
        }
    },
});


export const {setUser,addUser,updateUser} = userSlice.actions;

export default userSlice.reducer;