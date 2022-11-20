import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogIn: (state, { payload }) => {
      state.loggedIn = payload;
      return state;
    },
  },
});

export const { setLogIn } = authSlice.actions;

export default authSlice.reducer;
