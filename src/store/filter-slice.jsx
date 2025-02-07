import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "job",
  initialState: {
    filterItems:null,
    searchQuery:null,
    changeQuery:false
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
    }
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice;
