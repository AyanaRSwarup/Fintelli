import React from 'react'

const CollapseCard = ({debt}) => {
  return (
            <div className="w-[80vw] sm:w-[76vw] max-w-3xlsm:h-25 h-20 my-4 transition-all px-10 flex duration-300 bg-white rounded-2xl">
                <div className='flex flex-col justify-center gap-2'>
                    <h1 className='sm:text-lg text-sm font-bold tracking-wide'>{debt.name}</h1>
                    <div className='bg-red-300 rounded-2xl px-3 py-0.5 w-fit'>
                        <p className='sm:text-sm text-xs font-bold text-red-600 text-center' >{debt.interest_rate}% PA</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-end gap-2 ml-auto'>
                    <p className='sm:text-lg text-md font-bold tracking-wider'>₹{debt.principal}</p>
                </div>

            </div>
  )
}

export default CollapseCard