import React from "react";

interface result {
  result: {
    amount:number,
    total:number
  }
}

const Result = ({result}: result) => {
  return (
    <div className="p-6 bg-[var(--primary)] rounded-2xl grid gap-6 md:flex md:flex-col md:justify-between">
      <div className="grid gap-6">
        <div className="grid grid-cols-2 items-center mt-5">
          <div>
            <p className="text-white font-bold">Tip Amount</p>
            <span className="text-[var(--light-gray)] text-sm">/ person</span>
          </div>
          <strong className="text-[var(--secondary)] font-bold text-4xl justify-self-end md:text-5xl">
            ${result.amount}
            {!result.amount && ".00"}
          </strong>
        </div>
        <div className="grid grid-cols-2 items-center">
          <div>
            <p className="text-white font-bold">Total</p>
            <span className="text-[var(--light-gray)] text-sm">/ person</span>
          </div>
          <strong className="text-[var(--secondary)] font-bold text-4xl justify-self-end md:text-5xl">
            ${result.total}
            {!result.total && ".00"}
          </strong>
        </div>
      </div>
      <button className="bg-[var(--secondary)] rounded-md text-[var(--primary)] text-xl font-bold py-3 hover:bg-[var(--light-secondary)] md:w-full">RESET</button>
    </div>
  );
};

export default Result;
