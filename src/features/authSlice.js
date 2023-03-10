import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: { auth: false },
  reducers: {
    login: (state) => {
      state.auth = !state.auth;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
