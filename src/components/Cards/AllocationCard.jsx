import React from 'react'

const AllocationCard = ({benchmarkNeeds,benchmarkWants,benchmarkSavings,yourNeeds,yourWants,yourSavings,}) => {
  
  const remaining = 100 - yourNeeds - yourWants - yourSavings

  return (
    <div className="bg-white rounded-2xl pt-3 px-6 shadow-sm h-full">
      <h3 className="text-base lg:text-lg font-bold text-slate-700 mb-3 tracking-wide">
        INCOME ALLOCATION
      </h3>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">

       
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex justify-between mb-1">
            <span className="text-[10px] text-slate-600 font-bold tracking-wider">IDEAL</span>
            <span className="text-[10px] text-[#6E7889] font-bold tracking-wider">BENCHMARK</span>
          </div>

          <div className="flex h-7 w-full rounded-sm overflow-hidden">
            <div className="h-full bg-[#00C1A0]" style={{ width: `${benchmarkNeeds}%` }} />
            <div className="h-full bg-[#E89B14]"  style={{ width: `${benchmarkWants}%` }} />
            <div className="h-full bg-teal-700"   style={{ width: `${benchmarkSavings}%` }} />
          </div>

          
          <div className="flex flex-wrap gap-x-5 gap-y-1 mt-1">
            <Legend color="bg-[#00C1A0]" label={`NEEDS (${benchmarkNeeds}%)`} />
            <Legend color="bg-[#E89B14]"  label={`WANTS (${benchmarkWants}%)`} />
            <Legend color="bg-teal-700"   label={`SAVINGS (${benchmarkSavings}%)`} />
          </div>
        </div>

        
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex justify-between mb-1">
            <span className="text-[10px] text-slate-600 font-bold tracking-wider">YOUR SPLIT</span>
            <span className="text-[10px] text-[#6E7889] font-bold tracking-wider">CURRENT MONTH</span>
          </div>

          <div className="flex h-7 w-full rounded-sm overflow-hidden">
            <div className="h-full bg-[#00C1A0]" style={{ width: `${yourNeeds}%` }} />
            <div className="h-full bg-[#E89B14]"  style={{ width: `${yourWants}%` }} />
            <div className="h-full bg-teal-700"   style={{ width: `${yourSavings}%` }} />
            <div className="h-full bg-slate-200"  style={{ width: `${remaining}%` }} />
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-1 mt-1">
            <Legend color="bg-[#00C1A0]" label={`NEEDS (${yourNeeds}%)`} />
            <Legend color="bg-[#E89B14]"  label={`WANTS (${yourWants}%)`} />
            <Legend color="bg-teal-700"   label={`SAVINGS (${yourSavings}%)`} />
            {remaining > 0 && (
              <Legend color="bg-slate-300" label={`REMAINING (${remaining}%)`} />
            )}
          </div>
        </div>

      </div>
    </div>
  )
}


const Legend = ({ color, label }) => (
  <span className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-400 whitespace-nowrap">
    <span className={`w-2.5 h-2.5 rounded-full inline-block ${color}`} />
    {label}
  </span>
)

export default AllocationCard