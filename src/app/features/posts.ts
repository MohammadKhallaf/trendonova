import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type insertProps = {
  content: string;
  user_id: string | number;
};

// Create New Task
export const fetchAllPosts = createAsyncThunk("posts/fetch", async () => {
  /**
   * some async code that returns the list of posts
   */
});

const initialState = [{}];
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPosts.fulfilled, (state, { payload }) => {
      return payload;
    });
  },
});
