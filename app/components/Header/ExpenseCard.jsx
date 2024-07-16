import Image from "next/image";

const ExpenseCard = () => {
  return (
    <div className="bg-purple text-white rounded-3xl p-4 font-sans relative min-h-[200px] flex flex-col justify-between w-full col-span-3">
      <div className="bg-green text-black rounded-full w-fit px-2 py-1">
        Total Expenses
      </div>
      <Image
        src="/expense.svg"
        alt="Expense Illustrations"
        width="100"
        height="100"
        className="absolute bottom-0 right-0 h-full w-auto"
      />
      <h1 className="text-5xl">$100,000</h1>
    </div>
  );
};

export default ExpenseCard;
