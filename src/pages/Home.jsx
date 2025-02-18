import React from 'react'
import plusBtn from '../assets/plusBtn.svg'

function Home() {
  return (
    <div className='w-full max-w-[1200px]'>
      <div className='flex justify-between w-full'>
        <h1 className='font-bold text-[#0C0E16] text-[32px]'>Drivers</h1>
        <button className="hidden md:flex items-center gap-[8px] bg-[#FCE000] p-[6px] pr-[14px] rounded-[24px] text-[12px] text-white active:scale-95 transition-[0.3s] cursor-pointer">
          <img src={plusBtn} alt="New" /> New Driver </button>
      </div>
    </div>
  )
}

export default React.memo(Home);