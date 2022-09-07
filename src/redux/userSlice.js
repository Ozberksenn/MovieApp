import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const userSlice = createSlice({
    name :"user",
    initialState : {
        userInfo : {
    
        }
    },
    reducers : {
        // setUser : (state,action) => {
        //     return{
        //         userInfo: action.payload.userInfo,
        //     }
           
        // },
   
        addUser : async (state,action) => {
             await axios.post('http://10.0.2.2:3000/users',action.payload)
             //dataya inputtan girilen değerleri gönderiyoruz.
            return {
                userInfo:action.payload
            }
        },
    },
});


export const {setUser,addUser} = userSlice.actions;

export default userSlice.reducer;