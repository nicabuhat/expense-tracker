import Image from "next/image";

const QuoteCard = () => {
  return (
    <div className="col-span-3 h-full bg-orange row-span-2 rounded-3xl p-6 xl:order-3 flex-col justify-center sm:hidden md:hidden max-lg:hidden xl:flex">
      <div className="flex items-center space-x-4 mb-4">
        <Image
          src="/bubble.svg"
          alt="Expense Illustrations"
          width="40"
          height="40"
        />
        <h1 className="font-sans text-3xl">Words of Wisdom</h1>
      </div>
      <hr className="border border-b-1 border-black" />
      <blockquote className="text-lg italic my-2">
        There is only one boss. The customer. And he can fire everybody in the
        company from the chairman on down, simply by spending his money
        somewhere else.
      </blockquote>
      <span className="font-sans text-lg my-2 block">- Sam Walton</span>
      <hr className="border border-b-1 border-black" />
      <blockquote className="text-lg italic my-2">
        Net return is simply the gross return of your investment portfolio less
        the costs you incur. Keep your investment expenses low, for the tyranny
        of compounding costs can devastate the miracle of compounding returns.
      </blockquote>
      <span className="font-sans text-lg my-2 block">- John C. Bogle</span>
      <hr className="border border-b-1 border-black" />
    </div>
  );
};

export default QuoteCard;
