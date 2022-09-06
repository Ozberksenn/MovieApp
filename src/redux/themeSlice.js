import { createSlice } from "@reduxjs/toolkit";
import dark from "../Constants/dark"
import light from "../Constants/light"

export const themeSlice = createSlice({
    name :"theme",
    initialState : {
        activeTheme : light,
        
    },
    reducers : {
        toggleTheme : (state) => {
                return {
                    activeTheme : state.activeTheme.type === "light" ? dark : light
                }
        },
    },
});

export const {toggleTheme} = themeSlice.actions;

export default themeSlice.reducer;