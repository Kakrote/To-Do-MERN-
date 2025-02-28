import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:'auth',
    initialState:{
        isAuthenticated:false,
        token:null,
        user:null,
    },
    reducers:{
        login:(state,actions)=>{
            state.isAuthenticated=true;
            state.token=actions.payload.token
            state.user=actions.payload.user||null
        },
        logout:(state)=>{  
            localStorage.removeItem('token')
            state.isAuthenticated=false;
            state.token=null
            state.user=null
        },
    },

})

export const {login,logout}=authSlice.actions;
export default authSlice.reducer;
