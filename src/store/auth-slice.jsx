// features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { LOGIN_TAB_1 } from '../constants/names';

const initialState = {
//   token: localStorage.getItem('token'),
//   user: JSON.parse(localStorage.getItem('user')),
token:null,
tab:LOGIN_TAB_1
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
      //state.user = action.payload.user;
      localStorage.setItem('token', action.payload);
      //localStorage.setItem('user', JSON.stringify(action.payload.user));
    },
    logout: (state) => {
      state.token = null;
    //   state.user = null;
      localStorage.removeItem('token');
      //localStorage.removeItem('user');
    },
    setTab:(state,action)=>{
        state.tab=action.payload
    }
  },
});

export const authActions = authSlice.actions;
export default authSlice;
