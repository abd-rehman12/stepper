import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "../Features/Slice/signUpSlice";

export const store = configureStore({
  reducer: signUpSlice,
});
