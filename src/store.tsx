import { configureStore } from "@reduxjs/toolkit";
import { commentApi } from "./services/commentApi";

export const store = configureStore({
  reducer: {
    [commentApi.reducerPath]: commentApi.reducer,
  },
  middleware: (getDefaultMiddlerware) => getDefaultMiddlerware().concat(commentApi.middleware)
}) 