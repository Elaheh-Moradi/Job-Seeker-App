// features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
token:null,
enter:false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem('token');
    },
    setEnter:(state,action)=>{
      state.enter=action.payload
    }
  },
});

export const authActions = authSlice.actions;
export default authSlice;
