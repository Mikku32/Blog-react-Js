import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  blogList: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const getBlogs = createAsyncThunk("blog/getBlogs", async () => {
  const response = await axios.get("http://localhost:3000/Blog");

  return response.data;
});

const blogslice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogList = action.payload;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      });
  },
});

export default blogslice.reducer;
