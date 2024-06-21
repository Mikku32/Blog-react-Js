import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  blogList: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

//get
export const getBlogs = createAsyncThunk("blog/getBlogs", async () => {
  const response = await axios.get("http://localhost:3000/Blog");
  return response.data;
});

//post
export const postBlog = createAsyncThunk("blog/postBlog", async (data) => {
  const response = await axios.post("http://localhost:3000/Blog", data);
  return response.data;
});

//delete
export const deleteBlog = createAsyncThunk("blog/deleteBlog", async (id) => {
  const response = await axios.delete(`http://localhost:3000/Blog/${id}`);
  return response.data;
});

//update
export const updateBlog = createAsyncThunk("blog/updateBlog", async (data) => {
  const response = await axios.put(
    `http://localhost:3000/Blog/${data.id}`,
    data
  );
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
        state.blogList = action.payload.slice().reverse();
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })

      .addCase(postBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postBlog.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })

      .addCase(deleteBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBlog.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })

      .addCase(updateBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateBlog.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      });
  },
});

export default blogslice.reducer;
