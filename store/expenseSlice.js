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
      const expense = action.payload;
      expense.status = ["Approved", "Denied", "Pending"][
        Math.floor(Math.random() * 3)
      ];
      state.expenses.push(expense);
    },
    sumTotal: (state) => {
      state.total = state?.expenses?.reduce(
        (total, expense) => total + (expense.amount || 0),
        0
      );
    },
    setApproval: (state) => {
      const count = state?.expenses?.filter(
        (expense) => expense.status === "Approved"
      ).length;

      const percentage = (count / state?.expenses?.length) * 100;

      state.approval = Number(percentage.toFixed(2));
    },
  },
});

export const { addExpense, sumTotal, setApproval } = expenseSlice.actions;
export default expenseSlice.reducer;
