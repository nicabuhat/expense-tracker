import { configureStore } from "@reduxjs/toolkit";

import expenseReducer from "./expenseSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      expense: expenseReducer,
    },
    devTools: true,
  });

export const store = makeStore();
