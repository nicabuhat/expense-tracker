"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ExpenseTable = () => {
  // load expenses from state
  const expenseState = useSelector((state) => state.expense);

  const [search, setSearch] = useState("");
  // set initial filtered value to original expense state
  const [filteredList, setFilteredList] = useState(expenseState?.expenses);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    // filter via description
    if (search.length)
      setFilteredList(
        expenseState?.expenses.filter((expense) =>
          expense.description.toLowerCase().includes(search.toLowerCase())
        )
      );
    else setFilteredList(expenseState?.expenses);
  }, [search, expenseState, setFilteredList]);

  return (
    <>
      {expenseState?.expenses.length > 0 && (
        <div className="py-6 font-sans lg:text-lg sm:text-base bg-white rounded-3xl">
          <div className="w-full max-md:px-6 lg:block max-md:hidden">
            <input
              type="text"
              placeholder="Search description"
              value={search}
              onChange={handleChange}
              className="border border-gray rounded-full xl:ml-6 mb-6 py-1 px-2 xl:w-[420px] max-md:w-full focus:outline-none focus:ring-2 focus:ring-purple"
            />
          </div>
          <div className="grid lg:grid-cols-12  max-md:grid-cols-3 px-6 pb-4">
            <div className="lg:col-span-2 max-md:col-span-1">Employee</div>
            <div className="lg:col-span-2 max-md:col-span-1"> Amount</div>
            <div className="xl:col-span-6 lg:col-span-4 lg:block max-md:hidden">
              Description
            </div>
            <div className="xl:col-span-1 lg:col-span-2">Date</div>
            <div className="lg:block max-md:hidden xl:col-span-1 lg:col-span-2">
              Status
            </div>
          </div>
          <hr className="border border-b-1 border-black" />
          {filteredList?.map((e) => {
            return (
              <div
                key={e.id}
                className="grid lg:grid-cols-12 max-md:grid-cols-3 px-6 pt-4"
              >
                <div className="lg:col-span-2 max-md:col-span-1 flex space-x-2">
                  <div className="bg-gray aspect-square h-12 lg:grid max-md:hidden place-content-center rounded-full font-serif ">
                    {e.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="capitalize">{e.name}</div>
                </div>
                <div className="lg:col-span-2 max-md:col-span-1">
                  {e.amount}
                </div>
                <div className="xl:col-span-6 lg:col-span-4 lg:block max-md:hidden">
                  {e.description}
                </div>
                <div className="xl:col-span-1 lg:col-span-2">{e.date}</div>
                <div
                  className={`${
                    e.status === "Approved"
                      ? "bg-green"
                      : e.status === "Pending"
                      ? "bg-orange"
                      : "bg-purple text-white"
                  } px-2 py-1 rounded-full grid place-content-center lg:block xl:col-span-1 lg:col-span-2 max-md:hidden `}
                >
                  {e.status}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ExpenseTable;
