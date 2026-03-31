import React from 'react'
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const HealthScoreCard = ({ score = 74, max = 100 }) => {
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center gap-3 shadow-sm h-full">
      
      
      <div className="w-25 h-25">
        <CircularProgressbarWithChildren
          value={score}
          maxValue={max}
          
          styles={buildStyles({
           
            pathColor: '#00C1A0',
      
            trailColor: '#e5e7eb',
            
            
          })}
          
        >
          <div className="flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-slate-800">{score}</span>
            <span className="text-xs text-slate-400">/ {max}</span>
          </div>
        </CircularProgressbarWithChildren>  
        
      </div>

     
      
      <p className="text-sm font-semibold text-slate-600">Health Score</p>
    </div>
  )
}

export default HealthScoreCard