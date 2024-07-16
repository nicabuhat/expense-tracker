import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "counter",
  initialState: {
    expenses: [],
    total: 0,
    approval: 0,
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action);
      return state;
    },
    sumTotal: (state) => {
      state.value -= 1;
    },
  },
});

export const { addExpense, sumTotal } = expenseSlice.actions;
export default expenseSlice.reducer;
