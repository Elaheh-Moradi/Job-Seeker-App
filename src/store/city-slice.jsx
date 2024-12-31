import { createSlice } from "@reduxjs/toolkit";
import useFetch from "../hooks/useFetch";

const citySlice = createSlice({
  name: "city",
  initialState: {
    cities: [],
  },
  reducers: {},
});

// export const fetchCities = () => {
//   return (dispatch) => {
//   const { data, error, loading } = useFetch("http://localhost:3000/stateOptions");
//   };
// };

export const cityActions = citySlice.actions;

export default citySlice;
