import React from 'react'

const MonthlySavingsCard = ({
  amount ,
  change ,
}) => {

  const fmt = (n) => '₹' + n.toLocaleString('en-IN')
  const isPositive = change >= 0

  return (
    <div className="bg-white rounded-2xl p-4 h-full shadow-sm relative">

      <div className="flex flex-col items-start justify-between mb-2">
        <h3 className="text-base lg:text-lg font-bold text-slate-700 tracking-wide">MONTHLY SAVINGS</h3>
        <p className="text-xs font-medium text-[#6E7889] mt-1">Net capital added to wealth</p>
      </div>

      <div className="flex flex-col  items-center justify-center gap-2 mb-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-800">{fmt(amount)}</h2>
        <span className={`text-m font-semibold ${isPositive ? 'text-[#38DEBB]' : 'text-red-500'}`}>
          {isPositive ? '+' : ''}{fmt(change)} {isPositive ? '↑' : '↓'}
        </span>
      </div>

      <div className='flex justify-center  mt-5'>
        <span className= {`lg:h-10 w-auto  px-4 py-2 rounded-xl font-bold ${isPositive ? 'bg-primary': 'bg-red-200'} ${isPositive ? 'text-[#006B58]': 'text-red-500'} tracking-wider`}>
          {isPositive ? 'STEADY GROWTH' : 'UNSTABLE GROWTH'}
        </span>
      </div>

      
     

     

    </div>
  )
}

export default MonthlySavingsCard