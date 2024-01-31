import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add other reducers as needed
  },
});

export const RootState = store.getState;
