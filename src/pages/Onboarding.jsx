import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const [income, setIncome] = useState("");
  const [fixedExpenses, setFixedExpenses] = useState("");
  const [wantsExpenses, setWantsExpenses] = useState("");
  const [miscExpenses, setMiscExpenses] = useState("");
  const [option, setOption] = useState(5);
  const [emergencyFund, setEmergencyFund] = useState("");
  const navigate = useNavigate();
  const options = [
    { value: 5, label: "Conservative" },
    { value: 8, label: "Moderate" },
    { value: 11, label: "Aggressive" },
  ];

  const onIncomeChange = (e) => {
    const value = e.target.value;
    console.log(value);
    if (value === "" || (Number(value) >= 10000 && Number(value) <= 1000000)) {
      setIncome(value);
    }
  };
  const onFixedExpensesChange = (e) => {
    const value = e.target.value;
    setFixedExpenses(value);
  };
  const onWantsExpensesChange = (e) => {
    const value = e.target.value;
    setWantsExpenses(value);
  };
  const onMiscExpensesChange = (e) => {
    const value = e.target.value;
    setMiscExpenses(value);
  };
  const onEmergencyFundChange = (e) => {
    const value = e.target.value;
    setEmergencyFund(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      monthlyIncome: income,
      monthlyNeeds: fixedExpenses,
      monthlyWants: wantsExpenses,
      miscNeeds: miscExpenses,
      emergencyFund: emergencyFund,
      riskProfile: option,
    };
    console.log(data);
    try{
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/auth/onboard`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      },
    );
    const result = await response.json();
    if (result.success) {
      navigate("/dashboard");
    } else {
      navigate("/error");
    }
} catch (error) {
  console.error("Error during onboarding:", error);
  navigate("/error");
}
  };

  return (
    <>
      <div className="w-screen h-15 fixed top-0 bg-white flex flex-col justify-between shadow-[0px_12px_32px_rgba(18,28,42,0.06)] z-50">
        <div className="flex items-center justify-content pt-4 pl-6 md:pl-10">
          <p className="text-center text-2xl font-semibold text-neutral-700 tracking-tight">
            Fintelli
          </p>
        </div>
        <div className="w-screen h-1 rounded-2xl bg-primary" />
      </div>

      <div className="overflow-x-hidden bg-[#F9F9FF]">
        <div className="w-full pt-10">
          <h1 className="font-bold text-2xl md:text-3xl text-neutral-800 text-center pt-20 pb-2 tracking-tighter px-4">
            Build Your Blueprint
          </h1>
          <p className="font-normal text-neutral-800 text-center px-4">
            Tell us about your current financial landscape.
          </p>
        </div>

        <div className="w-screen pt-10 flex items-center justify-center">
          <div className="w-180 min-h-240 rounded-2xl bg-white shadow-2xl">
            <div className="pt-10 px-6 md:px-10">
              <p className="text-[0.875rem] pb-2 text-neutral-800 font-semibold tracking-wider">
                MONTHLY TAKE-HOME INCOME
              </p>
              <input
                type="number"
                min="10000"
                placeholder="₹ 0.00"
                onChange={onIncomeChange}
                className="w-full h-16 md:h-20 mt-2 font-semibold tracking-wider text-neutral-700 text-[1.25rem] md:text-[1.75rem] rounded-lg bg-[#EFF3FF] border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white focus:border-transparent transition-all duration-300"
              />
            </div>

            <div className="pt-10 px-6 md:px-10">
              <p className="text-[1.1rem] md:text-[1.3rem] pb-6 md:pb-10 text-text font-semibold tracking-tight">
                Monthly Expenses
              </p>
              <div className="flex flex-col sm:flex-row justify-around items-start sm:items-center gap-4 sm:gap-0">
                <div className="w-full sm:w-auto">
                  <p className="text-[0.6875rem] text-neutral-800 tracking-wide">
                    FIXED
                  </p>
                  <input
                    onChange={onFixedExpensesChange}
                    type="number"
                    min="0"
                    placeholder="₹"
                    className="w-full sm:w-50 h-12 mt-2 font-semibold tracking-wider text-neutral-700 text-[1rem] rounded-lg bg-[#EFF3FF] border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div className="w-full sm:w-auto">
                  <p className="text-[0.6875rem] text-neutral-800 tracking-wide">
                    WANTS
                  </p>
                  <input
                    onChange={onWantsExpensesChange}
                    type="number"
                    min="0"
                    placeholder="₹"
                    className="w-full sm:w-50 h-12 mt-2 font-semibold tracking-wider text-neutral-700 text-[1rem] rounded-lg bg-[#EFF3FF] border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div className="w-full sm:w-auto">
                  <p className="text-[0.6875rem] text-neutral-800 tracking-wide">
                    MISC
                  </p>
                  <input
                    onChange={onMiscExpensesChange}
                    type="number"
                    min="0"
                    placeholder="₹"
                    className="w-full sm:w-50 h-12 mt-2 font-semibold tracking-wider text-neutral-700 text-[1rem] rounded-lg bg-[#EFF3FF] border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            <div className="pt-10 px-6 md:px-10">
              <p className="text-[1.1rem] md:text-[1.3rem] pb-6 md:pb-8 text-text font-semibold tracking-tight">
                What's your risk tolerance?
              </p>
              <div className="flex flex-col sm:flex-row justify-around items-center gap-4 sm:gap-0">
                {options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setOption(opt.value)}
                    className="w-full sm:w-40 md:w-50 h-25 mt-2 font-semibold tracking-wider text-neutral-700 text-[0.875rem] rounded-lg bg-[#EFF3FF] border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-[#E5F9F6] focus:border-transparent transition-all duration-300 mb-4"
                  >
                    <p className="text-[0.6875rem] text-neutral-800 tracking-wide">
                      {opt.label}
                    </p>
                    <h1 className="text-xl font-bold">{opt.value}%</h1>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-10 px-6 md:px-10">
              <p className="text-[1.1rem] md:text-[1.3rem] pb-6 md:pb-8 text-text font-semibold tracking-tight">
                What's your current emergency fund?
              </p>
              <input
                type="number"
                onChange={onEmergencyFundChange}
                min="0"
                placeholder="₹"
                className="w-full h-16 md:h-20 mt-2 font-semibold tracking-wider text-neutral-700 text-[1.25rem] md:text-[1.75rem] rounded-lg bg-[#EFF3FF] border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white focus:border-transparent transition-all duration-300"
              />
            </div>

            <div className="pt-10 px-6 md:px-10 pb-10 flex justify-center items-center">
              <button
                onClick={handleSubmit}
                className="w-full sm:w-60 h-14 md:h-15 mt-2 font-semibold tracking-tight text-white text-[1.25rem] md:text-[1.75rem] rounded-lg bg-primary border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 hover:cursor-pointer focus:ring-primary focus:bg-white focus:text-primary focus:border-transparent transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        <p className="font-sans text-sm text-neutral text-center pt-10 pb-20 px-4">
          Your information is secured and never shared with third parties.
        </p>
      </div>
    </>
  );
};

export default Onboarding;
