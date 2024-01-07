import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import projectSlice from "./projectSlice";


const store = configureStore({
  reducer: {
    auth: authSlice,
    project:projectSlice
  },
});

export default store;