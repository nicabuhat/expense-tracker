import Header from "@/app/components/Header/Header";
import ExpenseTable from "./components/Expense/ExpenseTable";

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <main className="p-6">
        <ExpenseTable />
      </main>
    </div>
  );
}
