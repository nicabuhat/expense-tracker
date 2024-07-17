"use client";
import { useSelector } from "react-redux";
import Image from "next/image";

const ApprovalCard = () => {
  const expenseState = useSelector((state) => state.expense);

  return (
    <div className="bg-green text-black rounded-3xl p-4 font-sans relative min-h-[200px] flex flex-col justify-between w-full grid-rows-2 sm:col-span-1 md:col-span-1 lg:col-span-3 sm:order-2 md:order-2 lg:order-last xl:order-4 max-sm:hidden">
      <div className="bg-purple text-white rounded-full w-fit px-2 py-1">
        Approved Rate
      </div>
      <Image
        src="/approval.svg"
        alt="Percentage Approval Illustrations"
        width="100"
        height="100"
        className="absolute bottom-0 right-0 h-full w-auto"
      />
      <h1 className="xl:text-7xl lg:text-4xl">{expenseState.approval}%</h1>
    </div>
  );
};

export default ApprovalCard;
