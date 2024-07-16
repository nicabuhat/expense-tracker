const ExpenseForm = () => {
  return (
    <div className="col-span-6 row-span-2 font-sans text-black bg-white rounded-3xl p-6">
      <h1 className="text-3xl text-center mb-6">Expense Form</h1>
      <form className="text-lg max-w-md mx-auto">
        <div className="mb-4">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full px-3 py-2 border border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block">
            Amount
          </label>
          <div className="relative mb-4">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              $
            </span>
            <input
              type="number"
              id="amount"
              name="amount"
              min="0"
              step="0.01"
              className="w-full pl-7 pr-3 py-2 border border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
              placeholder="0.00"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block" htmlFor="message">
            Description
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Enter expense description"
            className="w-full px-3 py-2 border border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="w-full px-3 py-2 border border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple text-white font-bold py-2 px-4 rounded-md hover:bg-purple focus:outline-none focus:ring-2 focus:ring-purple focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
