import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterItems:null,
    searchQuery:null,
    changeQuery:false,
    checkItems:null,
    jobTiltleFilter:""
  },
  reducers: {
    setFilterItems:(state,action)=>{
      state.filterItems=action.payload
    },
    setSearchQuery:(state,action)=>{
        state.searchQuery=action.payload
    },
    setChange:(state)=>{
        state.changeQuery=!state.changeQuery
    },
    setCheckItems:(state,action)=>{
      state.checkItems=action.payload
    },
    setJobTitleFilter:(state,action)=>{
      state.jobTiltleFilter=action.payload
    }
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice;
