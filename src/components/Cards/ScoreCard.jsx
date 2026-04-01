import React from 'react'
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ScoreCard = ({ Score, max, label, Fn }) => {

  const decideColor = ()=>{
    if(Score>60){
      return  '#00C1A0'
    }
    else if (Score>40 && Score<=60){
      return  '#FFB955'
    }
    else{
      return  '#fb2c36'
    }
  }
  const debtColor = ()=>{
    if(Score<40){
      return  '#00C1A0'
    }
    else if (Score>40 && Score<=60){
      return  '#FFB955'
    }
    else{
      return  '#fb2c36'
    }
  }
  const color = Fn === 'debt' ? debtColor() : decideColor()

  return (
    <div className="bg-white rounded-2xl p-2 flex flex-col items-center justify-center gap-3 shadow-sm h-full">
      
      
      <div className="w-20 h-20 lg:w-30 lg:h-30 ">
        <CircularProgressbarWithChildren
          value={Score}
          maxValue={max}
          styles={buildStyles({
           pathColor: color,
           trailColor: '#e5e7eb',
          })}
        >
          <div className="flex flex-col items-center justify-center">
            <span className=" lg:text-2xl font-bold text-slate-800">{Score}</span>
            <span className="text-xs text-slate-400">/ {max}</span>
          </div>
        </CircularProgressbarWithChildren>
           
        
      </div>

     
      <div className='flex gap-3  items-center justify-evenly w-full h-8 '>
        <span className='flex items-center justify-center gap-1 font-bold text-xs lg:text-[15px] text-slate-500'>
          
          {label}
        </span>
        
      </div>
    </div>
  )
}
export default ScoreCard