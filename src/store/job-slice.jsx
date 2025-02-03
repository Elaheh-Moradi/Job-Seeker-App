import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    jobs: [],
    className:null,
    classId: null,
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
    }
  },
});

export const jobActions = jobSlice.actions;

export default jobSlice;
