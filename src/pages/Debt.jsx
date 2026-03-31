import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import data from "../test/debtPage.json";
import CollapseCard from "../components/CollapseCard";

const Debt = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [debts, setDebts] = useState(null);

  const USE_MOCK = false; // flip to false when backend is ready

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
  } 
  else {
    if(debts.data.newDebts.length === 0){
      return (
        <div className="p-10">
          <h1 className="text-2xl font-bold mb-4">Your Debts</h1>
          <p className="text-gray-600">You have no debts! Great job!</p>
        </div>
      );
    }
    else{
      return(
        <div className="bg-[#F9F9FF] min-h-screen">
          <div className="flex justify-between pt-15 pb-4 px-10 items-center">
            <h1 className="sm:text-2xl text-xl font-bold tracking-tighter text-black">Your Active Accounts</h1>
            <p className="sm:text-lg text-md text-[#006B58] font-bold">{debts.data.newDebts.length} Active Loans</p>
          </div>
          <div className="flex flex-col justify-center items-center py-5">
            {debts.data.newDebts.map((debt)=>(
              <CollapseCard key={debt.name} debt={debt}/>
            ))}
          </div>
        </div>
      )
    }
  }
};
export default Debt;
