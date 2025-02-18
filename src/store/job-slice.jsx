import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    jobs: [],
    className:[],
    filterItems:null,
    classId: [],
    typeOption:null,
    changeDropDown: false,
    contractId:[],
    
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
    setContractId: (state, action) => {
      if (action.payload != null && !state.contractId.includes(action.payload)) {
        state.contractId.push(action.payload);
      }
    },
    setClassName:(state, action)=>{
      state.className.push(action.payload);
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
    setClearContractId: (state) => {
      state.contractId = [];
    },
    setChangeDropDown: (state) => {
      state.changeDropDown = !state.changeDropDown;
    },
    setMinusTypeId: (state, action) => {
      state.classId = state.classId.filter((item) => item !== action.payload);      
    },
    setMinusContractId: (state, action) => {
      state.contractId = state.contractId.filter((item) => item !== action.payload);      
    },
  },
});

export const jobActions = jobSlice.actions;

export default jobSlice;
