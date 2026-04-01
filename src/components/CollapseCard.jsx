import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const CollapseCard = ({ debt }) => {
  const progress = Math.min(
    ((Number(debt.principle) - Number(debt.outstanding)) /
      Number(debt.principle)) *
      100,
    100,
  );
  const totalAmount = Number(debt.principle) + Number(debt.totalInterest);
  const [isOpen, setIsOpen] = useState(false);
  const [deleting, isDeleting] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`
        w-[70vw] sm:w-[55vw] my-4 px-6 py-4 
        flex flex-col gap-3 bg-white rounded-2xl 
         cursor-pointer
        overflow-hidden
        ${isOpen ? "md:h-100 h-170" : "h-32"} transition-all duration-500
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
          ₹{Number(debt.principle).toLocaleString()}
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
          <h1 className="md:text-sm text-xs pt-5 font-bold tracking-wide text-neutral">
            AT MINIMUM PAYMENT
          </h1>
          <p className="text-red-400 pt-10  md:text-4xl text-2xl font-extrabold">
            {(Number(debt.outstanding) / Number(debt.emi)).toFixed(0)} months
          </p>
          <p className="md:text-sm pt-10 text-xs font-medium tracking-wide text-neutral">
            ₹{debt.emi.toLocaleString()} in EMI with ₹
            {Number(debt.totalInterest.toFixed(0)).toLocaleString()} in interest
          </p>
        </div>
        <div className="w-full sm:w-80 h-50 lg:pl-5 bg-[#F9F9FF] rounded-2xl transition-opacity duration-300 text-center lg:text-left">
          <h1 className="md:text-sm text-xs pt-5 font-bold tracking-wide text-neutral">
            TOTAL DEBT COST
          </h1>
          <p className="text-red-400 pt-10 md:text-4xl text-2xl font-extrabold">
            ₹{totalAmount.toLocaleString()}
          </p>
          <p className="md:text-sm text-xs pt-10 font-medium tracking-wide text-neutral">
            ₹{Number(debt.outstanding).toLocaleString()} outstanding{" "}
          </p>
        </div>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          isDeleting(true);
        }}
        className="w-25 my-2 ml-auto hover:bg-[#FF6467] bg-secondary text-white py-2 px-4 rounded-3xl transition-colors duration-300"
      >
        Delete
      </button>
      <div
        onClick={() => isDeleting(false)}
        className={`inset-0 w-screen h-screen transition-all duration-300 bg-black/60 ${deleting ? "fixed" : "hidden"}`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute w-100 h-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl"
        >
          <p className="text-md text-red-500 text-center font-bold">
            ARE YOU SURE YOU WANT TO DELETE?
          </p>
          <div className="flex gap-10 justify-center mt-10">
            <button
              onClick={() => {
                isDeleting(false);
              }}
              className="bg-secondary cursor-pointer text-white text-sm py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
            >
              GO BACK
            </button>
            <button
              onClick={async () => {
                try {
                  const response = await fetch(
                    `${import.meta.env.VITE_BACKEND_URL}/api/v1/deleteDebt?id=${debt.id}`,
                    {
                      method: "DELETE",
                      credentials: "include",
                      headers: {
                        "Content-Type": "application/json",
                      },
                    },
                  );

                  const data = await response.json();

                  if (data.success) {
                    isDeleting(false);
                    toast.success("Debt deleted successfully!");
                  } else {
                    toast.error("Failed to delete debt. Please try again.");
                  }
                } catch (error) {
                  console.error("Error deleting debt:", error);
                  toast.error("Failed to delete debt. Please try again.");
                }
              }}
              className="bg-secondary text-white text-sm py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollapseCard;
