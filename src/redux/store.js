import { configureStore } from "@reduxjs/toolkit";
import dogsSlice from "./dogs/dogsSlice";

export const store = configureStore({
  reducer: {
    dogs: dogsSlice,
  },
});
