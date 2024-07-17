"use client";
import { useSelector } from "react-redux";
import Image from "next/image";

const ExpenseCard = () => {
  // load total expense from state
  const expenseState = useSelector((state) => state.expense);

  return (
    <div className="bg-purple text-white rounded-3xl p-4 font-sans relative min-h-[200px] flex flex-col justify-between w-full sm:col-span-1 md:col-span-1 lg:col-span-3 lg:order-1">
      <div className="bg-green text-black rounded-full w-fit px-2 py-1">
        Total Expenses
      </div>
      <Image
        src="/expense.svg"
        alt="Expense Illustrations"
        width="90"
        height="90"
        className="absolute bottom-0 right-0 h-5/6 w-auto"
      />
      <h1 className="xl:text-7xl max-lg:text-6xl">${expenseState.total}</h1>
    </div>
  );
};

export default ExpenseCard;
