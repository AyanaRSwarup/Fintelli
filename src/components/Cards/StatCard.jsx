import React from 'react'


const StatCard = ({
  label,
  amount,
  subText,
  
  badgeType = 'green',
}) => {


  const amountColor = {
    green: 'text-[#38DEBB]',
    red: 'text-red-700',
  }

  

  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col justify-between shadow-sm h-full">
      <p className="text-[10px] text-[#6E7889] font-[Plus Jakarta Sans] font-bold tracking-widest uppercase ">
        {label}
      </p>

      <h2 className={`text-3xl font-bold ${amountColor[badgeType]}`}>
        {amount}
      </h2>

      {subText && (
        <p className="text-xs text-[#6E7889] mt-1">{subText}</p>
      )}

      
    </div>
  )
}

export default StatCard