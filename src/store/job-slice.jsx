import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    jobs: [],
    className:null,
    filterItems:null,
    classId: [],
    typeOption:null,
    changeDropDown: false,
  },
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
    setClassId: (state, action) => {
      if (action.payload != null && !state.classId.includes(action.payload)) {
        state.classId.push(action.payload);
      }
    },
    setClassName:(state, action)=>{
      state.className=action.payload;
    },
    setFilterItems:(state,action)=>{
      state.filterItems=action.payload
    },
    setTypeOption:(state,action)=>{
      state.typeOption=action.payload
    },
    setClearTypeId: (state) => {
      state.classId = [];
    },
    setChangeDropDown: (state) => {
      state.changeDropDown = !state.changeDropDown;
    },
  },
});

export const jobActions = jobSlice.actions;

export default jobSlice;
