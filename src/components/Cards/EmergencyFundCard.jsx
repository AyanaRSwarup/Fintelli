import React from 'react'

const EmergencyFundCard = ({current,target}) => {

  const progress = Math.min((current / target) * 100, 100)

  const fmt = (n) => '₹' + n.toLocaleString('en-IN')

  return (
    <div className="bg-white rounded-2xl p-4 h-full shadow-sm">

      <div className="flex flex-col gap-6 items-start justify-between ">
        <div>
          <h3 className="text-base lg:text-lg font-bold text-slate-700 tracking-wide">EMERGENCY FUND</h3>
          <p className="text-xs font-medium text-[#6E7889] mt-1">Safeguard for unexpected events</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-2.5 ">
          <p className="text-2xl lg:text-3xl font-bold text-slate-800">{fmt(current)}</p>
          <p className="text-m font-medium text-[#6E7889] mt-1">of {fmt(target)}</p>
      </div>
      

      <div className="w-full h-9 mt-5 bg-gray-100 rounded-l overflow-hidden ">
        <div
          className="h-full bg-[#00C1A0]  transition-all duration-700"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex justify-end mb-4">
        <span className="text-[10px] text-[#6E7889]">3 MO</span>
      </div>

    </div>
  )
}

export default EmergencyFundCard