"use client";

import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./expenseSlice";

// save store to local storage after each dispatch
const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  // check if running in browser
  if (typeof window !== "undefined") {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
  }
  return result;
};

const makeStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      expense: expenseReducer,
    },
    preloadedState,
    // concat middleware with localStorageMiddleware
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(localStorageMiddleware),
    devTools: process.env.NODE_ENV !== "production",
  });
};

export default makeStore;
