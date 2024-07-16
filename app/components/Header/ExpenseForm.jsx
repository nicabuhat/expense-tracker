"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addExpense } from "@/store/expenseSlice";

const ExpenseForm = () => {
  const dispatch = useDispatch();
  const expenseState = useSelector((state) => state.expense);
  const [expense, setExpense] = useState({
    name: "",
    amount: 0,
    description: "",
    data: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addExpense({
        id: Math.random().toString(36).substr(2, 9),
        name: expense.name,
        description: expense.description,
        amount: parseFloat(expense.amount),
        date: expense.date,
      })
    );
    setExpense({ name: "", amount: 0, description: "", data: "" });
  };

  return (
    <div className="col-span-6 row-span-2 font-sans text-black bg-white rounded-3xl p-6">
      <h1 className="text-3xl text-center mb-6">Expense Form</h1>
      <form className="text-lg max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={expense.name || ""}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-3 py-2 border border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block">
            Amount
          </label>
          <div className="relative mb-4">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              $
            </span>
            <input
              type="number"
              id="amount"
              value={expense.amount || ""}
              name="amount"
              onChange={handleChange}
              min="0"
              step="0.01"
              className="w-full pl-7 pr-3 py-2 border border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
              placeholder="0.00"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={expense.description || ""}
            onChange={handleChange}
            rows="4"
            placeholder="Enter expense description"
            className="w-full px-3 py-2 border border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={expense.date || ""}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple text-white font-bold py-2 px-4 rounded-md hover:bg-purple focus:outline-none focus:ring-2 focus:ring-purple focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
