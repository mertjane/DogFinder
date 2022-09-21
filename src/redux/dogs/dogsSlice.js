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
  },
});

export default dogsSlice.reducer;
