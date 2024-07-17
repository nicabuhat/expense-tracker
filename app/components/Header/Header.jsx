import ApprovalCard from "./ApprovalCard";
import ExpenseCard from "./ExpenseCard";
import ExpenseForm from "./ExpenseForm";
import QuoteCard from "./QuoteCard";

const Header = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-12 grid-rows-2 auto-rows-fr lg:gap-y-4 md:space-y-4 md:gap-x-4 max-sm:gap-y-4 py-4 px-6">
      <ExpenseCard />
      <ExpenseForm />
      <QuoteCard />
      <ApprovalCard />
    </div>
  );
};

export default Header;
