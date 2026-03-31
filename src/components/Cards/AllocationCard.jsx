import React from 'react'


const AllocationBar = ({ label, tag, needs, wants, savings }) => {
  return (
    <div className="flex items-center gap-4">

     
      <span className="text-xs text-slate-500 w-28 shrink-0">{label}</span>

    
      <div className="flex flex-1 h-4 rounded-full overflow-hidden gap-0.5">
        <div className="h-full bg-emerald-500 rounded-l-full" style={{ width: `${needs}%` }} />
        <div className="h-full bg-amber-400" style={{ width: `${wants}%` }} />
        <div className="h-full bg-teal-700 rounded-r-full" style={{ width: `${savings}%` }} />
      </div>

      
      <span className="text-[10px] text-slate-400 font-semibold tracking-wider w-28 text-right">
        {tag}
      </span>
    </div>
  )
}

const AllocationCard = ({
  
  benchmarkNeeds = 50,
  benchmarkWants = 30,
  benchmarkSavings = 20,

  yourNeeds = 58,
  yourWants = 27,
  yourSavings = 15,
}) => {
  return (
    <div className="bg-white rounded-2xl pt-3 pl-6 pr-6 shadow-sm h-full">
      <h3 className="text-lg font-bold text-black mb-5">Income Allocation</h3>

      <div className="flex gap-10">

        <div className="flex-1 flex flex-col   gap-2">
          <div className="flex justify-between w-130 mb-1">
            <span className="text-xs text-slate-600 font-bold">Ideal 50/30/20</span>
            <span className="text-[10px] text-[#6E7889] font-bold tracking-wider">BENCHMARK</span>
          </div>
          <div className="flex h-7 w-130 overflow-hidden ">
            <div className="h-full bg-[#00C1A0] rounded-l-sm" style={{ width: `${benchmarkNeeds}%` }} />
            <div className="h-full bg-[#E89B14]" style={{ width: `${benchmarkWants}%` }} />
            <div className="h-full bg-teal-700 rounded-r-sm" style={{ width: `${benchmarkSavings}%` }} />
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <div className="flex justify-between w-130 mb-1">
            <span className="text-xs text-slate-600 font-bold">Your Split</span>
            <span className="text-[10px] text-[#6E7889] font-bold tracking-wider">CURRENT MONTH</span>
          </div>
          <div className="flex h-7 w-130 overflow-hidden ">
            <div className="h-full bg-[#00C1A0] rounded-l-sm" style={{ width: `${yourNeeds}%` }} />
            <div className="h-full bg-[#E89B14]" style={{ width: `${yourWants}%` }} />
            <div className="h-full bg-teal-700 rounded-r-sm" style={{ width: `${yourSavings}%` }} />
          </div>
        </div>

      </div>

      <div className="flex items-center justify-center  font-semibold gap-6 mt-4 ">
        <span className="flex items-center gap-1.5 text-xs text-slate-400">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00C1A0] inline-block" />
          NEEDS ({yourNeeds}%)
        </span>
        <span className="flex items-center gap-1.5 text-xs text-slate-400">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E89B14] inline-block" />
          WANTS ({yourWants}%)
        </span>
        <span className="flex items-center gap-1.5 text-xs text-slate-400">
          <span className="w-2.5 h-2.5 rounded-full bg-teal-700 inline-block" />
          SAVINGS ({yourSavings}%)
        </span>
      </div>
    </div>
  )
}

export default AllocationCard