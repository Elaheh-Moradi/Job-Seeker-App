import { createSlice } from "@reduxjs/toolkit";
import useFetch from "../hooks/useFetch";

const citySlice = createSlice({
  name: "city",
  initialState: {
    cities: [],
    cityName:null,
    cityID:null,
    option:null
  },
  reducers: {
    setCityId:(state,action)=>{
      state.cityID=action.payload
    },
    setCityName:(state,action)=>{
      state.cityName=action.payload
    },
    setCityOption:(state,action)=>{
      state.option=action.payload
    }
    
  },
});

export const cityActions = citySlice.actions;

export default citySlice;
