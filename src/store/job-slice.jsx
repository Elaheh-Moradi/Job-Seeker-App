import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    jobs: [],
    className:null,
    classId: null,
    filterItems:null,
    typeOption:null
  },
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
    setClassId: (state, action) => {
      state.classId = action.payload;
    },
    setClassName:(state, action)=>{
      state.className=action.payload;
    },
    setFilterItems:(state,action)=>{
      state.filterItems=action.payload
    },
    setTypeOption:(state,action)=>{
      state.typeOption=action.payload
    }
  },
});

export const jobActions = jobSlice.actions;

export default jobSlice;
