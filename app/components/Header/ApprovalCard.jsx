import Image from "next/image";

const ApprovalCard = () => {
  return (
    <div className="bg-green text-black rounded-3xl p-4 font-sans relative min-h-[200px] flex flex-col justify-between w-full grid-rows-2 col-span-3">
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
      <h1 className="text-5xl">89%</h1>
    </div>
  );
};

export default ApprovalCard;
