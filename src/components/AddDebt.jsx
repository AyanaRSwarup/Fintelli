import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const AddDebt = ({ addDebtOpen, setAddDebtOpen }) => {
  const nav = useNavigate();
  const [form, setForm] = useState({
    debtName: "",
    debtType: "flexible",
    principle: "",
    outstanding: "",
    annualinterest: "",
    tenure: "",
    emi: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    const send = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/addDebt`,
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          },
        );
        const data = await response.json();
        // setLoading(false);
        if (data.success) {
          setAddDebtOpen(false);
          toast.success("Debt added successfully!");
        } else {
          nav("/error505");
        }
      } catch (error) {
        console.error("Error adding debt:", error);
        toast.error("Failed to add debt. Please try again.");
      }
    };
    send();
  };
  return (
    <div
      onClick={() => setAddDebtOpen(false)}
      className={`inset-0 w-screen h-screen bg-black/60 ${addDebtOpen ? "fixed" : "hidden"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute w-150 h-130 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl"
      >
        <h2 className="text-xl font-bold mb-6">Add New Debt</h2>
        <form className="flex flex-col items-center-safe gap-10">
          <div className="flex gap-10">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="debtName"
              >
                Debt Name
              </label>
              <input
                className="shadow bg-[#EFF3FF] appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="debtName"
                type="text"
                name="debtName"
                value={form.debtName}
                onChange={(e) => setForm({ ...form, debtName: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700  text-sm font-bold mb-2"
                htmlFor="debtType"
              >
                Debt Type
              </label>
              <select
                name="debtType"
                className="shadow border-0 bg-[#EFF3FF] w-55 p-2 rounded"
                value={form.debtType}
                onChange={(e) => setForm({ ...form, debtType: e.target.value })}
              >
                <option value="flexible">Flexible</option>
                <option value="fixed">Fixed</option>
              </select>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="mb-4">
              <label
                className="block text-gray-700  text-sm font-bold mb-2"
                htmlFor="debtName"
              >
                Principle Amount
              </label>
              <input
                className="shadow bg-[#EFF3FF] appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="principleAmount"
                type="number"
                name="principle"
                value={form.principle}
                onChange={(e) =>
                  setForm({ ...form, principle: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700  text-sm font-bold mb-2"
                htmlFor="outstandingAmount"
              >
                Outstanding Amount
              </label>
              <input
                className="shadow bg-[#EFF3FF] appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="outstandingAmount"
                type="number"
                name="outstanding"
                value={form.outstanding}
                onChange={(e) =>
                  setForm({ ...form, outstanding: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex gap-10">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Annual Interest Rate
              </label>
              <input
                className="shadow bg-[#EFF3FF] appearance-none rounded py-2 px-3 text-gray-700 leading-tight"
                type="number"
                name="annualInterest"
                value={form.annualinterest}
                onChange={(e) =>
                  setForm({ ...form, annualinterest: e.target.value })
                }
              />
            </div>

            {form.debtType === "flexible" ? (
              // Show EMI for Flexible
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  EMI
                </label>
                <input
                  className="shadow bg-[#EFF3FF] appearance-none rounded py-2 px-3 text-gray-700 leading-tight"
                  type="number"
                  name="emi"
                  value={form.emi}
                  onChange={(e) => setForm({ ...form, emi: e.target.value })}
                />
              </div>
            ) : (
              // Show Tenure for Fixed
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Tenure (in years)
                </label>
                <input
                  className="shadow bg-[#EFF3FF] appearance-none rounded py-2 px-3 text-gray-700 leading-tight"
                  type="number"
                  name="tenure"
                  value={form.tenure}
                  onChange={(e) => setForm({ ...form, tenure: e.target.value })}
                />
              </div>
            )}
          </div>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Debt
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDebt;
