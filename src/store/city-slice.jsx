import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({
  name: "city",
  initialState: {
    cities: [],
    cityName: null,
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
      state.cityName = action.payload;
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
  },
});

export const cityActions = citySlice.actions;

export default citySlice;
