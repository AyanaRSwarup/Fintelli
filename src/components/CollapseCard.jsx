import React, { useState } from "react";

const CollapseCard = ({ debt }) => {
  const start = new Date(debt.created_at);
  const current = new Date();
  const monthsPassed =
    (current.getFullYear() - start.getFullYear()) * 12 +
    (current.getMonth() - start.getMonth());
  const totalMonths = debt.tenure * 12;
  const progress = Math.min(((Number(debt.principle)) - Number(debt.outstanding)) / Number(debt.principle) * 100, 100);
  const totalAmount = Number(debt.principle) + Number(debt.totalInterest);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`
        w-[70vw] sm:w-[55vw] my-4 px-6 py-4 
        flex flex-col gap-3 bg-white rounded-2xl 
         cursor-pointer
        overflow-hidden
        ${isOpen ? "md:h-100 h-160" : "h-32"} transition-all duration-500
      `}
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h1 className="sm:text-lg text-sm font-bold tracking-wide">
            {debt.debt_name}
          </h1>
          <div className="bg-red-300 rounded-2xl px-3 py-0.5 w-fit">
            <p className="text-xs font-bold text-red-600">
              {debt.annualinterest.toLocaleString()}% PA
            </p>
          </div>
        </div>
        <p className="sm:text-lg text-sm font-bold tracking-wider">
          ₹{(Number(debt.principle)).toLocaleString()}
        </p>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-primary h-2 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex justify-between">
        <p className="text-xs text-gray-400">{progress.toFixed(1)}% paid</p>
      </div>
      <div className="flex md:flex-row flex-col justify-center gap-10">
        <div className="w-full sm:w-80 h-50 lg:pl-5 bg-[#F9F9FF] lg:border-l-10 lg:border-red-400 rounded-2xl transition-opacity duration-300 text-center lg:text-left">
            <h1 className="md:text-sm text-xs pt-5 font-bold tracking-wide text-neutral">AT MINIMUM PAYMENT</h1>
            <p className="text-red-400 pt-10  md:text-4xl text-2xl font-extrabold">{(Number(debt.outstanding)/Number(debt.emi)).toFixed(0)} months</p>
            <p className="md:text-sm pt-10 text-xs font-medium tracking-wide text-neutral">₹{debt.emi.toLocaleString()} in EMI with ₹{Number(debt.totalInterest.toFixed(0)).toLocaleString()} in interest</p>
        </div>
        <div className="w-full sm:w-80 h-50 lg:pl-5 bg-[#F9F9FF] rounded-2xl transition-opacity duration-300 text-center lg:text-left">
            <h1 className="md:text-sm text-xs pt-5 font-bold tracking-wide text-neutral">TOTAL DEBT COST</h1>
            <p className="text-red-400 pt-10 md:text-4xl text-2xl font-extrabold">₹{totalAmount.toLocaleString()}</p>
            <p className="md:text-sm text-xs pt-10 font-medium tracking-wide text-neutral">₹{Number(debt.outstanding).toLocaleString()} outstanding </p>
        </div>
      </div>
    </div>
  );
};

export default CollapseCard;
