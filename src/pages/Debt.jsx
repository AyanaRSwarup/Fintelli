import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import data from "../test/debtPage.json";
import CollapseCard from "../components/CollapseCard";
import { Handshake, CirclePlus } from "lucide-react";
import AddDebt from "../components/AddDebt.jsx";

const Debt = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [debts, setDebts] = useState(null);
  const [addDebtOpen, setAddDebtOpen] = useState(false); 

  const USE_MOCK = true; // flip to false when backend is ready

  useEffect(() => {
    const fetchData = async () => {
      try {
        const actualData = USE_MOCK
          ? data
          : await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/getDebts`, {
              method: "GET",
              credentials: "include",
            }).then((res) => res.json());
        setDebts(actualData);
        setLoading(false);
      } catch (error) {
        navigate("/error505");
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <Loading />;
  } else {
    if (debts.data.newDebts.length === 0) {
      return (
        <div className="p-10">
          <h1 className="text-2xl font-bold mb-4">Your Debts</h1>
          <p className="text-gray-600">You have no debts! Great job!</p>
        </div>
      );
    } else {
      return (
        <div className="bg-[#F9F9FF] min-h-screen">
          <div className="flex justify-between pt-15 pb-4 px-10 items-center">
            <h1 className="sm:text-2xl text-xl font-bold tracking-tighter text-black">
              Your Active Accounts
            </h1>
            <p className="sm:text-lg text-md text-[#006B58] font-bold">
              {debts.data.newDebts.length} Active Loans
            </p>
          </div>
          <div className="flex flex-col justify-center items-center py-5">
            {debts.data.newDebts.map((debt) => (
              <CollapseCard key={debt.name} debt={debt} />
            ))}
          </div>
          <div className="w-[70vw] sm:w-[55vw] mx-auto mb-10 px-6 py-4 flex flex-col gap-3 bg-white rounded-2xl cursor-pointer h-22 border-2 border-dashed border-gray-400">
          <div onClick={()=>{setAddDebtOpen(true)}} className="flex justify-center items-center gap-4 tracking-wide font-bold text-lg text-primary py-3">
            <CirclePlus />
            <p>ADD ANOTHER DEBT</p>
          </div>
          {addDebtOpen && <AddDebt />}
      </div>
          <div className="bg-white noselect lg:w-230 lg:h-100 w-100 mx-auto rounded-4xl py-10">
            <div className="flex gap-5  text-primary items-center pl-10 pb-5">
            <Handshake />
            <h2 className="text-xl text-black/90 font-bold text-left">
              Payoff Strategy Comparison
            </h2>
            <p className="text-sm hidden lg:block text-neutral"> (Switch to Optimized Plan for more detailed view)</p>
            </div>

            {/* Flex wrapper for the boxes */}
            <div className="flex flex-col items-center lg:pt-10 justify-center gap-5 lg:flex-row">
              <div className="md:w-90 group md:h-60 h-50 w-70 border-2 pl-5 pt-2 focus:bg-[#F2F7F6] hover:border-l-16 border-gray-500 hover:border-primary transition-all duration-300 bg-white rounded-4xl">
                <p className="text-xl text-neutral pt-5 font-bold">Avalanche</p>
                <div className="flex gap-3 pt-7 pb-7 items-end">
                <p className="lg:text-3xl text-xl font-extrabold text-primary transition-all duration-300">₹{debts.data.avalanche.total_interest.toLocaleString()}</p>
                <p className="text-lg font-bold text-neutral tracking-tight">IN INTEREST</p>
                </div>
                <div className="flex gap-3 items-end">
                <p className="lg:text-3xl text-xl font-extrabold text-primary transition-all duration-300">{debts.data.avalanche.total_months}</p>
                <p className="text-lg font-bold text-neutral tracking-tight">MONTHS TO PAYOFF</p>
                </div>
              </div>
              <p className="text-neutral text-lg font-bold lg:text-2xl">OR</p>
              <div className="md:w-90 md:h-60 h-50 w-70 border-2 pl-5 pt-2 hover:border-l-16 border-gray-500 hover:border-primary transition-all duration-300 bg-white rounded-4xl">
                <p className="text-xl text-neutral pt-5 font-bold">Snowball</p>
                <div className="flex gap-3 pt-7 pb-7 items-end">
                <p className="lg:text-3xl text-xl font-extrabold text-primary transition-all duration-300">₹{debts.data.snowball.total_interest.toLocaleString()}</p>
                <p className="text-lg font-bold text-neutral tracking-tight">IN INTEREST</p>
                </div>
                <div className="flex gap-3 items-end">
                <p className="lg:text-3xl text-xl font-extrabold text-primary transition-all duration-300">{debts.data.snowball.total_months}</p>
                <p className="text-lg font-bold text-neutral tracking-tight">MONTHS TO PAYOFF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
};
export default Debt;
