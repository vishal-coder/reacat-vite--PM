import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "user",
  initialState: {
    userToken: localStorage.getItem("token") || null, // for storing the JWT
    isLoggedIn: false
  },
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },

    setUserToken: (state, action) => {
      state.userToken = action.payload;
    },

    LOG_OUT: (state) => {
      state.user = undefined;
    },
  },
});

export const {setIsLoggedIn, setUserToken, LOG_OUT } =
  authSlice.actions;

export default authSlice.reducer;