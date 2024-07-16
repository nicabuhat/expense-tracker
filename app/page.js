"use client";
import Header from "@/app/components/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { addExpense, decrement } from "@/store/expenseSlice";

export default function Home() {
  const count = useSelector((state) => state.expense.value);
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <main className="">
        <Header />
        <div>
          <h1>Counter: {count}</h1>
          <button onClick={() => dispatch(addExpense())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
      </main>
    </div>
  );
}
