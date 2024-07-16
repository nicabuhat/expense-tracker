"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ExpenseTable = () => {
  const expenseState = useSelector((state) => state.expense);

  useEffect(() => {
    expenseState?.expenses.map((e) => console.log(e));
  }, [expenseState]);
  return (
    <div className="py-6 font-sans text-lg bg-white rounded-3xl">
      <div className="grid grid-cols-12 px-6 pb-4">
        <div className="col-span-2">Employee</div>
        <div className="col-span-2"> Amount</div>
        <div className="col-span-6">Description</div>
        <div>Date</div>
        <div>Status</div>
      </div>
      <hr className="border border-b-1 border-black" />
      {expenseState?.expenses?.map((e) => {
        return (
          <div key={e.id} className="grid grid-cols-12 px-6 pt-4">
            <div className="col-span-2 flex space-x-2">
              <div className="bg-gray aspect-square h-full grid place-content-center rounded-full font-serif">
                {e.name.charAt(0)}
              </div>
              <div>{e.name}</div>
            </div>
            <div className="col-span-2">{e.amount}</div>
            <div className="col-span-6">{e.description}</div>
            <div>{e.date}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ExpenseTable;
