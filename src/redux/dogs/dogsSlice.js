import { createSlice } from "@reduxjs/toolkit";
import { getDogsAsync } from "./services";

export const dogsSlice = createSlice({
  name: "dogs",
  initialState: {
    breeds: [],
    status: "idle",
    page: 0,
    hasNextPage: true,
    error: null,
  },
  reducers: {},
  extraReducers: {
    // get dogs
    [getDogsAsync.pending]: (state, action) => {
      state.status = "loading";
    },
    [getDogsAsync.fulfilled]: (state, action) => {
      state.breeds = [...state.breeds, ...action.payload];
      state.status = "succeeded";
      state.page += 1;

      if (action.payload.length < 9) {
        state.hasNextPage = false;
      }
    },
    [getDogsAsync.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
     // search dogs

    // [searchDogsAsync.pending]: (state, action) => {
    //   state.status = "loading";
    // },
    // [searchDogsAsync.fulfilled]: (state, action) => {
    //   state.status = "succeeded";
    //   state.searchValue = action.payload;
    //   state.breeds = [...state.searchValue]
    //   //[state.searchValue = state.breeds] = action.payload;
    //   //state.breeds = action.payload;
    // },
    // [searchDogsAsync.rejected]: (state, action) => {
    //   state.status = "failed";
    //   state.error = action.error.message;
    // },
  },
});

export default dogsSlice.reducer;
