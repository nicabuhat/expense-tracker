"use client";

import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./expenseSlice";
import { useEffect } from "react";

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
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
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(localStorageMiddleware),
    devTools: process.env.NODE_ENV !== "production",
  });
};

export default makeStore;
