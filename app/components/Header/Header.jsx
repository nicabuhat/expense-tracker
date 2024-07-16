import ApprovalCard from "./ApprovalCard";
import ExpenseCard from "./ExpenseCard";
import ExpenseForm from "./ExpenseForm";
import QuoteCard from "./QuoteCard";

const Header = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-2 auto-rows-fr gap-4 py-4 px-6">
      <ExpenseCard />
      <ExpenseForm />
      <QuoteCard />
      <ApprovalCard />
    </div>
  );
};

export default Header;
