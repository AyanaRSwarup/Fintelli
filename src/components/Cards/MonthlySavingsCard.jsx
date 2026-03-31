import React from 'react'
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts'


const data = [
  { name: 'NOV', value: 9000 },
  { name: 'DEC', value: 7500 },
  { name: 'JAN', value: 11000 },
  { name: 'FEB', value: 8000 },
  { name: 'MAR', value: 12800 },
]

const MonthlySavingsCard = ({
  amount = 12800,
  change = 1200,
}) => {

  const fmt = (n) => '₹' + n.toLocaleString('en-IN')
  const isPositive = change >= 0

  return (
    <div className="bg-white rounded-2xl p-4 h-full shadow-sm relative">

      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="text-lg font-bold text-slate-700">Monthly Savings</h3>
          <p className="text-xs font-medium text-[#6E7889] mt-0.5">Net capital added to wealth</p>
        </div>
        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#FFEEDD] text-[#A46B00] tracking-wider">
          STEADY GROWTH
        </span>
      </div>

      <div className="flex items-baseline gap-2 mb-4">
        <h2 className="text-3xl font-bold text-slate-800">{fmt(amount)}</h2>
        <span className={`text-sm font-semibold ${isPositive ? 'text-[#38DEBB]' : 'text-red-500'}`}>
          {isPositive ? '+' : ''}{fmt(change)} {isPositive ? '↑' : '↓'}
        </span>
      </div>

      
      <ResponsiveContainer width="100%" height={100}>
        <LineChart data={data}>
          <XAxis
            dataKey="name"
            tick={{ fontSize: 10, fill: '#94a3b8' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{ background: '#1e293b', border: 'none', borderRadius: '8px', color: '#38DEBB', fontSize: '12px' }}
            formatter={(value) => [fmt(value), 'Savings']}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#10b981"
            strokeWidth={2.5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>

     

    </div>
  )
}

export default MonthlySavingsCard