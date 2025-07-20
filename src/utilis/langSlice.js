import { createSlice } from "@reduxjs/toolkit";
import reducer from "./userSlice";



const langSlice= createSlice({
    name:"lang",
    initialState:{
        lang:"en",
    },
    reducers:{
        setlang:(state,action)=>{
            state.lang=action.payload;
        }
    }
})


export const  {setlang} = langSlice.actions;
export default langSlice.reducer;