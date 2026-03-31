import React from "react"
import HealthScoreCard from "../components/Cards/HealthScoreCard"
import StatCard from "../components/Cards/StatCard"
import AllocationCard from "../components/Cards/AllocationCard"
import EmergencyFundCard from "../components/Cards/EmergencyFundCard"
import MonthlySavingsCard from "../components/Cards/MonthlySavingsCard"

const Dashboard = () => {
  return (
    <div className=" flex flex-col text-slate-800" style={{ background: '#F9F9FF' }}>
      
      <div className="px-8 pt-6 pb-1 flex flex-col gap-3 overflow-hidden flex-1">
        <div className="grid grid-cols-3 gap-3 h-48">
          <HealthScoreCard score={74} max={100} />
          <StatCard
            label="Disposable Income"
            amount="₹24,500"
            subText="Available for your goals this month"
            badgeText=" ↑ +12.4% vs last month"
            badgeType="green"
          />
          <StatCard
            label="Total Debt"
            amount="₹1,70,000"
            subText="Personal Loan & Credit Cards"
            badgeText="6 months remaining"
            badgeType="red"
          />
        </div>

        
        <div className='h-40'>
          <AllocationCard
            benchmarkNeeds={50}
            benchmarkWants={30}
            benchmarkSavings={20}
            yourNeeds={58}
            yourWants={27}
            yourSavings={15}
        />
        </div>
        

       
        <div className="grid grid-cols-2 gap-3 flex-1 min-h-0">
          <EmergencyFundCard
            current={45000}
            target={120000}
            tip="Increasing your monthly savings by ₹2,000 will help you hit your 3-month goal 14 days earlier."
          />
          <MonthlySavingsCard
            amount={12800}
            change={1200}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard