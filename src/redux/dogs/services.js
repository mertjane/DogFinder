import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const pageLimit = 9;

export const getDogsAsync = createAsyncThunk("dogs/getDogs", async (page) => {
  const res = await axios(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/dogs?_page=${
      page + 1
    }&_limit=${pageLimit}`
  );
  return res.data;
});

