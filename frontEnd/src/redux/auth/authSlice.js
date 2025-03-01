import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:'auth',
    initialState:{
        isAuthenticated:!!localStorage.getItem('token'),
        token:null,
        user:null,
    },
    reducers:{
        login:(state,actions)=>{
            state.isAuthenticated=true
            state.token=actions.payload.token
            state.user=actions.payload.user||null
            localStorage.setItem('token', actions.payload.token); // ✅ localStorage me save karna
            localStorage.setItem('user', JSON.stringify(actions.payload.user));
        },
        logout:(state)=>{  
            localStorage.removeItem('token')
            state.isAuthenticated=false;
            state.token=null
            state.user=null
            localStorage.removeItem('token'); // ✅ token hata dena logout pe
      localStorage.removeItem('user');
        },
    },

})

export const {login,logout}=authSlice.actions;
export default authSlice.reducer;
