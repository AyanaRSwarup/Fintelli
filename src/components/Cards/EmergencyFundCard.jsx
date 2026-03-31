import React from 'react'

const EmergencyFundCard = ({
  current = 45000,
  target = 120000,
  tip = "Increasing your monthly savings by ₹2,000 will help you hit your 3-month goal 14 days earlier.",
}) => {

  const progress = Math.min((current / target) * 100, 100)

  const fmt = (n) => '₹' + n.toLocaleString('en-IN')

  return (
    <div className="bg-white rounded-2xl p-4 h-full shadow-sm">

      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-700">Emergency Fund</h3>
          <p className="text-xs font-medium text-[#6E7889] mt-0.5">Safeguard for unexpected events</p>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold text-slate-800">{fmt(current)}</p>
          <p className="text-xs font-medium text-[#6E7889]">of {fmt(target)}</p>
        </div>
      </div>

      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-1">
        <div
          className="h-full bg-[#00C1A0] rounded-full transition-all duration-700"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex justify-end mb-4">
        <span className="text-[10px] text-[#6E7889]">3 MO</span>
      </div>

      <div className="flex items-start gap-2 bg-slate-50 border border-slate-100 rounded-xl px-3 py-2.5">
        <span className="w-2 h-2 rounded-full bg-[#006B58] mt-1 shrink-0" />
        <p className="text-xs font-medium text-[#6E7889] leading-relaxed">{tip}</p>
      </div>

    </div>
  )
}

export default EmergencyFundCard