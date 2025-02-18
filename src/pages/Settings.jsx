import React from 'react'
import { Link } from 'react-router-dom';

function Settings() {
  return (
    <div>
      <div className='flex gap-[7px] text-[12px]'>
        <Link to={'/'}>Home</Link> <span className='text-gray-400'>/</span> <p>Settings</p>
      </div>
      <h1 className='font-bold text-[#0C0E16] text-[32px]'>Settings</h1>
      <p className='text-[#FCE000]'>Password change:</p>
      <form>
        <input type="text" />
      </form>
    </div>
  )
}

export default React.memo(Settings);