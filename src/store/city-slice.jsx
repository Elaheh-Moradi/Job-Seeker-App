import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({
  name: "city",
  initialState: {
    cities: [],
    cityName: [],
    cityID: [],
    option: null,
    changeCityDropDown: false,
  },
  reducers: {
    setCityId: (state, action) => {
      if (action.payload != null && !state.cityID.includes(action.payload)) {
        state.cityID.push(action.payload);
      }
    },
    setCityName: (state, action) => {
      state.cityName.push(action.payload) ;
    },
    setCityOption: (state, action) => {
      state.option = action.payload;
    },
    setClearCityId: (state) => {
      state.cityID = [];
    },
    setChangeDropDown: (state) => {
      state.changeCityDropDown = !state.changeCityDropDown;
    },
    setMinusCityId: (state, action) => {
      state.cityID = state.cityID.filter((item) => item !== action.payload);
      
    },
  },
});

export const cityActions = citySlice.actions;

export default citySlice;
