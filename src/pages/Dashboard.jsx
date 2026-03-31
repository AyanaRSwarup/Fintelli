import React from "react"
import HealthScoreCard from "../components/Cards/HealthScoreCard"
import StatCard from "../components/Cards/StatCard"
import AllocationCard from "../components/Cards/AllocationCard"
import EmergencyFundCard from "../components/Cards/EmergencyFundCard"
import MonthlySavingsCard from "../components/Cards/MonthlySavingsCard"
import Loading from "../components/Loading"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import data from "../test/dashboardData.json"

const Dashboard = () => {

  
  const [loading, setLoading] = useState(true)
  const [dashboard, setDashboard] = useState(null)
  const navigate = useNavigate()

  const USE_MOCK = true 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const actualData = USE_MOCK
          ? data
          : await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/dashboard`, {
              method: "GET",
              credentials: "include",
            }).then((res) => res.json())

        setDashboard(actualData.data)
        setLoading(false)
      } catch (error) {
        navigate("/error505")
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <Loading />
  }
  
  return (
    <div className=" flex flex-col text-slate-800" style={{ background: '#F9F9FF' }}>
      
      <div className="px-8 pt-6 pb-1 flex flex-col gap-3 overflow-hidden flex-1">
        <div className="grid grid-cols-3 gap-3 h-48">
          <HealthScoreCard 
            score={dashboard.healthScore} 
            max={100} 
          />

          <StatCard
            label="Disposable Income"
            amount={`₹${dashboard.discretionaryIncome.toLocaleString()}`}
            subText="Available for your goals this month"
            badgeType="green"
          />

          <StatCard
            label="Total Debt"
            amount={`₹${dashboard.totalOutstandingDebt.toLocaleString()}`}
            subText="Personal Loan & Credit Cards"
            badgeType="red"
          />
        </div>

        
        <div className='h-40'>
          <AllocationCard
            benchmarkNeeds={Math.round((dashboard.maxNeeds/dashboard.monthlyIncome)*100)}
            benchmarkWants={Math.round((dashboard.maxWants/dashboard.monthlyIncome)*100)}
            benchmarkSavings={Math.round((dashboard.targetSavings/dashboard.monthlyIncome)*100)}
            yourNeeds={Math.round((dashboard.needs / dashboard.monthlyIncome) * 100)}
            yourWants={Math.round((dashboard.wants / dashboard.monthlyIncome) * 100)}
            yourSavings={Math.round((dashboard.savings / dashboard.monthlyIncome) * 100)}
        />
        </div>
        

       
        <div className="grid grid-cols-2 gap-3 flex-1 min-h-0">
          <EmergencyFundCard
            current={dashboard.emergencyFund}
            target={dashboard.targetEmergencyFund}
            
          />
          <MonthlySavingsCard
            amount={dashboard.savings}
            change={dashboard.savings - dashboard.targetSavings}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard