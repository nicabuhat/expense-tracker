import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    expenses: [],
    total: 0,
    approval: 0,
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
    sumTotal: (state) => {
      state.total = state.expenses.reduce(
        (total, expense) => total + (expense.amount || 0),
        0
      );
    },
  },
});

export const { addExpense, sumTotal } = expenseSlice.actions;
export default expenseSlice.reducer;
