import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterItems: null,
    searchQuery: null,
    changeQuery: false,
    checkItems: null,
    jobTiltleFilter: "",
    cityflag: null,
    smallMode: false,
    isClose: false,
    showFilters:false
  },
  reducers: {
    setFilterItems: (state, action) => {
      state.filterItems = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setChange: (state) => {
      state.changeQuery = !state.changeQuery;
    },
    setCheckItems: (state, action) => {
      state.checkItems = action.payload;
    },
    setJobTitleFilter: (state, action) => {
      state.jobTiltleFilter = action.payload;
    },
    setCityFlag: (state, action) => {
      state.cityflag = action.payload;
    },
    setSmallMode: (state, action) => {
      state.smallMode = action.payload;
    },
    setIsClose: (state, action) => {
      state.isClose = action.payload;
    },
    setShowFilters:(state,action)=>{
      state.showFilters=action.payload
    }
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice;
